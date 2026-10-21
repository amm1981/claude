# Añadir una nueva área

1. Crear un módulo en `scripts/content/`, por ejemplo `calidad.js`, que exporte un objeto con el mismo esquema de `sanidad.js`.
2. Definir `id` único, `name`, `icon` (de icons.js), `title`, `subtitle`, `description`, `resources` (nombre y ruta relativa) y `challenges`.
3. Cada desafío requiere `id`, `title`, `feature`, `icon`, `duration` (minutos), `description`, `objective`, `expected`, `difficulty`, `audience`, `checklist` (lista de textos) y `steps`.
4. Cada paso define `title` y `eyebrow`. Puede incluir `text`, `instructions` (lista), `prompt` (texto exacto), `note`, `question` (`title`, `options`, `answer`), `reveal` (`title`, `text`), `comparison` (lista con `title` y `text`), `accordions` (lista con `title` y `text`), `learning` (lista), `resource` (booleano), `link` (clave de links) y `download` (solo recurso de Skill actual; ajustar si se necesita otro archivo).
5. Importar el nuevo módulo en `scripts/content/index.js`, añadirlo a `areas` y quitar su entrada de próximos módulos. Las tarjetas disponibles seleccionan el área por `data-area`.
6. Mantener identificadores estables: se usan para guardar el avance. No reutilizar un id para otro desafío.
7. Colocar los recursos autorizados en una carpeta relativa dentro de `resources/`. Hoy la comprobación toma el primer recurso del área; ampliar el selector si se necesitan varios archivos.
8. Verificar localmente ambos modos, navegación, preguntas, prompts, contraste y vista móvil. No incluir datos ficticios como resultados reales.

Todo el contenido se comparte entre los dos modos; los componentes de app.js interpretan los campos opcionales. Las nuevas áreas pueden incorporarse sin duplicar las vistas.


Campos interactivos opcionales: `quickInstructions` muestra una acción por vez en Presentación; `instructions` conserva el procedimiento completo en Guía. `deliverable` define `filename` y `sections` para explicar el entregable sin simular resultados. `execution` es una lista de acciones confirmadas manualmente. `review` es una lista de comprobaciones manuales del archivo generado. Sus estados se guardan con el identificador de área, desafío y paso.


Para un HTML ya implementado, definir `report` en el módulo con `title`, `path`, `filename`, `sections` y, opcionalmente, `sizeLabel` y `scope`. Añadir `report:true` a los pasos que deben mostrar su acceso. El visor integra el archivo sin inyectar su CSS o JavaScript en el taller. Usar `materials` en el desafío para especificar recursos diferentes del Excel de Sanidad. La portada calcula cantidades y duración de cada caso desde sus desafíos.
