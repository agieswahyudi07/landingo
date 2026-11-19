export const WHATSAPP_PHONE = '6285183077289';

export const whatsappHref = (message) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;

export const trackWhatsappClick = (label = 'whatsapp_cta', url = '') => {
  if (typeof window === 'undefined') return;
  if (typeof window.__landingoLoadTrackers === 'function') {
    window.__landingoLoadTrackers();
  }
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
  window.gtag('event', 'click_whatsapp', {
    event_category: 'engagement',
    event_label: label,
    link_url: url,
    page_path: window.location.pathname,
  });
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { content_name: label });
  }
};
