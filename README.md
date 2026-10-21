# Claude en acción · AgroCalera

Aplicación estática para conducir un taller de Claude para todo el personal de AgroCalera, con cuatro desafíos (37 minutos sugeridos). Sanidad Agrícola es el caso práctico inicial; no define la orientación del taller. HTML, CSS y JavaScript ES Modules, sin backend, dependencias de ejecución ni credenciales.

## Producción

Consulte [DESPLIEGUE.md](DESPLIEGUE.md) para instalar directamente con Nginx en **https://claude.agrocalera.app**, con HTTPS y acceso protegido. Incluye actualización, verificación y recuperación de versiones.

El repositorio público contiene el código y los recursos de interfaz. El Excel, `reporte_cosecha.html` y las capturas con datos operativos se excluyen de Git; conserve los originales y cópielos al VPS por SSH/SFTP antes de construir. Sin esos materiales el taller abre, pero sus descargas y el reporte de cosecha no estarán disponibles.

## Ejecutar

**Opción recomendada:** haga doble clic en `iniciar.cmd`. El taller se abrirá automáticamente en el navegador y siempre servirá la carpeta correcta. Mantenga abierta la ventana del servidor mientras utiliza la aplicación. Usa el primer puerto libre entre 8081 y 8090, sin interferir con otros servidores.

Si ve «Directory listing for /», el servidor se inició desde otra carpeta. Use `iniciar.cmd` o indique explícitamente el directorio:

```powershell
python -m http.server 8081 --bind 127.0.0.1 --directory "C:\Users\AlonsoMendoza\Documents\Proyectos\presentacionClaude"
```

Abra http://127.0.0.1:8081 en este caso.

Desde este directorio, en PowerShell:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Abrir http://localhost:8080. No abrir index.html con file://: los módulos necesitan un servidor HTTP. Detener con Ctrl+C. Puede usar otro puerto si 8080 está ocupado.

## Material de Sanidad

El Excel `EVALUACIONES_20261020225816.xlsx` está ubicado en la carpeta principal del proyecto y vinculado desde `scripts/content/sanidad.js`. La aplicación comprueba su disponibilidad al cargar; también puede pulsar **Comprobar archivo**. **Localizar copia** solo identifica un archivo de su equipo; no lo sube, analiza ni copia a la carpeta. Adjunte el archivo manualmente en Claude con la autorización correspondiente.

La aplicación no presenta resultados del Excel ni simula dashboards con datos ficticios. Los análisis se realizan en Claude y requieren revisión técnica.

## Interfaz simplificada

La portada muestra accesos directos a los cuatro ejercicios. Presentación usa títulos de acción, pasos abreviados y una vista previa de los prompts. **Copiar prompt** conserva el texto completo; **Ver prompt completo** lo despliega. El modo Guía mantiene las instrucciones detalladas y notas de facilitación. Sobre el fondo oscuro de portada se utiliza `AgroCalera_verde.png`; en interiores claros se conserva `AgroCalera_logo.png`.

## Uso durante el taller

- **Presentación / Guía**: alternan sobre el mismo contenido y conservan desafío y paso. Guía muestra instrucciones, objetivo, resultado esperado, dificultades y checklist.
- El índice lateral y el diálogo de índice permiten saltar entre desafíos; las pestañas permiten elegir cualquier paso.
- **Copiar prompt** copia todo el texto, aunque el bloque esté contraído. Se puede editar temporalmente y restaurar el original. Las ediciones se conservan durante esta sesión de página, no tras recargar.
- Checklists, respuestas locales, explicaciones reveladas, modo, paso y tiempos restantes se guardan en LocalStorage bajo `agrocalera-claude-v1`. El reloj queda pausado al cambiar de paso o recargar.
- **F**: pantalla completa; **G**: alternar modo; **H**: inicio; **← / →**: anterior y siguiente. Al editar o abrir diálogos los atajos no interfieren.
- El panel de facilitación puede mostrarse u ocultarse en Presentación. En móvil hay un botón Índice.
- Reiniciar avance requiere confirmación. Llegar al cierre no marca automáticamente los checklists.
- Las preguntas son respuestas locales, sin votación remota ni contadores de asistentes.

## Recursos y funcionamiento sin Internet

Logos y fotografía originales en la raíz. Fuentes Sora e Inter incluidas en `resources/fonts/` con sus licencias OFL. Iconos SVG incorporados, sin CDN. Interfaz, prompts y descarga de Skill funcionan sin Internet mientras el servidor local esté activo y se conserven los recursos. Claude y su documentación necesitan Internet. No se implementa autenticación ni conexión con una API de Claude.

## Skill de ejemplo

`resources/skills/analista-fitosanitario/SKILL.md` y `resources/skills/analista-fitosanitario.zip` incluyen un procedimiento de referencia. Revisar y adaptar con Sanidad antes de cargar en Claude. La página no instala ni ejecuta Skills. El ZIP contiene la carpeta `analista-fitosanitario` con su SKILL.md.

## Estructura

```text
index.html
styles/                 # tipografía y diseño responsive
scripts/app.js          # vistas, navegación, copia, estado e interacciones
scripts/icons.js        # iconos SVG
scripts/content/        # módulos de contenido y catálogo de áreas
resources/fonts/        # fuentes locales y licencias
resources/sanidad/      # notas y recursos auxiliares del caso
resources/skills/       # ejemplo editable y ZIP
docs/agregar-area.md    # guía de extensión
```

## Referencias oficiales

Revisadas el 20 de octubre de 2026. Los nombres de menús y disponibilidades pueden variar por cuenta, plan y organización.

- Skills: https://support.claude.com/en/articles/12512180-use-skills-in-claude
- Crear Skills: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
- Memoria: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
- Proyectos: https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects

## Verificación

Consulte `docs/verificacion.md` para el alcance de las comprobaciones realizadas. Para repetir: verificar portada, cada desafío, copia completa, edición/restauración, cambios de modo, checklists persistidos tras recargar, temporizador, respuestas, cierre y vista móvil.


## Reporte HTML y acciones guiadas

El caso de Sanidad tiene un entregable concreto: **reporte-sanidad.html**, generado por Claude a partir del Excel autorizado. El prompt principal solicita un HTML autónomo con tablas, filtros, evidencia y limitaciones. Los siguientes prompts revisan y mejoran el mismo archivo. La aplicación del taller no genera ni valida automáticamente ese reporte.

En Presentación, la preparación muestra una acción por vez. Los círculos permiten cambiar de acción y «Listo» registra una confirmación manual. Las acciones de ejecución y los criterios de revisión se pueden marcar; se guardan junto al avance local. La pregunta al público y el contenido esperado del reporte se despliegan solo cuando se necesitan. En Guía siguen disponibles las instrucciones completas.


## Regla de redacción del taller

Aplicar a todos los módulos y a sus futuras ampliaciones:
- Usar frases directas y una acción por instrucción.
- Mantener los prompts en torno a 50–100 palabras; hasta 110 cuando se necesiten criterios adicionales.
- Conservar objetivo, entregable y verificaciones esenciales; eliminar repeticiones y frases decorativas.
- Mostrar una acción por vez y dejar el detalle adicional en Guía o en desplegables.
- No reducir los criterios técnicos necesarios para evitar datos inventados o comparaciones inválidas.

Los prompts del taller se mantienen breves; los de Sanidad tienen entre 12 y 106 palabras.


## Caso implementado: Cosecha

En la portada, seleccione **Cosecha**, o use **Casos prácticos** desde el menú lateral. El caso incluye cuatro pasos: abrir el reporte, probar sus filtros, distinguir fuentes y revisarlo con Claude si tiene autorización.

**Explorar reporte** abre `reporte_cosecha.html` dentro del sistema, con encabezado fijo y retorno al caso. También puede abrirlo aparte o descargar el HTML. Se conserva la lógica y los datos del reporte; su diseño usa el tema corporativo del taller. El progreso de Cosecha y Sanidad se guarda por separado.

El visor usa un iframe aislado con permisos para scripts, descargas y diálogos. No habilita acceso al documento del taller. El HTML incorpora su biblioteca de lectura de Excel y datos; no se detectaron referencias HTTP externas ni llamadas de red en el código de la aplicación. No se envían datos a Claude automáticamente.

### Alcance del análisis del archivo recibido

- Tamaño aproximado con fuentes incluidas: 33 MB; puede tardar en cargar.
- Incluye 64.151 registros en su constante `SAMPLE`, fechados entre el 19 de enero y el 19 de octubre de 2026. Estos datos proceden del HTML recibido; no se validaron contra el Excel original de Cosecha, que no está en el proyecto.
- Secciones: Resumen, Promedio real, Cosecha por fechas, Auditoría y Criterios.
- **Resumen** y **Cosecha por fechas** consultan los registros incorporados o los de un nuevo Excel compatible. El resumen utiliza kilogramos estimados.
- **Promedio real** consulta `REAL_REFERENCE`, una referencia fija del 30 de marzo al 7 de abril de 2026. Cargar otro Excel no la reemplaza; algunos filtros quedan inactivos. No confundir ambas fuentes.
- La carga de Excel lee solo la primera hoja y exige posiciones específicas para FECHA, SECTOR, DNI, JABAS y TOTAL KG. No es un importador de estructura libre.
- Auditoría revisa filas idénticas, campos faltantes, cantidades, coherencia de kg, fechas, jornada y atributos del sector. Las alertas son observaciones para revisar. La regla nominal de jornada es 8,5 horas / 1 jornal; el código aplica tolerancias de 8,51 / 1,01. Confirmar estos criterios con Operaciones antes de usarlos como política.
- Se conserva la exportación CSV de auditoría. Los scripts y datos originales no fueron modificados; solo se adaptaron el tema visual y el rótulo del menú.


### Diseño corporativo del reporte

`styles/cosecha.css` define el tema del reporte: blanco, verde #14502D, Inter y Sora, navegación fija, tarjetas y controles coherentes con el taller. Para aplicar futuros ajustes:

```powershell
python scripts/theme_cosecha.py
```

El script incorpora el CSS y las fuentes en el propio HTML para conservar su uso autónomo al descargarlo. Comprueba por hash que ningún script del reporte cambió. No necesita Internet ni procesa o altera los registros.
