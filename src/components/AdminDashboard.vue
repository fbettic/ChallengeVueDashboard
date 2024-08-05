<template>
  <div class="admin-dashboard">
    <dashboard-header />
    <div class="main-content">
      <div class="left-section">
        <div class="indicators">
          <circular-indicator title="ACTIVITY" :percentage="70" />
          <circular-indicator title="SLEEP" :percentage="80" />
          <circular-indicator title="WELNESS" :percentage="25" />
        </div>
        <div class="monitor">
          <health-monitor-chart />
        </div>
      </div>
      <div class="right-section">
        <div class="vaccination-list">
          <vaccination-list />
        </div>
        <div class="recent-messages-container">
          <recent-messages />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircularIndicator from "./CircularIndicator.vue";
import HealthMonitorChart from "./HealthMonitorChart.vue";
import VaccinationList from "./VaccinationList.vue";
import RecentMessages from "./RecentMessages.vue";
import DashboardHeader from "./DashboardHeader.vue";

export default {
  components: {
    CircularIndicator,
    HealthMonitorChart,
    VaccinationList,
    RecentMessages,
    DashboardHeader,
  },
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main-content {
  display: flex;
  flex-direction: row;
  padding: 24px;
  height: 100%;
}

.left-section {
  width: 55%;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
}

.indicators {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.right-section {
  width: 45%;
  display: flex;
  flex-direction: column;

  height: 100%;
}

.vaccination-list {
  margin-bottom: 24px;
}

.monitor {
  flex-grow: 1;
  height: 100%;
}
.recent-messages-container {
  flex-grow: 1;
}

@media (max-width: 1536px) {
  .main-content {
    flex-direction: column;
  }
  .left-section {
    width: 100%;
    margin-bottom: 24px;
  }
  .right-section {
    width: 100%;
  }
}
</style>
