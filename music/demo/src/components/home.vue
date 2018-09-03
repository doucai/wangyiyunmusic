<template>
  <div class="Vhome">
     
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
