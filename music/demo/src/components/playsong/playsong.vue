<template>
    <div class="playSong">
        <van-nav-bar
        title="music"
        left-text="返回"
        right-text="首页"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
         <van-notice-bar
        text="歌词部分暂未处理"
        />
        <audio class="audioSong" autoplay controls :src="songUrls"></audio>
    </div>
</template>

<script>
export default {
    data () {
        return {
            songId:this.$route.params.id,
            songUrls:"",
            songGeci:""
        }
    },
    created () {
       this.palySongUrl(this.songId)
    //    this.getSongGeCi(this.songId)
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        onClickRight() {
           this.$router.push("/")
        },
        // 获取歌曲链接
        palySongUrl(id){
            var that =this;
            this.$http.get("http://localhost:3000/music/url",{
                xhrFields: { withCredentials: true },
                params:{id:id}})
                .then(function(data){
                    that.songUrls=data.data.data[0].url
                }).catch()
        },
        // 获取歌词
        /* getSongGeCi(id){
            var that =this;
            this.$http.get("http://localhost:3000/lyric",{
                xhrFields: { withCredentials: true },
                params:{id:id}})
                .then(function(data){
                    that.songGeci=data.data.lrc.lyric
                   
                }).catch() 
        }*/
    }
}
</script>

<style scoped>
.playSong{
    text-align: center;
}
audio {
    width: 8rem;
    height: 1rem;
    margin: 2rem auto 0;
}
</style>
