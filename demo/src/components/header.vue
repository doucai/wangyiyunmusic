<template>
    <div>
        <div class="header">
        <img src="../assets/logo.png" alt=""> <span class="header-span">下载App</span>
        </div>
        <header-Nav></header-Nav>
    </div>
</template>

<script>
import headerNav from "./headernav"
export default {
    components: {
        headerNav
    }
}
</script>

<style lang="stylus" scoped>
.header    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 .2rem;
    width: 100%;
    height: 1.28rem;
    line-height 1.28rem
    background-color: #d43c33;
    box-sizing: border-box;
    color #fff
    font-size 0.4rem
    .header-span
        display inline-block
        width 1.6rem
        height .6rem
        line-height .6rem
        border-radius .5rem
        font-size .3rem
        text-align center
        border 1px solid rgba(255,255,255,.3)
    
</style>
