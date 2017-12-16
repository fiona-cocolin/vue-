<template>

    <div class="login">
      <!-- 正在屏幕中的盒子 -->
      <div class="login_content">
        <!-- 上面的logo图片 -->
          <section class="login_content_logo">
            <img src="../../img/zhishifenxiang.png" alt="logo">
          </section>
        <!-- 下面的表单内容 -->
          <section class="login_content_from">
            <!-- 如果表单要进行校验，重置，那么必须要设置model属性，关联整个表单的数据 -->
             <el-form :model="user" :rules="formRules" status-icon  ref="ruleForm2"  label-width="70px" class="demo-ruleForm" label-position="left">

             <!-- input:如果要校验重置，那么必须设置prop属性，关联当前的input字符段 -->
             <el-form-item label="用户名" prop="uname">
               <!-- input:要记得改写v-model -->
                <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
             </el-form-item>

               <!-- input：如果要校验重置，那么必须设置prop属性，关联当前的input字符段 -->
             <el-form-item label="密码" prop="upwd">
               <!-- input:要记得改写v-model -->
              <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
             </el-form-item>

             <el-form-item>
               <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
             </el-form-item>
            </el-form>
          </section>
      </div>

    </div>

</template>

<script>
export default {
  data(){
    return {
        // 将来提交给后端的用户字段
        user:{
          uname:'',
          upwd:''
       },
      //  配置校验规则
    formRules:{
      uname:[
        { required: true, message: '请输入用户名', trigger: 'blur' },
        {pattern:/\w{5,18}/,message:"长度在6到18个字符，且只能为&_或字母与数字",trigger:'blur'}
      ],
      upwd:[
        { required: true, message: '请输入密码', trigger: 'blur' },
         {pattern:/.{6,18}/,message:"长度在6到18个字符",trigger:'blur'}
      ]
    }


    }
  },
  methods:{

    //点击提交按钮，调用登录接口
      submitForm(formName) {
        this.$refs[formName].validate((result) => {
          if(result){
            // 先校验表单然后再发送请求,所以要先进行判断
              this.$http.post(this.$api.login,this.user)
              .then(rsp=>alert(rsp.data.message.realname))
          }else{
              alert("请输入正确的用户或名密码");
          }
        });
      },

       // 重置（vue中提供了一个$refs对象, 用来快速的获取dom元素, 在一些特殊情况下我们需要拿到原生dom进行操作）
      resetForm(formName) {
        this.$refs[formName].resetFields();//这里能拿到form组件对象，调用里面的重置方法重置表单
      },
  }



};
</script>

<style scoped  lang="less">
    .login{
      background-color:rgb(38, 124, 183);;
      height:100%;
      &_content{
        width:400px;
        position: absolute;
        left:50%;
        top:50%;
        margin-left:-200px;
        margin-top:-160px;
        // 让logo居中
        &_logo{
          text-align:center;
        }
        // 使用elementUI
        &_from{
          padding:20px 10px;
          border: 1px solid #fff;
          border-radius:5px;
        }
      }
    }
</style>