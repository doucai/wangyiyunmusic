<template>
  <div id="app">
     <!-- header -->
        <Home-Header></Home-Header>
        <p class="kong"></p>
        <keep-alive>
          <router-view/>
        </keep-alive>
  </div>
</template>

<script>
import HomeHeader from "@/components/header/header"
export default {
  name: 'App',
   components: {
        HomeHeader
    }
}
</script>

<style>

.kong{
  height: 2.1rem;
  overflow: hidden;
}
</style>
