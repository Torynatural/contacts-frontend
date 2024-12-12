<template>
  <div>
    <h1>添加记录</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label>姓名：</label>
        <input v-model="form.name" required />
      </div>
      <div>
        <label>手机号：</label>
        <input v-model="form.phone" required />
      </div>
      <div>
        <label>邮箱：</label>
        <input v-model="form.email" />
      </div>
      <div>
        <label>头像：</label>
        <input type="file" @change="onFileChange" />
      </div>
      <button type="submit">提交</button>
      <router-link to="/">返回列表</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      backendBaseURL: 'http://localhost:8080',
      form: {
        name: '',
        phone: '',
        email: '',
        avatar: null
      }
    }
  },
  methods: {
    onFileChange(e) {
      this.form.avatar = e.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('phone', this.form.phone);
      formData.append('email', this.form.email);
      if (this.form.avatar) {
        formData.append('avatar', this.form.avatar);
      }

      axios.post(this.backendBaseURL + '/contacts', formData)
          .then(res => {
            this.$router.push('/');
          }).catch(err => {
        alert('添加失败');
      })
    }
  }
}
</script>
