
<template>
    <div>
        <h1>通讯录列表</h1>
        <div>
            <input v-model="q" placeholder="按姓名或手机号搜索" />
            <button @click="search">搜索</button>
        <router-link to="/add">添加新记录</router-link>
    </div>
    <table border="1" cellpadding="8">
        <thead>
        <tr>
            <th>姓名</th>
            <th>手机</th>
            <th>邮箱</th>
            <th>头像</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="c in contacts" :key="c.id">
        <td>{{ c.name }}</td>
        <td>{{ c.phone }}</td>
        <td>{{ c.email }}</td>
        <td v-if="c.avatar"><img :src="backendBaseURL + c.avatar" alt="avatar" width="50"/></td>
        <td v-else></td>
        <td>
            <router-link :to="`/edit/${c.id}`">编辑</router-link>
        <button @click="del(c.id)">删除</button>
    </td>
</tr>
</tbody>
</table>
</div>
</template>

<script>
    import axios from 'axios'

    export default {
    data() {
    return {
    q: '',
    contacts: [],
    backendBaseURL: 'http://localhost:8080' // 后端基础URL
}
},
    mounted() {
    this.loadContacts();
},
    methods: {
    loadContacts() {
    axios.get(this.backendBaseURL + '/contacts', { params: { q: this.q } })
    .then(res => {
    this.contacts = res.data
})
},
    search() {
    this.loadContacts();
},
    del(id) {
    if (confirm('确定删除吗？')) {
    axios.delete(this.backendBaseURL + '/contacts/' + id)
    .then(res => {
    this.loadContacts();
})
    .catch(err => {
    alert('删除失败');
})
}
}
}
}
</script>
