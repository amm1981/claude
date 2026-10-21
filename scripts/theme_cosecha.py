"""Aplica el tema corporativo al reporte sin alterar sus scripts ni datos."""
from pathlib import Path
import base64
import hashlib
import re

ROOT = Path(__file__).resolve().parent.parent
report = ROOT / "reporte_cosecha.html"
source = report.read_text(encoding="utf-8")


def scripts_hash(html):
    scripts = re.findall(r"<script\b[^>]*>[\s\S]*?</script>", html, re.I)
    return hashlib.sha256("\n".join(scripts).encode()).hexdigest()


before = scripts_hash(source)
source = re.sub(r'<style id="agrocalera-cosecha-theme">[\s\S]*?</style>\s*', "", source)
fonts = []
for family, filename, weights in [
    ("Inter", "inter-latin.ttf", "100 900"),
    ("Sora", "sora-latin.ttf", "100 800"),
]:
    data = base64.b64encode((ROOT / "resources/fonts" / filename).read_bytes()).decode()
    fonts.append(f"@font-face{{font-family:{family};src:url(data:font/ttf;base64,{data}) format('truetype');font-weight:{weights};font-style:normal;font-display:swap}}")
theme = "\n".join(fonts) + "\n" + (ROOT / "styles/cosecha.css").read_text(encoding="utf-8")
source = source.replace("</head>", f'<style id="agrocalera-cosecha-theme">\n{theme}\n</style>\n</head>', 1)
source = source.replace('<div class="brand"><span class="brandmark" aria-hidden="true">✳</span> Cosecha diaria</div>', '<div class="brand">REPORTE DE COSECHA</div>', 1)
assert scripts_hash(source) == before, "Se detectó una modificación de los scripts del reporte."
report.write_text(source, encoding="utf-8")
print(f"Tema actualizado. Scripts y datos conservados: {before}")
print(f"Tamaño: {report.stat().st_size / 1_000_000:.1f} MB")
