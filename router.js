import { createRouter, createWebHistory } from 'vue-router';
import Menu from './src/components/Menu.vue';
import Logs from './src/components/Logs.vue';
import Add from './src/components/Add.vue';
import Edit from './src/components/Edit.vue';
import Delete from './src/components/Delete.vue';

const routes = [
  { path: '/', component: Menu },
  { path: '/logs', component: Logs },
  { path: '/add', component: Add },
  { path: '/edit', component: Edit },
  { path: '/delete', component: Delete }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;