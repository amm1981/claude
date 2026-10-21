# Verificación de la primera versión

## Preparación del VPS · 21 de octubre de 2026

- Publicación separada mediante `scripts/build_site.py`: originales HTML/JS/imágenes y materiales copiados sin alteraciones; configuración, `.git` y utilidades Python excluidos.
- Módulos JavaScript comprobados con `node --check`. Excel, reporte incorporado, capturas y salida generada excluidos del repositorio público.
- Configuración para Nginx directo en `claude.agrocalera.app`, con guía de HTTPS, acceso protegido, actualización y reversión.
- No se ha accedido al VPS: la configuración de Nginx, el DNS y la emisión del certificado deben validarse allí con los comandos de `DESPLIEGUE.md`.

Verificación local en navegador realizada el 20 de octubre de 2026 (hora de Lima).

- Servidor estático en localhost:8080 y comprobación de sintaxis de los módulos JavaScript.
- Recursos corporativos originales cargados. Fuentes variables locales Inter y Sora con licencia OFL; sin peticiones a CDN durante el uso.
- Recorrido por 4 desafíos y 21 pasos. Nueve prompts completos: copia contrastada con el texto del bloque, incluidos saltos de línea. Confirmación visual de copia.
- Edición temporal copiada correctamente y restauración al original comprobada.
- Cambio entre Guía y Presentación; conservación del paso y del modo tras recarga.
- Checklist marcado, recarga y comprobación de persistencia. Respuestas locales y explicaciones revelables comprobadas.
- Temporizador: inicio, descenso de tiempo, pausa y reinicio comprobados.
- Excel ausente: aviso visible con directorio y nombre exactos; no se generaron resultados.
- Acordeón, índice directo, cierre y diálogo de reinicio con confirmación comprobados. El avance de prueba se reinició al finalizar.
- Revisión visual a 1920×1080 y 390×844; sin desbordamiento horizontal de la página. Las pestañas de pasos tienen desplazamiento horizontal propio en móvil. El contenido largo puede desplazarse verticalmente; no se recorta.
- Consola revisada sin errores JavaScript ni advertencias. Una comprobación del Excel ausente puede registrar un HTTP 404 esperado en el servidor.
- Enlaces de Claude y documentación oficial definidos con target="_blank" y rel="noopener noreferrer". La ayuda oficial de Skills y Memoria se consultó. No se inició sesión ni se ejecutaron ejercicios en Claude.

## Límites de la verificación

No se probó una carga de Excel existente (no proporcionado), ejecución real en Claude ni instalación de la Skill. La alternativa de copia con execCommand está implementada, pero no se forzó la desactivación de Clipboard API en la prueba de navegador. La disponibilidad de pantalla completa depende del navegador; se incluye manejo de error y sugerencia de F11. No se realizó una auditoría formal de accesibilidad ni compatibilidad exhaustiva entre navegadores.

## Actualización: reporte HTML y acciones guiadas · 21 de octubre de 2026

- Prompt principal actualizado para pedir un HTML autónomo de 4.000 caracteres de instrucciones; se comprobó el pegado con longitud completa y sus instrucciones inicial y final.
- Acción individual, navegación entre acciones, confirmación manual, reinicio y persistencia tras recarga verificados.
- Criterios de revisión manual marcados, conservados tras recargar y desmarcados al terminar las pruebas.
- Modo Guía conserva las seis instrucciones completas de preparación; Presentación muestra una acción por vez.
- Objetivo, preparación, generación y validación revisados a 390×844 sin desbordamiento horizontal. Revisión visual adicional a 1920×1080; consola sin errores ni advertencias.
- Skill de ejemplo y ZIP actualizados para solicitar el mismo reporte HTML. No se generó un reporte de datos reales ni se ejecutó el prompt en Claude.


## Integración del caso Cosecha · 21 de octubre de 2026

- Revisados el HTML original, sus scripts, referencias, fuentes de datos, reglas y carga de Excel. No se alteró `reporte_cosecha.html`.
- SHA-256 del original: `5CCF1BEFEA39384EEF85A1DFB75D2495DDAADD41280E0FF34FAB57697087D629`.
- Selección Sanidad/Cosecha desde portada y navegación al caso verificadas.
- Visor interno con iframe aislado, retorno al caso y acceso al HTML independiente implementados. Las cinco secciones del original abren dentro del visor sin errores de consola.
- Filtro Mercado = NACIONAL comprobado: cambia los indicadores visibles del resumen.
- Instrucciones de Guía y datos de materiales específicos de Cosecha comprobados.
- Caso y visor revisados a 390 px sin desbordamiento horizontal. Verificación visual adicional a 1920×1080.
- La exportación CSV conserva su código original y el visor permite descargas. Se pulsó Exportar durante la prueba, pero la herramienta no confirmó recepción del archivo; no se da por validada la descarga.
- No se probó la carga de un Excel de Cosecha porque ese archivo no se proporcionó. No se validaron las cifras del HTML contra su Excel de origen.


## Tema corporativo de Cosecha · 21 de octubre de 2026

- Aplicados fondo blanco, verde #14502D, Inter/Sora, navegación y controles coherentes con el taller.
- El script de aplicación del tema comprobó que los bloques JavaScript, incluidos los datos incorporados, no cambiaron. Hash del contenido de scripts: `b1150e9348a6350d46b8365f615fc3f5483f838581a101601a6b2abe41832228`.
- El reporte ahora incluye el tema y las fuentes para funcionar como HTML autónomo al descargar. Tamaño: 32,7 MB.
- Confirmados los estilos calculados de fondo blanco, menú verde fijo y tipografías Inter/Sora.
- Comprobados el filtro de mercado, Promedio real, Auditoría y el control para ocultar/mostrar el menú, sin errores de consola.
- Vista móvil de 390×844 sin desbordamiento horizontal de la página. La navegación móvil tiene desplazamiento horizontal propio.
- Reaplicar el tema no duplica estilos ni cambia el archivo resultante.
