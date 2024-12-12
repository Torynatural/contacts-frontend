<template>
  <div>
    <h1>编辑记录</h1>
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
        <label>头像（不修改可不上传）：</label>
        <input type="file" @change="onFileChange" />
      </div>
      <button type="submit">提交更新</button>
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
        id: null,
        name: '',
        phone: '',
        email: '',
        avatar: null
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(this.backendBaseURL + '/contacts/' + id)
        .then(res => {
          this.form.id = res.data.id;
          this.form.name = res.data.name;
          this.form.phone = res.data.phone;
          this.form.email = res.data.email;
        })
        .catch(() => {
          alert('加载记录失败');
        })
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

      axios.put(this.backendBaseURL + '/contacts/' + this.form.id, formData)
          .then(res => {
            this.$router.push('/');
          }).catch(err => {
        alert('更新失败');
      })
    }
  }
}
</script>
