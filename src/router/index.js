import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    /*
      { path: "/", component: HomeView } - зарегестрирован один маршрут, 
       который будет отображать компонент HomeView
    */
    routes: [{ path: "/", component: HomeView }],
});

export default router;
