<template>
  <div class="container">
    <div class="vaccination-table">
      <div class="header">
        <div class="title">VACCINATION SCHEDULE</div>
        <div class="search-option">
          <SearchIcon class="icon" />
          <select v-model="selectedOption" class="filter-select">
            <option value="type">Type</option>
            <option value="veterinarian">Veterinarian</option>
            <option value="date">Date</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Date</th>
              <th class="align-right">Veterinarian</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vaccine in vaccinations" :key="vaccine.id">
              <td>{{ vaccine.name }}</td>
              <td>
                <div :class="getTypeClass(vaccine.type)" class="status">
                  {{ vaccine.type }}
                </div>
              </td>
              <td>{{ formatDate(vaccine.date) }}</td>
              <td class="align-right">
                <button
                  :class="getVetClass(vaccine.veterinarian)"
                  @click="alertVeterinarian(vaccine.veterinarian)"
                >
                  {{
                    vaccine.veterinarian
                      ? vaccine.veterinarian
                      : "Find veterinarian"
                  }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import vaccinationsData from "@/assets/data/vaccinations.json";
import SearchIcon from "@/assets/icons/search.svg";

export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      selectedOption: "type",
      vaccinations: vaccinationsData, // Usa los datos importados
    };
  },
  methods: {
    formatDate(date) {
      const options = { day: "2-digit", month: "short", year: "numeric" };
      return new Date(date).toLocaleDateString("en-GB", options);
    },
    alertVeterinarian(veterinarian) {
      alert(`Veterinarian: ${veterinarian}`);
    },
    getTypeClass(type) {
      switch (type) {
        case "Overdue":
          return "status-overdue";
        case "Noncore":
          return "status-noncore";
        case "Core":
          return "status-core";
        default:
          return "";
      }
    },
    getVetClass(vet) {
      return vet ? "" : "select-vet";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
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

.icon {
  width: 24px;
  height: 24px;
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

.search-option {
  display: flex;
  align-items: center;
}

.vaccination-table {
  border-radius: 16px;
  background-color: #fefefe;
  border: 1px solid #dae3f8;
  color: #546070;
  padding: 28px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
}

.table-container {
  border: 1px solid #dae3f8;
  border-radius: 12px;
  max-height: 420px;
  min-height: 420px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  position: sticky;
  top: 0;
  background-color: #f2f5fa;
  z-index: 1;
}

th,
td {
  padding: 8px;
  text-align: left;
  padding: 24px;
}

td {
  border-top: 1px solid #dae3f8;
  color: #0b1c33;
}

th {
  background-color: #f2f5fa;
}

.align-right {
  text-align: right;
}

button {
  border: 1px solid #dae3f8;
  background-color: #fefefe;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
}

button:hover {
  background-color: #e6e9f1;
}

.select-vet {
  background-color: #3788e5;
  color: #fefefe;
  border: 0;
}

.select-vet:hover {
  background-color: #2874c2;
}

.status {
  text-align: center;
  border-radius: 8px;
  padding: 8px 12px;
}

.status-overdue {
  color: #d03258;
  background-color: #fcebef;
  border: 1px solid #f7c1ce;
}

.status-noncore {
  color: #f2a735;
  background-color: #fcf5eb;
  border: 1px solid #f7e1c1;
}

.status-core {
  color: #27a468;
  background-color: #eaf8f1;
  border: 1px solid #bde8d3;
}
</style>
