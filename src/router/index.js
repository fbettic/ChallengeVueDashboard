import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'; 
import Login from '@/components/LoginPage.vue';
import Dashboard from '@/components/AdminDashboard.vue';
import UnderConstruction from "@/components/UnderConstruction.vue";

Vue.use(VueRouter);

const router =   new VueRouter({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/pet-profile",
      name: "PetProfile",
      component: UnderConstruction,
    },
    {
      path: "/health-monitoring",
      name: "HealthMonitoring",
      component: UnderConstruction,
    },
    {
      path: "/vaccination-schedule",
      name: "VaccinationSchedule",
      component: UnderConstruction,
    },
    {
      path: "/chat",
      name: "Chat",
      component: UnderConstruction,
    },
    {
      path: "/appointments",
      name: "Appointments",
      component: UnderConstruction,
    },
    {
      path: "/settings",
      name: "Settings",
      component: UnderConstruction,
    },
    {
      path: "/documentation",
      name: "Documentation",
      component: UnderConstruction,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.isLoggedIn;

  if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;