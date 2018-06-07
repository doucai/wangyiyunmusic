<template>
    <div class="cmtMusic">
        <New-Commitmusic></New-Commitmusic>
        <p class="mg03"><span>|</span> 最新音乐</p>
        <ul class="new-ul">
            <router-link class="item"  tag="li" to="/123">
                <p class="title">大千世界</p>
                <div class="cmt-ul-p">
                    <span class="p-left-span">$</span>
                    许嵩 - 大千世界
                    <img src="" alt="">
                </div>
            </router-link>
            <router-link class="item"  tag="li" to="/123">
                <p class="title">大千世界</p>
                <div class="cmt-ul-p">
                    <span class="p-left-span">$</span>
                    许嵩 - 大千世界
                    <img src="" alt="">
                </div>
            </router-link>
            <router-link class="item"  tag="li" to="/123">
                <p class="title">大千世界</p>
                <div class="cmt-ul-p">
                    <span class="p-left-span">$</span>
                    许嵩 - 大千世界
                    <img src="" alt="">
                </div>
            </router-link>
            <router-link class="item"  tag="li" to="/123">
                <p class="title">大千世界</p>
                <div class="cmt-ul-p">
                    <span class="p-left-span">$</span>
                    许嵩 - 大千世界
                    <img src="" alt="">
                </div>
            </router-link>
        </ul>
        
    </div>
</template>

<script>
import NewCommitmusic from "./commitmusic/commitmusic"
export default {
    components: {
        NewCommitmusic
    }
}
</script>

<style lang="stylus" scoped>
.cmtMusic
    .mg03 
        display flex
        align-items center
        margin 0.3rem 0
        font-size 0.4rem
        span 
            color red
            font-size 0.35rem
            margin-right 0.15rem
    .new-ul
        padding-left 0.2rem   
        .item
            border-bottom 1px solid #eee  
            padding 0.1rem 0 
            overflow hidden
            color #000
            .title
                font-size 0.34rem
                line-height 0.5rem
            .cmt-ul-p
                font-size 0.15rem                
                line-height 0.36rem
</style>
