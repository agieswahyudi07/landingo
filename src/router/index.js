import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import DesignGallery from '@/pages/DesignGallery.vue';

// Lazy load preview pages
const EcommerceModern = () => import('@/pages/previews/EcommerceModern.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Landingo - Landing Page Profesional untuk UMKM'
    }
  },
  {
    path: '/gallery',
    name: 'DesignGallery',
    component: DesignGallery,
    meta: {
      title: 'Referensi Design Landing Page - Landingo'
    }
  },
  {
    path: '/preview/:designId',
    name: 'DesignPreview',
    component: () => import('@/pages/previews/DesignPreview.vue'),
    meta: {
      title: 'Preview Design - Landingo'
    }
  },
  // Redirect hash routes to clean routes
  {
    path: '/#home',
    redirect: '/'
  },
  {
    path: '/#gallery',
    redirect: '/gallery'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Landingo - Landing Page Profesional untuk UMKM';
  next();
});

export default router;

