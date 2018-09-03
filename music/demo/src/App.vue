<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/headers/header'
export default {
  name: 'App',
  components: {
      Header
  }
}
</script>

<style>

</style>
