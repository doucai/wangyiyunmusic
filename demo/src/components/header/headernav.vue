<template>
    <div class="headernav">
        <div  class="header-div">
           <p index="1" @click="colorP1Red">推荐音乐</p>
           <p index="2" @click="colorP2Red">热歌榜</p>
           <p index="3" @click="colorP3Red">搜索</p>
       </div>
    </div>
</template>

<script>
export default {
    methods: {
        colorP1Red(){
            $(".header-div p").eq(0).css({
                "color":"red",
                "border-bottom":"2px solid red"
            });
            $(".header-div p").eq(1).css({
               "color":"#000000",
               "border-bottom":""
            });
            $(".header-div p").eq(2).css({
                "color":"#000000",
                "border-bottom":""
            })
        },
        colorP2Red(){
            $(".header-div p").eq(0).css({
                "color":"#000000",
                "border-bottom":""
            });
            $(".header-div p").eq(1).css({
               "color":"red",
               "border-bottom":"2px solid red"
            });
            $(".header-div p").eq(2).css({
                "color":"#000000",
                "border-bottom":""
            })
        },
        colorP3Red(){
           $(".header-div p").eq(0).css({
                "color":"#000000",
                "border-bottom":""
            });
            $(".header-div p").eq(1).css({
               "color":"#000000",
               "border-bottom":""
            });
            $(".header-div p").eq(2).css({
                "color":"red",
                "border-bottom":"2px solid red"
            })
        }
    }
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
