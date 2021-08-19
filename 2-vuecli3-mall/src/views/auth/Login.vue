<template>
  <div class="form-body">
    <h2 class="title">登陆</h2>
    <el-form :model="userInfo" :rules="rules" ref="loginForm" class="demo-ruleForm"
             @keyup.enter="submitForm('loginForm')">
      <el-form-item prop="name">
        <el-input prefix-icon="el-icon-user" v-model="userInfo.name" placeholder="请输入密码用户名" clearable>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" v-model="userInfo.password" placeholder="请输入密码" type="password" clearable
                  show-password>
        </el-input>
      </el-form-item>
      <el-form-item class="login-form-btn-item">
        <el-button @click="register()">注册</el-button>
        <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import service from '@/service'
import {ElMessage} from 'element-plus'

export default {
  name: "Login",
  //解决vue3 + element ui 键盘响应事件
  //在form上绑定键盘响应
  emits: ['keyup'],
  data() {
    return {
      showPassword: false,
      userInfo: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //Content-Type: multipart/form-data
          let data = new FormData();
          data.append('userName', this.userInfo.name);
          data.append('password', this.userInfo.password);
          service.login(data)
            .then(data => {
              if (data === true) {
                sessionStorage.setItem('v-token', '123456789')
                this.$store.commit('setUserInfo', {
                  name: this.userInfo.name
                })
                this.$router.replace("/")
              } else {
                this.$message({
                  type: 'error',
                  message: `用户名或密码错误`
                });
                this.$refs['loginForm'].resetFields();
              }
            })
            .catch(err => {
              ElMessage.error("Login failed, Please retry...")
            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    register() {
      this.$router.replace("/register")
    }
  }
}
</script>

<style lang="scss">
.login-form-btn-item div {
  display: flex;
  justify-content: flex-end;
  /*因为元素上绑定右样式,所系需要使用!important来将其取消掉*/
  margin-left: 0 !important;
}

.login-form-btn-item button {
  flex: 1;
}
</style>

<style lang="scss" scoped>

$dark_gray: #889aa4;
$light_gray: #eee;

.form-body {
  min-width: 230px;
  max-width: 320px;
  margin: 10% auto;
}

.title {
  text-align: center;
  color: cornflowerblue
}

.el-button el-button--default {
  flex: 1;
}

//.demo-ruleForm .el-form-item__label {
//  text-align: left;
//}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: $dark_gray;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}

</style>
