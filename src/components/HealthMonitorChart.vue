<template>
  <div class="container">
    <div class="health-monitor-chart">
      <div class="header">
        <div class="title">HEALTH MONITORING</div>
        <select v-model="selectedOption" class="filter-select">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div class="options">
        <button
          :class="{
            button: selectedButton !== 'stress',
            'selected-button': selectedButton === 'stress',
          }"
          @click="selectButton('stress')"
        >
          <StressIcon class="icon" /><span class="text">Stress level</span>
        </button>
        <button
          :class="{
            button: selectedButton !== 'pulse',
            'selected-button': selectedButton === 'pulse',
          }"
          @click="selectButton('pulse')"
        >
          <PulseIcon class="icon" /><span class="text">Pulse</span>
        </button>
        <button
          :class="{
            button: selectedButton !== 'temperature',
            'selected-button': selectedButton === 'temperature',
          }"
          @click="selectButton('temperature')"
        >
          <TemperatureIcon class="icon" /><span class="text">Temperature</span>
        </button>
        <button
          :class="{
            button: selectedButton !== 'calories',
            'selected-button': selectedButton === 'calories',
          }"
          @click="selectButton('calories')"
        >
          <CaloriesIcon class="icon" /><span class="text">Calories burned</span>
        </button>
      </div>
      <div>
        <line-chart
          class="line-chart"
          :data="chartData"
          :options="chartOptions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StressIcon from "@/assets/icons/stress.svg";
import PulseIcon from "@/assets/icons/pulse.svg";
import TemperatureIcon from "@/assets/icons/temperature.svg";
import CaloriesIcon from "@/assets/icons/calories.svg";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler,
} from "chart.js";
import chartData from "@/assets/data/chartData.json";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler
);

export default {
  components: {
    LineChart: Line,
    StressIcon,
    PulseIcon,
    TemperatureIcon,
    CaloriesIcon,
  },
  data() {
    return {
      selectedOption: "daily",
      selectedButton: "stress",
      chartData: chartData,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 4,
              callback: function (value) {
                return this.getLabelForValue(value);
              },
              offset: true,
            },
          },
          y: {
            grid: {
              display: true,
            },
            beginAtZero: true,
            min: 0,
            max: 10,
            border: {
              dash: [5, 5],
            },
          },
        },
        plugins: {
          filler: {
            propagate: true,
          },
          legend: {
            display: false,
          },
        },
        elements: {
          line: {
            backgroundColor: function (context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) {
                return null;
              }

              const gradient = ctx.createLinearGradient(
                0,
                chartArea.bottom,
                0,
                chartArea.top
              );
              gradient.addColorStop(0, "rgba(55, 136, 229, 0)");
              gradient.addColorStop(1, "rgba(55, 136, 229, 0.5)");

              return gradient;
            },
          },
        },
      },
    };
  },
  methods: {
    selectButton(buttonType) {
      if (this.selectedButton === buttonType) {
        this.selectedButton = null;
      } else {
        this.selectedButton = buttonType;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}

.health-monitor-chart {
  border-radius: 16px;
  background-color: #fefefe;
  border: 1px solid #dae3f8;
  padding: 28px;
  width: 100%;
  height: 100%;
}

.line-chart {
  width: 100%;
  height: 100%;
}

.header {
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

.options {
  display: grid;
  grid-template-columns: repeat(4, minmax(130px, 1fr));
  gap: 16px;
  border: 1px solid #dae3f8;
  padding: 10px;
  border-radius: 16px;
  margin-bottom: 24px;
}

.button,
.selected-button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.button {
  background-color: #fefefe;
  color: #546070;
}

.button:hover {
  background-color: #e6e9f1;
}

.selected-button {
  background-color: #3788e5;
  color: #fefefe;
}

.icon {
  margin-right: 10px;
}
</style>
