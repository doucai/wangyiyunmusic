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
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" :aria-errormessage="istrue"/>
      <van-field v-model="passsword" label="密码" placeholder="请输入密码" :aria-errormessage="istrue"/>
    </van-cell-group>
    <p class="btn" @click="btn">立即注册</p>
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
      data () {
          return {
            username:'',
            passsword:'',
            istrue:"true"
          }
      },
      methods: {
        btn(){
           Toast.success('注册成功');
           this.$router.push("/")
        },
        onClickLeft() {
           this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push("/login")
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
    width: 2.5rem;
    text-align: center;
    border: 1px solid #eee;
    margin: 0.5rem auto;
    font-size: 0.5rem;
    padding: 0.2rem 0;
    font-weight: bold;
    background: #690;
}
</style>
