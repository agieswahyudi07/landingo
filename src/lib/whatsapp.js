export const WHATSAPP_PHONE = '6285183077289';

export const whatsappHref = (message) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
