---
name: analista-fitosanitario
description: Analiza archivos Excel de evaluaciones fitosanitarias de cítricos y prepara informes verificables con umbrales, unidades y tamaños de muestra. Usar al solicitar reportes de Sanidad o comparar registros fitosanitarios.
---

# Analista Fitosanitario

## Procedimiento

1. Leer el archivo autorizado sin modificarlo. Enumerar hojas, encabezados, tipos de datos y número de registros; identificar la hoja de origen de cada análisis.
2. Identificar los campos de fundo, lote, plaga, estadio, fenología y fecha según los encabezados reales. Documentar la correspondencia y señalar campos ausentes. No asumir nombres ni unidades.
3. Verificar resultados, valores faltantes, duplicados, fechas, denominadores y número de paradas o tamaño de muestra. No descartar filas silenciosamente.
4. Comparar resultados únicamente con umbrales del archivo, para la misma plaga, estadio y unidad de evaluación. Distinguir umbral registrado y umbral grave. Si son desconocidos, cero o incompatibles, no calcular razones; explicar por qué.
5. Identificar registros que alcanzan o superan umbrales comparables, mostrando resultado, umbral, unidad, tamaño de muestra y referencia de hoja/fila o identificador.
6. Elaborar un ranking por resultado / umbral grave solo cuando sean comparables y el denominador sea mayor que cero. Mostrar fórmula, valores de origen y limitaciones; no confundir muestras pequeñas con evidencia concluyente.
7. Generar tablas y gráficos con títulos, unidades y filtros pertinentes. Separar unidades distintas. Mostrar porcentaje de presencia solo si existe o puede calcularse con un denominador respaldado; detallar el cálculo.
8. Entregar primero la tabla de registros que requieren revisión técnica; después un resumen ejecutivo breve, gráficos pertinentes y observaciones.
9. Incluir riesgos y limitaciones: estructura incompleta, muestras pequeñas, datos faltantes, supuestos, cálculos no realizables y validaciones pendientes del responsable de Sanidad.

## Límites

- No inventar registros, resultados, tendencias, umbrales ni diagnósticos.
- No recomendar tratamientos, dosis ni aplicaciones fitosanitarias.
- No agregar datos de unidades distintas ni extrapolar una evaluación a una tendencia temporal sin evidencia comparable suficiente.
- Los hallazgos requieren validación técnica del responsable de Sanidad.
- No enviar información a servicios externos ni acceder a archivos ajenos al análisis autorizado.

## Entregable

Entregar `reporte-sanidad.html`, un único archivo HTML con CSS y JavaScript incluidos, autónomo y sin CDN, fuentes remotas, peticiones de red ni backend. Fondo blanco, acentos verdes, diseño responsive, controles accesibles por teclado y estilos de impresión. Incluir filtros por fundo, lote y plaga, botón para limpiar filtros, conteo de filas visibles y consulta de detalle con evidencia. Distinguir totales generales de totales filtrados. Escapar celdas y datos al incorporarlos a HTML/JSON; nunca ejecutar contenido del Excel. Verificar cálculos, filtros y apertura local; declarar lo que no se pudo verificar.


Tabla de evidencia con fundo, lote, plaga, estadio, fecha, resultado, unidad, umbral, tamaño de muestra y referencia de origen; ranking comparable; resumen ejecutivo; riesgos y limitaciones. Si un campo no existe, indicar «no disponible».
