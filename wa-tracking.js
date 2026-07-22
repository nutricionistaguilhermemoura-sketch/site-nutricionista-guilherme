// Conversão principal: clique em qualquer link do WhatsApp (wa.me)
document.addEventListener('click', function (e) {
  var link = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"]') : null;
  if (!link || typeof gtag !== 'function') return;
  var label = (link.textContent || '').trim() || link.getAttribute('aria-label') || '';
  gtag('event', 'whatsapp_click', {
    page: location.pathname,
    cta_text: label.slice(0, 100),
    transport_type: 'beacon'
  });
});
