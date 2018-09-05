<template>
    <div class="search">
        <van-nav-bar
        title=""
        left-text="返回"
        right-text="首页"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
        <van-cell-group v-for="item of songsData">
          <van-cell @click="playSong(item.id)" :value="item.name" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value:"",
            songsData:"",
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        onClickRight() {
           this.$router.push("/")
        },
        onSearch(){
            this.getSearchData(this.value)
        },
        playSong(id){
            this.$router.push({
                name: 'playsong',
                params: {
                    id:id
                }
            })
        },
        getSearchData(data){
            var that =this;
            this.$http.get("http://localhost:3000/search",{
                xhrFields: { withCredentials: true },
                params:{keywords:data}})
                .then(function(data){
                    that.songsData = data.data.result.songs
                }).catch()
        }
    }
}
</script>

<style>

</style>
