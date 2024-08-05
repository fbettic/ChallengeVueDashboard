<template>
  <div class="container">
    <div class="side-menu">
      <div class="logo"><PetLogo class="icon" /> <span>PetCare.</span></div>

      <div>
        <div id="menu-section" class="section">
          <span>MENU</span>
          <ul>
            <li :class="getClassSelected('Dashboard')">
              <router-link to="/dashboard" class="link">
                <DashboardIcon class="icon" />
                Dashboard
              </router-link>
            </li>
            <li :class="getClassSelected('PetProfile')">
              <router-link to="/pet-profile" class="link">
                <PowIcon class="icon" /> Pet profile
              </router-link>
            </li>
          </ul>
          <hr class="divider" />
        </div>
        <div id="analytics-section" class="section">
          <span>ANALYTICS</span>
          <ul>
            <li :class="getClassSelected('HealthMonitoring')">
              <router-link to="/health-monitoring" class="link">
                <HealthIcon class="icon" /> Health monitoring
              </router-link>
            </li>
            <li :class="getClassSelected('VaccinationSchedule')">
              <router-link to="/vaccination-schedule" class="link">
                <VaccineIcon class="icon" />
                Vaccination schedule
              </router-link>
            </li>
          </ul>
          <hr class="divider" />
        </div>
        <div id="schedule-section" class="section">
          <span>SCHEDULE</span>
          <ul>
            <li :class="getClassSelected('Chat')">
              <router-link to="/chat" class="link">
                <ChatIcon class="icon" /> Chat
                <span class="notification-bubble" v-if="unreadMessages > 0">{{
                  unreadMessages
                }}</span>
              </router-link>
            </li>
            <li :class="getClassSelected('Appointments')">
              <router-link to="/appointments" class="link">
                <CalendarIcon class="icon" />
                Appointments
                <span
                  class="notification-bubble"
                  v-if="pendingAppointments > 0"
                  >{{ pendingAppointments }}</span
                >
              </router-link>
            </li>
          </ul>
          <hr class="divider" />
        </div>
        <div id="help-section" class="section">
          <span>HELP</span>
          <ul>
            <li :class="getClassSelected('Settings')">
              <router-link to="/settings" class="link">
                <SettingsIcon class="icon" />
                Settings
              </router-link>
            </li>
            <li :class="getClassSelected('Documentation')">
              <router-link to="/documentation" class="link">
                <DocumentIcon class="icon" />
                Documentation
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div id="logout">
        <Button id="logout-button" @click="handleLogout">
          <LogoutIcon class="icon" /> Log out
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import PowIcon from "@/assets/icons/pow.svg";
import DashboardIcon from "@/assets/icons/dashboard.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import HealthIcon from "@/assets/icons/health.svg";
import VaccineIcon from "@/assets/icons/vaccine.svg";
import ChatIcon from "@/assets/icons/chat.svg";
import SettingsIcon from "@/assets/icons/settings.svg";
import DocumentIcon from "@/assets/icons/document.svg";
import LogoutIcon from "@/assets/icons/logout.svg";
import PetLogo from "@/assets/icons/pet-logo.svg";

export default {
  components: {
    PowIcon,
    DashboardIcon,
    CalendarIcon,
    HealthIcon,
    VaccineIcon,
    ChatIcon,
    SettingsIcon,
    DocumentIcon,
    LogoutIcon,
    PetLogo,
  },
  data() {
    return {
      unreadMessages: 5,
      pendingAppointments: 3,
    };
  },
  methods: {
    getClassSelected(routeName) {
      return this.$route.name === routeName ? "item-selected" : "menu-item";
    },
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 290px;
  min-width: 290px;

  width: 100%;
}

.side-menu {
  max-width: 290px;
  width: 100%;
  background-color: #fefefe;
  border-right: 1px solid #dae3f8;
  font-size: 16px;
  font-weight: 500;
  color: #546070;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  margin-top: 30px;
}

.logo span {
  font-size: 24px;
  color: #0b1c33;
  padding-left: 0px;
}

.side-menu ul {
  margin: 0;
  margin-bottom: 32px;
  list-style-type: none;
  padding: 0;
}

.menu-item {
  padding: 12px 24px;
  cursor: pointer;
  position: relative;
}

.link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  color: #546070;
}

.menu-item:hover {
  border-radius: 12px;
  background-color: #e6e9f1;
}

.icon {
  height: 24px;
  width: 24px;
  margin-right: 10px;
}

.section {
  padding: 0px 24px;
  margin-bottom: 32px;
}

.section span {
  display: block;
  text-align: left;
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 24px;
}

.divider {
  border: none;
  border-top: 1px solid #dae3f8;
}

.item-selected {
  padding: 12px 24px;
  cursor: pointer;
  color: #fefefe;
  background-color: #3788e5;
  border-radius: 12px;
}

.item-selected .link {
  color: #fefefe;
}

.item-selected:hover {
  background-color: #2874c2;
}

#logout {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 12px 24px;
  margin-bottom: 20px;
}

#logout-button {
  display: flex;
  align-items: center;
  color: #e53761;
  font-size: 16px;
  font-weight: 500;
  background-color: #fefefe;
  border: none;
  cursor: pointer;
  padding: 12px 24px;
}

#logout-button .icon {
  margin-right: 10px;
}

#logout-button:hover {
  border-radius: 12px;
  background-color: #e6e9f1;
  cursor: pointer;
}

.notification-bubble {
  background-color: #e53761;
  color: white;
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 8px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
