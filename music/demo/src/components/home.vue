<template>
  <div class="Vhome">
     <i class="iconfont">&#xe66a;</i>
  </div>
</template>

<script>
export default {
    name:'Vhome',
    data () {
        return {
            
        }
    },
    created () {
        this.getAxiosData()
    },
    methods: {
        getAxiosData(){
            this.$http.get('api/music/url?id=33894312').then(
                function(data){
                    console.log(data)
                }
            ).catch(

            )
        }
    }
}
</script>

<style scoped>
.Vhome{

}
</style>
