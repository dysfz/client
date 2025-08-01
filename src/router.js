import { createRouter, createWebHistory } from 'vue-router'

import Expenses from './components/Expenses.vue'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'

const routes = [
   {
      path: '/',
      redirect: '/main'
   },
   {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses
   },
   {
      path: '/add',
      name: 'Add',
      component: Add
   },
   {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router