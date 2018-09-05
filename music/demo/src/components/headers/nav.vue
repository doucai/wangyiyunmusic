<template>
    <div class="Vnav">
        <!-- 登录 -->
        <div class="vnavDiv">
            <p class="loginP">登录网易云</p>
            <p>320k高音质无线下载</p>
            <p class="login" @click="goLongin">立即登录</p>
        </div>
        <!-- 导航 -->
        <ul>
            <li>
                <router-link to=""><i class="iconfont">&#xe793;</i>
                我的消息
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe6c5;</i>
                排行榜
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont"></i>&#xe610;</i>
                会员中心
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe67e;</i>
                游戏推荐
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe674;</i>
                在线听歌
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe610;</i>
                我的好友
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe669;</i>
                附近的人
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe604;</i>
                停止播放
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe61f;</i>
                商城
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe61e;</i>
                MV
                </router-link>
            </li>
             <li>
                <router-link to=""><i class="iconfont">&#xe669;</i>
                附近的人
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe604;</i>
                停止播放
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe61f;</i>
                商城
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe61e;</i>
                MV
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe61f;</i>
                商城
                </router-link>
            </li>
            <li>
                <router-link to=""><i class="iconfont">&#xe61e;</i>
                MV
                </router-link>
            </li>
        </ul>

        <!-- 底部固定 -->
        <div class="footerFixed">
             <van-row type="flex" justify="space-around">
                    <van-col span="8"><i class="iconfont">&#xe793;</i>夜间模式</van-col>
                    <van-col span="6"><i class="iconfont">&#xe600;</i>设置</van-col>
                    <van-col span="6"><i class="iconfont">&#xe604;</i>退出</van-col>
            </van-row>
        </div>
    </div> 
</template>

<script>
export default {
    name:'Vnav',
    data () {
        return {
           
        }
    },
    methods: {
        goLongin(){
           this.$router.push('login')
        }
    }
}
</script>

<style scoped>
.Vnav .vnavDiv{
   width: 7rem;
   height: 2.5rem;
   background: #000;
   text-align: center;
   font-size: 0.35rem;
   padding-top: 0.5rem;
}
.Vnav .vnavDiv p{
    height: 0.5rem;
    line-height: 0.5rem;
    color: #999
}

.Vnav .vnavDiv .login{
    margin: 0.3rem auto 0; 
    width: 3rem;
    color: #eee;
    height: 0.7rem;
    line-height: 0.7rem;
    border-radius: 0.3rem;
    border: 1px solid gray;
}

.Vnav ul{
    margin-bottom: 1rem;
}
.Vnav ul li{
    padding-left: 0.2rem;
}
.Vnav ul a{
    color: rgba(0, 0, 0, .8);
    font-size: 0.45rem;
}
.Vnav ul a i{
    font-size: 0.4rem;
    color: #000;
}
.Vnav .footerFixed{
    width: 7rem;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top:1px solid #eee; 
    font-size: 0.35rem;
}
.Vnav .footerFixed i{
    font-size: 0.35rem;
    margin-right: 0.1rem;
}
</style>
