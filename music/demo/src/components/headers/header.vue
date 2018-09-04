<template>
    <div class="Vheader">
        <!-- 顶部导航 -->
        <van-row type="flex" justify="space-around">
            <van-col span="4"><i class="iconfont" @click="show = !show">&#xe662;</i></van-col>
            <van-col class="center" span="10">
                <van-row type="flex" justify="space-around">
                    <van-col class="iconfont" span="6">&#xe619;</van-col>
                    <van-col class="iconfont" span="6">&#xe674;</van-col>
                    <van-col class="iconfont" span="6">&#xe61e;</van-col>
                </van-row>
            </van-col>
            <van-col class="right" span="4"><i class="right iconfont">&#xe63a;</i></van-col>
        </van-row>

        <!-- 页面导航 -->
        <van-tabs v-model="active">
            <van-tab v-for="(item,index) of titles" :title="item">
                <Tuijian v-if="index == 0"></Tuijian>
                <Friends v-else-if="index == 1"></Friends>
                <Diantai v-else="index == 2"></Diantai>
            </van-tab>
        </van-tabs>

        <!-- 导航 -->
        <transition enter-active-class="fadeInLeft" leave-active-class="fadeOutLeft">
            <div class="Vnav animated bounce"  v-if="show">
                <ul>
                    <li v-for="item of 100">{{item}}</li>
                </ul>
                <p  @click="show =!show" ></p>
            </div>
          </transition>
    </div>
</template>

<script>
import Tuijian from '../tuijian/tuijian'
import Friends from '../friends/friends'
import Diantai from '../diantai/diantai'
export default {
    name:'Vheader',
    data () {
        return {
            active: 0,
            titles:['推荐','朋友','电台'],
            show:false
        }
    },
    methods: {
     
    },
    components: {
        Tuijian,Friends,Diantai
    }
}
</script>

<style scoped>
.Vheader{
    height: 1rem;
    line-height: 1rem;
    background: red;
}
.Vheader .van-col{
    color: snow;
}
.Vheader .van-col.center{
    text-align: center;
}
.Vheader .van-col.right{
    text-align: right;
}
.Vnav{
    position: fixed;
    left: 0rem;
    top: 0;
    width: 10rem;
    height: 100%;
    overflow-y: scroll;
    z-index: 999;
}
.Vnav ul{
    width: 7rem;
    float: left;
    background: #fff;
}
.Vnav p{
    position: fixed;
    right: 0;
    width: 3rem;
    height: 100%;
    float: left;
    background:rgba(0, 0, 0, 0.5);
}

</style>
