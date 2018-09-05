<template>
  <div class="login">
      <van-nav-bar
        left-text="返回"
        left-arrow
        right-text="登陆"
        @click-right="onClickRight"
        @click-left="onClickLeft"
        />
    <van-cell-group>
      <van-field  v-model="phone" label="用户名" placeholder="请输入用户名" :aria-errormessage="istrue"/>
      <van-field  v-model="passsword" label="密码" placeholder="请输入密码" :aria-errormessage="istrue"/>
    </van-cell-group>
    <p class="btn"> 
        <van-button slot="button" size="small" type="primary"  @click="btn">立即注册</van-button>
        <van-button slot="button" size="small" type="warning"  @click="cz">重置</van-button>
    </p>
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
      data () {
          return {
            phone:'',
            passsword:'',
            istrue:"true"
          }
      },
      methods: {
        btn(){
           this.postInfo()
           Toast.success('500');
           this.$router.push("/")
        },
        onClickLeft() {
           this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push("/login")
        },
        cz(){
            if(window.confirm("是否重置")){
                this.phone = ""
                this.passsword = ""
            }
        },
        postInfo(){
            this.$http({
                url:"http://localhost:3000/login/cellphone",
                methods:'get',
                params:{
                    phone:this.phone,
                    passsword:this.passsword
                }
            }).then(
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
.login{
    padding-top: 0.1rem;
}
.van-nav-bar{
    margin-bottom: 0.3rem;
}
.btn{
    text-align: center;
    margin: 0.5rem auto;
}
</style>
