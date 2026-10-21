// Quita etiquetas de seguimiento sin recargar ni cambiar otros parámetros.
(() => {
  function cleanUrl() {
    try {
      const url = new URL(window.location.href);
      const tracking = [...url.searchParams.keys()].filter(key => /^utm_/i.test(key));
      if (!tracking.length) return;
      tracking.forEach(key => url.searchParams.delete(key));
      window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
    } catch {
      // La presentación sigue funcionando si el navegador restringe History API.
    }
  }
  cleanUrl();
  window.addEventListener('pageshow', cleanUrl);
})();
