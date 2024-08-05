<template>
  <div class="circular-indicator">
    <div class="header">
      <div class="title">{{ title }}</div>
      <select v-model="selectedOption" class="filter-select">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
    </div>
    <div class="chart-container">
      <doughnut-chart :data="chartData" :options="chartOptions" />
      <div class="percentage-text">{{ percentage }}%</div>
    </div>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default {
  components: {
    DoughnutChart: Doughnut,
  },
  props: {
    percentage: Number,
    title: String,
  },
  data() {
    return {
      selectedOption: "daily",
    };
  },
  computed: {
    chartData() {
      const colorBasedOnPercentage =
        this.percentage <= 25
          ? "#E53761"
          : this.percentage <= 75
          ? "#F2A735"
          : "#27A468";

      return {
        labels: ["Completed", "Remaining"],
        datasets: [
          {
            data: [this.percentage, 100 - this.percentage],
            backgroundColor: [colorBasedOnPercentage, "#eee"],
            hoverBackgroundColor: [colorBasedOnPercentage, "#eee"],
            borderRadius: [100, 100],
          },
        ],
      };
    },
    chartOptions() {
      return {
        cutout: "85%",
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          layout: {
            padding: {
              top: 10,
              bottom: 10,
            },
          },
        },
      };
    },
  },
};
</script>

<style scoped>
.circular-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  color: #546070;
  border-radius: 16px;
  padding: 28px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #dae3f8;
}

.header {
  min-width: 180px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  justify-content: space-between;
}

.title {
  margin-top: 0px;
}

.filter-select {
  margin-left: 20px;
  padding: 5px;
  font-size: 1em;
  border: 1px solid #dae3f8;
  background-color: #fefefe;
  border-radius: 8px;
  color: #0b1c33;
}

.chart-container {
  position: relative;
  width: 100%;
  max-width: 300px;
  height: auto;
  aspect-ratio: 1;
}

.chart-container canvas {
  width: 100% !important;
  height: auto !important;
}

.percentage-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 600;
  color: #0b1c33;
}
</style>
