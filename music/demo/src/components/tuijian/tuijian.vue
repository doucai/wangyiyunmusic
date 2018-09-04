<template>
    <div class="tuijian">
        <!-- 轮播 -->
        <van-swipe :autoplay="3000" :loop="true">
            <van-swipe-item  v-for="(item,index) of imgUrl" :key="index"><a :href="item.url"><img :src="item.picUrl" alt=""></a></van-swipe-item>
        </van-swipe>
        <!-- icon -->
        <van-row type="flex" justify="space-around">
            <van-col class="center" span="4"><i class="iconfont">&#xe793;</i><span>私人FM</span></van-col>
            <van-col class="center" span="4"><i class="iconfont">&#xe77a;</i><span>每日推荐</span></van-col>
            <van-col class="center" span="4"><i class="iconfont">&#xe674;</i><span>歌单</span></van-col>
            <van-col class="center" span="4"><i class="iconfont">&#xe6c5;</i><span>排行榜</span></van-col>
        </van-row>
        <!-- 推荐歌单 -->
        <h6 >&nbsp;推荐歌单 ></h6>
        <van-row class="Tnone" type="flex" justify="space-around">
            <van-col class="mb02" span="8" v-for="(item,index) of personalized" :key="index">
                <a href="">
                    <img style="width:96%;" :src="item.picUrl" alt="">
                    <p class="Tspan nowrap">{{item.name}}</p>
                </a>
            </van-col>
        </van-row>
        <!-- 最新音乐 -->
        <h6 >&nbsp;最新音乐 ></h6>
        <van-row class="Tnone" type="flex" justify="space-around">
            <van-col class="mb02" span="8" v-for="(item,index) of personalized" :key="index">
                <a href="">
                    <img style="width:96%;" :src="item.picUrl" alt="">
                    <p class="Tspan nowrap">{{item.name}}</p>
                </a>
            </van-col>
        </van-row>
         <!-- 主播电台 -->
        <h6 >&nbsp;主播电台 ></h6>
        <van-row class="Tnone3" type="flex" justify="space-around">
            <van-col class="mb02" span="8" v-for="(item,index) of recommend" :key="index">
                    <img style="width:96%;" :src="item.picUrl" alt="">
                    <p class="Tspan nowrap">{{item.name}}</p>
            </van-col>
        </van-row>

        <!-- 新碟上架 -->
        <ul class="newAlbum ">
            <li class="clearfix" v-for="(item,index) of album" :key="index">
                <img :src="item.picUrl" alt="">
                <div>
                    <p class="nowrap">歌曲名：{{item.name}}</p>
                    <p>版本类型：{{item.subType}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
 data(){
     return{
        imgUrl:"",
        personalized:"",
        recommend:"",
        album:""
     }
 },
 created () {
   this.getBanner() 
   this.getpersonalized() 
   this.getrecommend()
   this.getalbum()
 },   
 methods: {
    getBanner(){
        var that =this;
        this.$http.get('api/banner').then(function(data){
            that.imgUrl=data.data.banners
        })
    },
    getpersonalized(){
        var that =this;
        this.$http.get('api/personalized').then(function(data){
            that.personalized=data.data.result
        })
    },
    getrecommend(){
        var that =this;
        this.$http.get('api/dj/recommend').then(function(data){
            that.recommend=data.data.djRadios
        })
    },
   getalbum(){
        var that =this;
        this.$http.get('api/top/album?offset=0&limit=10').then(function(data){
            that.album=data.data.albums
        })
   }
  }
}
</script>

<style scoped>
/* icon */
.tuijian .van-swipe-item{
    text-align: center;
}
.tuijian .van-col.center{
    margin: 0.2rem 0;
    text-align: center;
    font-size: 0.36rem;
}
.tuijian .van-col span{
    display: block;
}
.tuijian .van-col i{
    color: rgba(255, 255, 255,0.8);
    border-radius: 100%;
    background: red;
    padding: 0.3rem;
}
/* 推荐歌单 */
h6{
    margin: 0.2rem 0 0;
}
.tuijian .van-row--flex{
    text-align: center;
    flex-wrap: wrap;
}
.Tnone{
    height: 9.2rem;
    overflow: hidden;
}
.Tnone3{
    height: 8.6rem;
    overflow: hidden;
}
.tuijian .van-col.mb02{
    margin-bottom: 0.2rem;
}
.Tspan{
    font-size: 0.36rem;
    text-align: left;
    line-height: 0.5rem;
    color: #000;
}
/* 新碟 */
.newAlbum img{
    width: 30%;
}
.newAlbum li{
    width: 100%;
    margin: 0.4rem 0.1rem; 
}
.newAlbum li img{
    float: left;
    width: 3rem;
}
.newAlbum li div{
    width: 6rem;
    margin:auto 0.5rem;
    float: left;
    font-size: 0.35rem;
}
</style>
