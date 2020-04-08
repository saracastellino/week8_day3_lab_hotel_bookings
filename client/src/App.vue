<template>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    fetch('http://localhost:3000/api/bookings')
    .then(res => res.json())
    .then(data => console.log(data))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
