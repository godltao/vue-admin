<template>
  <div class="form-body">
    <el-form :model="userInfo" :rules="rules" ref="registerForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password" type="password">
        </el-input>
      </el-form-item>
      <el-form-item label="出生日期" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker type="date" placeholder="选择日期" v-model="userInfo.birthday"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="性别" prop="resource">
        <el-radio-group v-model="userInfo.sex">
          <el-radio label="男" value="男"></el-radio>
          <el-radio label="女" value="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        <el-button @click="resetForm('registerForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axiosRequest from "network/axios";

export default {
  name: "Register",
  data() {
    return {
      showPassword: false,
      userInfo: {
        name: '',
        password: '',
        sex: '男',
        birthday: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        sex: [
          {required: true, message: '请选择性别', trigger: 'change'}
        ],
        birthday: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          new Promise((resolve) => {
            axiosRequest({
              url: '/reg',
              data: {
                ...this.userInfo
              },
              method: 'post',
            }).then(res => {
              resolve(res.data)
            })
          }).then(data => {
            if(data === true){
              this.$message({
                type: 'info',
                message: `注册成功`
              });
              this.$router.replace("/first")
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.form-body {
  min-width: 320px;
  max-width: 540px;
  margin: 100px auto;
}
</style>
