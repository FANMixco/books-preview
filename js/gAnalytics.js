(function () {
  let loaded = false;

  function loadGA() {
    if (loaded) return;
    loaded = true;

    const s = document.createElement('script');
    s.src = "https://www.googletagmanager.com/gtag/js?id=G-Y6F0CLJDS8";
    s.async = true;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }

    gtag('js', new Date());
    gtag('config', 'G-Y6F0CLJDS8', {
      anonymize_ip: true,
      transport_type: 'beacon'
    });
  }

  // Load when browser is idle OR user interacts
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadGA, { timeout: 2000 });
  } else {
    setTimeout(loadGA, 2000);
  }

  ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(evt => {
    window.addEventListener(evt, loadGA, { once: true, passive: true });
  });
})();