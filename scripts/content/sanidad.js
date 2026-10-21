const analysis = `Analiza el Excel adjunto de evaluaciones fitosanitarias de cítricos y entrega reporte-sanidad.html, listo para descargar y abrir sin Internet.

Incluye:
1. Tabla de registros que alcanzan o superan sus umbrales: fundo, lote, plaga, estadio, resultado, unidad, umbral y muestra.
2. Resumen breve, filtros por fundo/lote/plaga y detalle con referencia a la hoja y fila de origen.
3. Datos faltantes, inconsistencias y limitaciones del análisis.

Compara solo unidades y umbrales compatibles. Sin umbral comparable, indica «No evaluable». No inventes datos ni recomiendes tratamientos.

Usa fondo blanco, acentos verdes y HTML, CSS y JavaScript en un solo archivo, sin recursos externos. Verifica cálculos y filtros antes de entregarlo.`;
const deeper = `Revisa reporte-sanidad.html contra el Excel original.

Comprueba conteos, umbrales, unidades, muestras y referencias de origen. Revisa las cinco mayores razones resultado / umbral grave solo con valores comparables y denominador mayor que cero.

Corrige errores, identifica datos no evaluables y verifica los filtros. No inventes datos ni recomiendes tratamientos.

Entrega el HTML completo corregido, sin dependencias externas, e indica brevemente qué cambiaste y qué no pudiste verificar.`;
const dashboard = `Mejora reporte-sanidad.html sin cambiar los datos verificados.

Agrega filtros por fundo, lote y plaga, botón «Limpiar filtros», conteo de filas visibles, detalle con evidencia y gráfico de conteos por plaga. Distingue totales filtrados y generales.

Mantén fondo blanco, acentos verdes y buena lectura en móvil e impresión. Entrega un único HTML que funcione sin Internet. No inventes información.`;
const instructions = `Eres un asistente de Sanidad Agrícola especializado en cítricos.

Usa solo los documentos del Proyecto. Distingue fundo, lote, plaga, estadio, fenología y fecha. Compara únicamente unidades y umbrales compatibles; verifica cálculos y muestras. Señala datos faltantes y limitaciones. No inventes datos ni recomiendes tratamientos.

Cuando pida un reporte, entrega reporte-sanidad.html: un archivo que funcione sin Internet, con tablas, filtros y evidencia de origen. Presenta primero los registros que requieren revisión técnica y después un resumen breve.`;
const skill = `Crea una Skill llamada «Analista Fitosanitario» para analizar Excel de evaluaciones de cítricos.

Procedimiento:
1. Validar columnas, fechas, unidades y muestras.
2. Comparar resultados con umbrales compatibles y mostrar registros que requieren revisión.
3. Generar tablas, gráficos y un ranking verificable; usar resultado / umbral grave solo con denominador mayor que cero.
4. Entregar reporte-sanidad.html con filtros, resumen, evidencia de origen y limitaciones, sin dependencias externas.

No inventes datos ni recomiendes tratamientos. Genera SKILL.md con los metadatos requeridos y prepara la carpeta para cargarla en Claude como ZIP.`;
export default {
 id:'sanidad', name:'Sanidad Agrícola', icon:'leaf', title:'Sanidad Inteligente', subtitle:'Análisis Fitosanitario con Claude', description:'De los registros de evaluación a la toma de decisiones informadas.',
 resources:[{name:'EVALUACIONES_20261020225816.xlsx',path:'EVALUACIONES_20261020225816.xlsx'}],
 challenges:[
 {id:'excel',title:'El Excel bajo la lupa',feature:'Análisis de archivos',icon:'file',duration:7,description:'Del Excel al reporte HTML',objective:'Generar un reporte HTML desde el Excel y verificar sus datos.',expected:'reporte-sanidad.html con filtros, evidencia y limitaciones; abre sin Internet.',difficulty:'Sin Excel, pospón la ejecución. Sin unidades o umbrales, pide que indique las limitaciones.',audience:'¿Qué analizarías primero?',checklist:['Abrí Claude','Adjunté el Excel autorizado','Copié el prompt','Generé el reporte HTML','Abrí el HTML y revisé su evidencia','Completé el desafío'],
 steps:[
 {title:'Crear un reporte HTML de Sanidad',label:'Objetivo',eyebrow:'El punto de partida',text:'Del Excel a un archivo que puedes abrir en el navegador.',deliverable:{filename:'reporte-sanidad.html',sections:['Registros que requieren revisión','Resumen y filtros','Evidencia y limitaciones']},question:{title:'¿Qué analizarías primero?',options:['Fundos con mayores resultados','Registros que superan sus umbrales','Plagas más frecuentes','Posibles inconsistencias en los datos'],answer:'Compararemos resultados con sus umbrales y revisaremos inconsistencias.'}},
 {title:'Preparar el archivo',label:'Archivo',resource:true,quickInstructions:['Abre Claude en una pestaña nueva','Crea una conversación nueva','Adjunta el Excel autorizado de Sanidad'],eyebrow:'Prepara la demostración',text:'Usa una copia autorizada del archivo.',instructions:['Abrir Claude','Iniciar una conversación nueva','Adjuntar el Excel de evaluaciones fitosanitarias','Copiar el prompt del siguiente paso','Pegar el prompt en Claude','Ejecutarlo y revisar la respuesta'],link:'claude'},
 {title:'Generar el reporte HTML',label:'Generar',execution:['Pega el prompt en Claude y ejecútalo','Descarga reporte-sanidad.html y ábrelo'],eyebrow:'Prompt 01 · Analizar',prompt:analysis,note:'Comprueba que cada hallazgo pueda rastrearse hasta una fila o registro del archivo.'},
 {title:'Verificar el reporte',label:'Verificar',execution:['Ejecuta la revisión en el mismo chat','Descarga y abre el HTML corregido'],eyebrow:'Prompt 02 · Verificar',prompt:deeper,note:'Una razón elevada no basta: revisa comparabilidad, umbral cero y tamaño de muestra.'},
 {title:'Probar filtros y detalle',label:'Probar',execution:['Solicita los ajustes en el mismo chat','Prueba los filtros y el detalle en el HTML'],eyebrow:'Prompt 03 · Visualizar',prompt:dashboard,note:'El dashboard se genera en Claude. Aquí no mostramos indicadores sin respaldo en el Excel.'},
 {title:'Validar el entregable',label:'Validar',review:['El archivo HTML abre sin conexión','Los conteos y las filas coinciden con el Excel','Los filtros y el detalle funcionan','Las unidades, muestras y umbrales son comparables','Las limitaciones están visibles'],eyebrow:'Pausa para conversar',reveal:{title:'¿Podemos confiar automáticamente en todos los resultados de la IA?',text:'No. Revisa cálculos, muestras, unidades y umbrales. El responsable de Sanidad valida las conclusiones.'},learning:['Verificar cálculos','Revisar muestras y unidades','Validar con Sanidad']}
 ]},
 {id:'proyecto',title:'Crea un Proyecto de Sanidad',feature:'Proyectos',icon:'folder',duration:10,description:'Organizar archivos e instrucciones',objective:'Reutilizar archivos e instrucciones entre chats de un Proyecto.',expected:'Proyecto con Excel, instrucciones y una consulta basada en sus documentos.',difficulty:'Revisa el acceso a Proyectos y confirma que el Excel esté en su conocimiento.',audience:'¿Qué pasa si abrimos otro chat?',checklist:['Abrí Proyectos','Creé el proyecto','Incorporé el Excel autorizado','Configuré las instrucciones','Probé otro chat del proyecto','Completé el desafío'],steps:[
 {title:'Chat y Proyecto',label:'Inicio',eyebrow:'Un contexto que se reutiliza',comparisonImages:[{title:'Chat tradicional',src:'chat_tradicional.png',alt:'Ejemplo visual de una conversación tradicional con Claude'},{title:'Proyecto',src:'proyecto.png',alt:'Ejemplo visual de un Proyecto con chats, archivos e instrucciones'}]},
 {title:'Crear el Proyecto',label:'Crear',quickInstructions:['Crea “Sanidad — Monitoreo Fitosanitario” en Proyectos','Agrega la descripción y el Excel al conocimiento','Configura las instrucciones del siguiente paso','Abre un chat dentro del Proyecto'],eyebrow:'Paso a paso',instructions:['Abre Proyectos y crea uno nuevo','Nómbralo “Sanidad — Monitoreo Fitosanitario”','Describe su objetivo: analizar evaluaciones de cítricos','Agrega el Excel al conocimiento','Pega las instrucciones del siguiente paso','Abre un chat del Proyecto y consulta el archivo'],link:'projects'},
 {title:'Configurar instrucciones',label:'Instrucciones',eyebrow:'Instrucciones del proyecto',prompt:instructions},
 {title:'Consultar los documentos',label:'Consultar',eyebrow:'Ejercicio práctico',prompt:'Usa los documentos y las instrucciones de este Proyecto para generar reporte-sanidad.html. Incluye registros que requieren revisión, resumen, filtros y evidencia. No inventes datos.'},
 {title:'Probar otro chat',label:'Otro chat',eyebrow:'Comprueba la diferencia',reveal:{title:'¿Qué pasa si abrimos otro chat?',text:'Abre otro chat del mismo Proyecto y consulta el Excel. Podrá usar los archivos e instrucciones añadidos al conocimiento del Proyecto.'}}
 ]},
 {id:'skill',title:'Enseña a Claude a trabajar',feature:'Skills',icon:'spark',duration:12,description:'Reutilizar un procedimiento',objective:'Reutilizar el mismo procedimiento con nuevos archivos.',expected:'Skill cargada y probada con el Excel, si hay permisos.',difficulty:'Sin permisos para Skills, revisa el SKILL.md local y continúa con la explicación.',audience:'¿Tiene sentido escribir las mismas instrucciones cada semana?',checklist:['Verifiqué Skills y ejecución de código','Preparé SKILL.md y el ZIP','Cargué la Skill en Claude','Habilité la Skill','Probé con el Excel autorizado','Completé el desafío'],steps:[
 {title:'Crear una Skill',label:'Inicio',eyebrow:'Del método a la habilidad',question:{title:'Si cada semana elaboramos el mismo reporte, ¿qué conviene hacer?',options:['Repetir manualmente el procedimiento','Crear una Skill reutilizable'],answer:'La Skill reutiliza los pasos con nuevos archivos. Sus resultados requieren revisión.'}},
 {title:'Cargar la Skill',label:'Cargar',quickInstructions:['Verifica Skills y ejecución de código','Usa el ZIP de ejemplo o créalo en el paso Generar','Carga y habilita la Skill en Personalizar > Habilidades','Pruébala con el Excel'],eyebrow:'Configuración en Claude',instructions:['Verifica Skills y ejecución de código','Prepara SKILL.md y el ZIP con el prompt de Generar','Abre Personalizar > Habilidades; el nombre puede variar','Carga y habilita la Skill','Pruébala con el Excel'],link:'skills',download:true,note:'Carga la Skill en Claude. Requiere un plan y permisos compatibles.'},
 {title:'Generar la Skill',label:'Generar',eyebrow:'Prompt · Crear la Skill',prompt:skill},
 {title:'Probar la Skill',label:'Probar',eyebrow:'Prompt · Probar la Skill',prompt:'Usa la Skill Analista Fitosanitario con el Excel adjunto. Entrega reporte-sanidad.html con tablas, filtros, evidencia y limitaciones. No inventes datos.'},
 {title:'Sin Skill / Con Skill',label:'Comparar',eyebrow:'Compara el flujo de trabajo',comparison:[{title:'Sin Skill',text:'Escribes el procedimiento cada vez.'},{title:'Con Skill',text:'Reutilizas el procedimiento con cada nuevo Excel.'}]}
 ]},
 {id:'memoria',title:'Claude recuerda cómo trabajamos',feature:'Memoria',icon:'brain',duration:8,description:'Guardar preferencias',objective:'Guardar y comprobar preferencias para futuros chats.',expected:'Preferencia guardada y probada en otro chat.',difficulty:'Sin Memoria, guarda la preferencia en el Proyecto. Comprueba siempre que se haya guardado.',audience:'¿Qué guardarías como preferencia y qué como documento?',checklist:['Revisé si Memoria está habilitada','Indiqué la preferencia','Comprobé que quedó guardada','Probé una conversación nueva','Revisé cómo editar o eliminar','Completé el desafío'],steps:[
 {title:'Guardar preferencias',label:'Inicio',eyebrow:'Tu forma de trabajar',comparison:[{title:'Sin memoria',text:'Indica tus preferencias en cada conversación.'},{title:'Con memoria',text:'Puede aplicar preferencias guardadas si está habilitada.'}],note:'Memoria y Skills dependen del plan y de los permisos.'},
 {title:'Indicar la preferencia',label:'Guardar',eyebrow:'Prompt · Recordar',prompt:'Recuerda mi preferencia para informes de Sanidad: primero una tabla con fundo, lote, plaga, resultado, umbral y muestra de los registros que requieren revisión. Después, un resumen breve y observaciones. Sin introducciones extensas.'},
 {title:'Comprobar la memoria',label:'Comprobar',quickInstructions:['Revisa si Memoria está habilitada','Comprueba que la preferencia esté guardada en Configuración','Abre otro chat y solicita un informe','Revisa cómo editar o eliminar la preferencia'],eyebrow:'La verificación importa',instructions:['Habilita Memoria, si está disponible','Envía la preferencia del paso anterior','Comprueba que se guardó en Configuración > Memoria; puede figurar en Capacidades','Pide un informe en un chat nuevo','Revisa cómo editar o eliminar la preferencia'],link:'memory'},
 {title:'Actualizar la preferencia',label:'Actualizar',eyebrow:'Prompt · Actualizar',prompt:'Actualiza mi preferencia: añade riesgos y limitaciones a mis informes de Sanidad.'},
 {title:'Memoria, Proyecto o Skill',label:'Comparar',eyebrow:'Lo que te llevas del taller',accordions:[{title:'¿Qué conviene recordar?',text:'Preferencias de formato y comunicación. Puedes editarlas o eliminarlas.'},{title:'¿Qué conviene mantener en un Proyecto?',text:'Documentos, instrucciones y datos de referencia para sus chats.'},{title:'¿Qué conviene incorporar en una Skill?',text:'Procedimientos repetibles y criterios para generar entregables.'}],note:'Comprueba si tu cuenta permite Memoria y Skills.'}
 ]}
 ]
};
