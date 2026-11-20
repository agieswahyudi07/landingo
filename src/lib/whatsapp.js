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
  let utmSource = '';
  let utmCampaign = '';
  try {
    utmSource = sessionStorage.getItem('landingo_utm_source') || '';
    utmCampaign = sessionStorage.getItem('landingo_utm_campaign') || '';
  } catch (_) {}

  window.gtag('event', 'click_whatsapp', {
    event_category: 'engagement',
    event_label: label,
    link_url: url,
    page_path: window.location.pathname,
    utm_source: utmSource || undefined,
    utm_campaign: utmCampaign || undefined,
    transport_type: 'beacon',
  });
  if (typeof window.fbq === 'function' && window.fbq.callMethod) {
    window.fbq('track', 'Contact', { content_name: label });
  } else {
    const pixelUrl =
      'https://www.facebook.com/tr?id=4334842353459488&ev=Contact&noscript=1&cd[content_name]=' +
      encodeURIComponent(label);
    if (navigator.sendBeacon) {
      navigator.sendBeacon(pixelUrl);
    } else {
      new Image().src = pixelUrl;
    }
  }
};
