<template>
  <div class="login">
    <i-form ref="formLogin" :model="formLogin" :rules="formLoginRules" class="card-box">
      <FormItem class="formLogin-title">
        <h3>系统登陆</h3>
      </FormItem>
      <FormItem prop="username">
        <i-input type="text" v-model="formLogin.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
      </FormItem>
      <FormItem prop="password">
        <i-input type="password" v-model="formLogin.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </i-input>
      </FormItem>
      <FormItem>
        <Checkbox v-model="formLogin.remember">Remember</Checkbox>
      </FormItem>
      <FormItem>
        <Row>
          <Col :xs="{span:4,offset: 6}">
            <Button type="primary" @click="handleSubmit('formLogin')">Sign in</Button>
          </Col>
          <Col :xs="{span:4,offset: 6}">
            <Button type="primary" @click="formLoginReset('formLogin')">Reset</Button>
          </Col>
        </Row>
      </FormItem>
    </i-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
        remember: false
      },
      formLoginRules: {
        username: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        sessionStorage.setItem("user", JSON.stringify(this.formLogin.username));
      });
      if (valid) {
        this.$Message.success("Successful!");
        this.$router.push({
          path: "/table"
        });
      } else {
        this.$Message.error("Failed!");
      }
      if (this.formLogin.remember) {
        sessionStorage.setItem(
          "username",
          JSON.stringify(this.formLogin.username)
        );
        sessionStorage.setItem(
          "password",
          JSON.stringify(this.formLogin.password)
        );
      } else {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("password");
      }
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.card-box {
  padding: 20px;
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  background-color: #f9fafc;
  margin: 180px auto;
  width: 400px;
  border: 2px solid #8492a6;
}

.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.formLogin-title {
  text-align: center;
  font-size: 28px;
}
.formLogin-title h3 {
  font-size: 18px;
}
.login-no-bottom {
  margin-bottom: 10px;
}
</style>
