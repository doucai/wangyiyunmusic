<template>
  <div class="login">
      <van-nav-bar
        left-text="返回"
        left-arrow
        right-text="注册"
        @click-right="onClickRight"
        @click-left="onClickLeft"
        />
    <van-cell-group>
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
      <van-field v-model="passsword" label="密码" placeholder="请输入密码"  />
    </van-cell-group>
    <p class="btn">
        <van-button slot="button"  size="small" type="primary"  @click="btn">登陆</van-button>
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
          }
      },
      methods: {
        btn(){
           this.postInfo()
           localStorage.setItem('username',this.phone)
           localStorage.setItem('passsword',this.passsword)
           Toast.success('登录成功');
            this.$router.push("/")
        },
        onClickLeft() {
           this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push("/regist")
        },
        // 登陆
        postInfo(){
           var  postData = new URLSearchParams();
               postData.append('phone', this.phone);    
               postData.append('passsword', this.passsword);
            /* let postData = this.$qs.stringify({
                phone:this.phone,
                passsword:this.passsword
            }) */
            this.$http({
                url:"http://localhost:3000/login/cellphone",
                methods:'get',
                params:postData
            }).then(function(data){
                    console.log(data)
                    console.log(2)
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
