<template>
  <div class="container">
    <div class="recent-messages">
      <div class="header">
        <div class="title">CHAT</div>
      </div>
      <div class="messages-list">
        <ul>
          <li
            v-for="message in messages"
            :key="message.id"
            class="message-item"
          >
            <div
              class="status-indicator"
              :class="{ online: message.isOnline }"
            ></div>
            <div class="message-content">
              <div class="sender-name">{{ message.sender }}</div>
              <div class="message-preview">{{ message.text }}</div>
            </div>
            <div class="message-info">
              <div class="message-time">
                {{ formatDate(message.timestamp) }}
              </div>
              <div class="unread-count" v-if="message.unreadCount > 0">
                {{ message.unreadCount }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import messagesData from "@/assets/data/messages.json"; // Importa los datos del archivo JSON

export default {
  data() {
    return {
      messages: messagesData, // Usa los datos importados
    };
  },
  methods: {
    formatDate(timestamp) {
      const now = new Date();
      const date = new Date(timestamp);
      const isToday = date.toDateString() === now.toDateString();
      const isThisWeek = (now - date) / (1000 * 60 * 60 * 24) < 7;

      if (isToday) {
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      } else if (isThisWeek) {
        return date.toLocaleDateString("en-US", { weekday: "short" });
      } else {
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
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

.recent-messages {
  width: 100%;
  flex-direction: column;
  background-color: #fefefe;
  padding: 28px;
  border-radius: 16px;
  border: 1px solid #dae3f8;
  height: 100%;
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
  margin-top: 0;
}

.messages-list {
  max-height: 300px;
  overflow-y: auto;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.message-item {
  display: flex;
  align-items: center;
  padding: 10px 8px;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e53761;
  margin-right: 10px;
  border: 1px solid #fefefe;
}

.status-indicator.online {
  background-color: #27a468;
}

.message-content {
  flex-grow: 1;
  padding: 0 10px;
}

.sender-name {
  color: #0b1c33;
  font-weight: bold;
  margin-bottom: 4px;
  text-align: left;
}

.message-preview {
  font-size: 16px;
  font-weight: 400;
  color: #546070;
  text-align: left;
}

.message-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80px;
}

.message-time {
  font-size: 16px;
  font-weight: 500;
  color: #546070;
}

.unread-count {
  background-color: #e53761;
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 4px;
}

.message-item:hover {
  border-radius: 8px;
  background-color: #e6e9f1;
}
</style>
