<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome</h1>
    <div class="text-secondary text-center"> Welcome back <span class="font-weight-bold text-info">{{user}}</span></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["user"]
};
</script>