<template>
    <div class="headernav">
        <div  class="header-div">
           <router-link tag="p" class="p1"  to="/">推荐音乐</router-link>
           <router-link tag="p" class="p2" to="/hotmusic">热歌榜</router-link>
           <router-link tag="p" class="p3" to="/hotsearch">搜索</router-link>
       </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.header-div
    width 100%
    display flex
    flex-wrap nowrap
    justify-content space-around
    position fixed
    left 0
    top 1.28rem
    background #fff
    p
        text-align center
        height 0.8rem
        line-height 0.8rem
        font-size .34rem
        color #000000
</style>
