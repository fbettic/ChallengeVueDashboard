<template>
  <div class="under-construction">
    <h1>Page Under Construction</h1>
    <p>We are working hard to bring you this page. Please check back later!</p>
  </div>
</template>

<script>
export default {
  name: "UnderConstruction",
};
</script>

<style scoped>
.under-construction {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: #555;
  background-color: #f9f9f9;
}

.under-construction h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.under-construction p {
  font-size: 1.2rem;
}
</style>
