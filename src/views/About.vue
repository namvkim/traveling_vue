<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="item in arr" :key="item.id">
      <router-link :to="{ name: 'Details', params: { id: item.id } }">
        <h2>{{ item.title }}</h2>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { title: "details 1", id: 1 },
        { title: "details 2", id: 2 },
        { title: "details 3", id: 3 },
      ],
    };
  },
};
</script>

