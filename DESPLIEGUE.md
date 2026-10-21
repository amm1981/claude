# Despliegue — claude.agrocalera.app

Aplicación estática servida **directamente por Nginx**, sin Docker, Node ni base de datos. Python 3 prepara la carpeta pública. Esta guía asume Ubuntu/Debian con SSH y sudo.

## 1. DNS y paquetes

Apunte el registro A de `claude.agrocalera.app` a la IP del VPS. Si usa AAAA, también debe apuntar al servidor correcto. Permita 80/443 manteniendo el acceso SSH.

```bash
sudo apt update
sudo apt install git python3 nginx apache2-utils certbot python3-certbot-nginx
```

Si usa un panel que administra Nginx/certificados, configure allí el dominio, la carpeta pública y la protección de acceso indicados abajo. No instale otro servidor ni sobrescriba la configuración del panel.

## 2. Descargar el código

Use estas carpetas nuevas dedicadas al proyecto; si ya contienen otra instalación, conserve su contenido y ajuste las rutas antes de continuar.

```bash
sudo mkdir -p /opt/claude /var/www/claude/releases
sudo chown -R "$USER":"$(id -gn)" /opt/claude /var/www/claude
git clone https://github.com/amm1981/claude.git /opt/claude
cd /opt/claude
```

El código vive en `/opt/claude`. Nginx publicará solo `/var/www/claude/current`, nunca el repositorio completo.

## 3. Copiar los materiales privados

El repositorio público excluye el Excel, el reporte con datos de cosecha y las capturas. Sus originales permanecen en el equipo del facilitador. Desde PowerShell en ese equipo, sustituya usuario e IP_DEL_VPS:

```powershell
Set-Location 'C:\Users\AlonsoMendoza\Documents\Proyectos\presentacionClaude'
scp .\EVALUACIONES_20261020225816.xlsx .\reporte_cosecha.html usuario@IP_DEL_VPS:/opt/claude/
```

Deben quedar junto a index.html antes de preparar la publicación. Sin ellos abre el taller, pero no estarán disponibles sus descargas ni el reporte de cosecha. Este reporte pesa aproximadamente 33 MB. No añada estos archivos a Git.

## 4. Crear la primera versión

En el VPS:

```bash
cd /opt/claude
release_dir="/var/www/claude/releases/$(date -u +%Y%m%dT%H%M%S)-$(git rev-parse --short HEAD)"
python3 scripts/build_site.py --output "$release_dir"
chmod -R u=rwX,go=rX "$release_dir"
ln -s "$release_dir" /var/www/claude/current
```

El generador crea una carpeta nueva sin borrar versiones anteriores. Publica HTML, CSS, JavaScript, imágenes, fuentes, la Skill y los dos materiales privados si existen. Excluye `.git`, documentación, configuración y utilidades Python. No necesita instalar dependencias de Python.

## 5. Configurar Nginx y el acceso

La configuración protege todas las rutas, incluidos el Excel y el reporte:

```bash
sudo htpasswd -c /etc/nginx/claude.htpasswd facilitador
sudo chown root:www-data /etc/nginx/claude.htpasswd
sudo chmod 640 /etc/nginx/claude.htpasswd
sudo cp deploy/claude.agrocalera.app.conf /etc/nginx/sites-available/claude.agrocalera.app
sudo ln -s /etc/nginx/sites-available/claude.agrocalera.app /etc/nginx/sites-enabled/claude.agrocalera.app
sudo nginx -t
sudo systemctl enable --now nginx
sudo systemctl reload nginx
```

htpasswd solicita la contraseña sin escribirla en el comando. Use `-c` solo al crear el archivo; para cambiar/agregar usuarios después: `sudo htpasswd /etc/nginx/claude.htpasswd NOMBRE`.

Si el dominio ya tiene una configuración, actualícela en vez de crear un bloque duplicado. No cambie los sitios de otras aplicaciones.

## 6. Activar HTTPS

Con el DNS propagado y el puerto 80 accesible:

```bash
sudo certbot --nginx -d claude.agrocalera.app --redirect
sudo certbot renew --dry-run
```

Certbot configura el certificado y la redirección a HTTPS. Use **https://claude.agrocalera.app** después de este paso. No introduzca la contraseña del taller en HTTP antes de activar HTTPS.

## 7. Verificar

```bash
# Sin credenciales: debe responder 401.
curl -I https://claude.agrocalera.app/
curl -I https://claude.agrocalera.app/EVALUACIONES_20261020225816.xlsx
curl -I https://claude.agrocalera.app/reporte_cosecha.html

# Con credenciales: pide contraseña; debe responder 200.
curl --fail --user facilitador https://claude.agrocalera.app/healthz
curl --fail -I --user facilitador https://claude.agrocalera.app/
curl --fail -I --user facilitador https://claude.agrocalera.app/EVALUACIONES_20261020225816.xlsx
curl --fail -I --user facilitador https://claude.agrocalera.app/reporte_cosecha.html
```

En el navegador pruebe logos, navegación, copia de prompts, modos, checklist tras recargar, descarga del Excel y filtros de Cosecha. Compruebe que `.git/config` y `DESPLIEGUE.md` no estén disponibles.

El avance se guarda por navegador y dominio. El progreso de localhost no se traslada automáticamente al dominio. La aplicación no envía archivos a Claude automáticamente.

## 8. Actualizar

Primero guarde el destino actual y una copia privada de los materiales. Después:

```bash
cd /opt/claude
readlink -f /var/www/claude/current
git pull --ff-only origin main
release_dir="/var/www/claude/releases/$(date -u +%Y%m%dT%H%M%S)-$(git rev-parse --short HEAD)"
python3 scripts/build_site.py --output "$release_dir"
chmod -R u=rwX,go=rX "$release_dir"
```

Continúe solo si terminó correctamente y contiene los materiales necesarios. Cambie el enlace de forma atómica:

```bash
ln -s "$release_dir" /var/www/claude/current.next
mv -Tf /var/www/claude/current.next /var/www/claude/current
curl --fail --user facilitador https://claude.agrocalera.app/healthz
```

No necesita reiniciar Nginx si su configuración no cambió. Git conserva los materiales ignorados. Si cambia el Excel/reporte, cópielo antes de generar la versión. Si `current.next` ya existe de un intento previo, compruebe y resuelva ese enlace antes de repetir.

### Volver a una versión anterior

Sustituya RUTA_VERSION_ANTERIOR por el destino guardado:

```bash
ln -s RUTA_VERSION_ANTERIOR /var/www/claude/current.next
mv -Tf /var/www/claude/current.next /var/www/claude/current
```

Cada versión incluye sus materiales. Guarde además respaldos fuera de la carpeta pública. Esta guía no borra versiones anteriores.

## Diagnóstico

```bash
sudo nginx -t
sudo systemctl status nginx
sudo tail -n 60 /var/log/nginx/error.log
readlink -f /var/www/claude/current
```

| Problema | Revisar |
| --- | --- |
| 403 tras iniciar sesión | Permisos de lectura y acceso a las carpetas. |
| Excel/reporte 404 | Material presente antes de generar esa versión. |
| Otro sitio o listado de carpetas | DNS, server_name y raíz pública. |
| Certificado no emitido | DNS, AAAA y acceso público por puerto 80. |
| Cambios no visibles | Enlace current, recarga y caché del panel/CDN. |

Referencias: [Nginx: archivos estáticos](https://nginx.org/en/docs/beginners_guide.html#static), [Nginx: autenticación](https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html), [Certbot: Nginx](https://eff-certbot.readthedocs.io/en/stable/using.html#nginx).
