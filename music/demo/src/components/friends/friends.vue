<template>
    <div class="friends">
        friends
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    created () {
      this.getdata()  
    },
    methods: {
       getdata(){
        var that =this;
        this.$http.get('http://localhost:3000/comment/hot?id=156122&type=0').then(function(data){
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
       } 
    }
}
</script>

<style>

</style>
