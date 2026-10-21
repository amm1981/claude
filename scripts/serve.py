"""Servidor local del taller, independiente de la carpeta de la terminal."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading
import webbrowser


def main():
    parser = argparse.ArgumentParser(description="Abrir el taller de AgroCalera")
    parser.add_argument("--no-browser", action="store_true")
    args = parser.parse_args()
    root = Path(__file__).resolve().parent.parent
    if not (root / "index.html").is_file():
        raise SystemExit("No se encontro index.html en la carpeta del proyecto.")
    handler = partial(SimpleHTTPRequestHandler, directory=str(root))
    server = None
    for port in range(8081, 8091):
        try:
            server = ThreadingHTTPServer(("127.0.0.1", port), handler)
            break
        except OSError:
            continue
    if server is None:
        raise SystemExit("Los puertos 8081 a 8090 estan ocupados. Cierre un servidor y reintente.")
    url = f"http://127.0.0.1:{server.server_port}/"
    print(f"\nClaude en accion - AgroCalera\n{url}\nCarpeta: {root}\n", flush=True)
    print("Mantenga esta ventana abierta. Ctrl+C para detener.\n", flush=True)
    if not args.no_browser:
        threading.Timer(0.4, webbrowser.open, args=(url,)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
