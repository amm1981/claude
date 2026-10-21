"""Construye una carpeta pública por lista permitida, sin dependencias externas."""
import argparse
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent.parent
ASSETS = (
    "AgroCalera_logo.png", "AgroCalera_verde.png", "fondo.jpg",
    "claude_logo.png", "claude_logo.webp", "logo_claude.png",
    "logo_excel.webp", "logo_html.webp", "chat_tradicional.png", "proyecto.png",
)
PRIVATE = ("EVALUACIONES_20261020225816.xlsx", "reporte_cosecha.html")


def build(output):
    # Solo un destino inexistente: nunca borrar archivos del usuario ni del código.
    if output.exists():
        raise SystemExit(f"El destino ya existe: {output}. Use otra carpeta vacía/inexistente.")
    required = [ROOT / "index.html"] + [ROOT / name for name in ASSETS]
    required += [ROOT / name for name in ("styles", "scripts/content", "resources/fonts", "resources/skills")]
    for source in required:
        if not source.exists():
            raise SystemExit(f"Falta un recurso obligatorio: {source.relative_to(ROOT)}")
    output.mkdir(parents=True)

    def copy(source):
        target = output / source.relative_to(ROOT)
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)

    copy(ROOT / "index.html")
    (output / "healthz").write_text("ok\n", encoding="utf-8")
    for name in ASSETS:
        copy(ROOT / name)
    for pattern in ("styles/*.css", "scripts/*.js", "scripts/content/*.js", "resources/fonts/*"):
        for source in ROOT.glob(pattern):
            if source.is_file():
                copy(source)
    for source in (ROOT / "resources/skills").rglob("*"):
        if source.is_file() and source.suffix in (".md", ".zip"):
            copy(source)
    for name in PRIVATE:
        source = ROOT / name
        if source.is_file():
            copy(source)
            print(f"Material local incluido en el sitio: {name}")
        else:
            print(f"AVISO: falta {name}; su descarga/caso no estará disponible.")
    print(f"Sitio generado: {output}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", default="dist", help="Carpeta de salida nueva")
    args = parser.parse_args()
    build(Path(args.output).resolve())
