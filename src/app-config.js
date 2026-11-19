import { Icon } from '@iconify/vue';

export default (app) => {
  // Register Iconify globally for legacy design preview components
  app.component('Icon', Icon);
};
