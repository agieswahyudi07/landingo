import { Icon } from '@iconify/vue';
import naive from 'naive-ui';

export default (app) => {
  // Register global components
  app.component('Icon', Icon);
  
  // Use Naive UI
  app.use(naive);
};

