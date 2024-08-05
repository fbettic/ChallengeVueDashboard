<template>
  <div class="container">
    <div class="left">
      <div class="input-container">
        <SearchIcon class="search-icon" />
        <input class="input" type="text" placeholder="Search" />
      </div>
    </div>
    <div class="right">
      <HelpIcon class="icon" />
      <NotificationIcon class="icon" />
      <Button class="button">Add widget</Button>
    </div>
  </div>
</template>

<script>
import SearchIcon from "@/assets/icons/search.svg";
import HelpIcon from "@/assets/icons/help.svg";
import NotificationIcon from "@/assets/icons/notification.svg";

export default {
  components: { SearchIcon, HelpIcon, NotificationIcon },
  name: "DahboardHeader",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  background-color: #fefefe;
  padding: 24px;
  font-size: 16px;
  font-weight: 500;
}

.input-container {
  display: flex;
  border: 1px solid #dae3f8;
  border-radius: 8px;
  align-items: center;
  width: 100%;
  height: 100%;
}

.input {
  border: none;
  height: 100%;
  width: 100%;
  font-size: 16px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 0px 8px 8px 0px;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin-left: 16px;
  margin-right: 12px;
}

.icon {
  margin-right: 24px;
}

.left {
  width: 60%;
}

.right {
  width: 40%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.button {
  background-color: #3788e5;
  color: #fefefe;
  border: 0px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
}

.button:hover {
  background-color: #2874c2;
}
</style>
