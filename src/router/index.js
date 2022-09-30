import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DashboardView,
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/quiz/:id",
      component: QuizView,
    },
  ],
});

export default router;
