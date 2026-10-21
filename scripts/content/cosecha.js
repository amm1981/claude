export default {
 id:'cosecha',name:'Cosecha',icon:'leaf',title:'Reporte de cosecha',subtitle:'Caso práctico implementado',description:'Explora y revisa un reporte interactivo existente.',
 resources:[{name:'reporte_cosecha.html',path:'reporte_cosecha.html'}],
 report:{title:'Reporte de cosecha',path:'reporte_cosecha.html?v=agrocalera-theme',filename:'reporte_cosecha.html',sizeLabel:'33 MB',scope:'Promedio real usa una referencia fija. Revisa su alcance antes de comparar.',sections:['Resumen','Promedio real','Cosecha por fechas','Auditoría','Criterios']},
 challenges:[{
  id:'reporte-cosecha',title:'Explorar el reporte de cosecha',feature:'Reporte de cosecha',icon:'file',duration:10,
  description:'Filtra, consulta y revisa el reporte implementado.',
  objective:'Explorar el HTML y reconocer sus fuentes y criterios.',
  materials:'reporte_cosecha.html incluido. Excel compatible solo si deseas cargar otro archivo.',
  expected:'Reporte explorado, filtros probados y limitaciones identificadas.',
  difficulty:'El HTML pesa unos 33 MB: puede tardar al abrir. Promedio real conserva su referencia fija al cargar otro Excel.',
  audience:'¿El promedio real viene de la misma fuente que el resumen?',
  checklist:['Abrí el reporte','Probé los filtros','Consulté cosecha por fechas','Revisé auditoría y criterios','Identifiqué la referencia fija','Completé el caso'],
  steps:[
   {title:'Explorar el reporte de cosecha',label:'Abrir',eyebrow:'Caso implementado',text:'Un reporte existente, integrado al taller.',report:true},
   {title:'Probar el reporte',label:'Probar',eyebrow:'Ejercicio práctico',report:true,quickInstructions:['Abre el reporte y despliega Filtros','Selecciona una fecha o mercado en Resumen','Consulta Cosecha por fechas y cambia la agrupación','Abre Auditoría y revisa una observación'],instructions:['Abre el reporte dentro del sistema','Prueba los filtros de Resumen','Consulta Cosecha por fechas','Revisa Auditoría y Criterios','Exporta el CSV de auditoría si lo necesitas']},
   {title:'Distinguir las fuentes',label:'Revisar',eyebrow:'Revisión del caso',report:true,accordions:[
    {title:'Resumen y cosecha por fechas',text:'Usan los registros incorporados al HTML o el Excel que cargues. El resumen suma kilogramos estimados.'},
    {title:'Promedio real',text:'Usa una referencia fija del 30 de marzo al 7 de abril de 2026. No se reemplaza al cargar otro Excel. Algunos filtros no aplican.'},
    {title:'Auditoría y carga de Excel',text:'Las alertas requieren revisión. La carga lee la primera hoja y espera una estructura específica de columnas; no acepta cualquier Excel.'}
   ],review:['Distinguí kilogramos estimados y promedio real','Comprobé qué filtros aplican en cada sección','Revisé las reglas antes de interpretar las alertas']},
   {title:'Revisar el caso con Claude',label:'Claude',eyebrow:'Consulta opcional',text:'Si tienes autorización, adjunta el HTML en Claude.',prompt:'Revisa el HTML adjunto del reporte de cosecha. Explica sus fuentes y cálculos. Comprueba qué se actualiza al cargar otro Excel y qué permanece fijo, especialmente en Promedio real. Señala limitaciones y mejoras concretas. No inventes resultados ni modifiques los datos.',execution:['Adjunté una copia autorizada del HTML','Contrasté las observaciones con el reporte']}
  ]
 }]
};
