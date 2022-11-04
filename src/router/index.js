import { createRouter, createWebHistory } from 'vue-router'
import TodoPage from "@/views/TodoPage";
import AboutPage from "@/views/AboutPage";
import DocsPage from "@/views/DocsPage";

const routes = [
  {
    path: '/',
    name: 'todoList',
    component: TodoPage
  },
  {
    path: '/docs',
    name: 'docs',
    component: DocsPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
