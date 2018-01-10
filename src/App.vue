<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App2'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}

</style>
