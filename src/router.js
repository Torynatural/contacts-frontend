import { createRouter, createWebHistory } from 'vue-router'
import ContactList from './views/ContactList.vue'
import ContactAdd from './views/ContactAdd.vue'
import ContactEdit from './views/ContactEdit.vue'

const routes = [
    { path: '/', component: ContactList },
    { path: '/add', component: ContactAdd },
    { path: '/edit/:id', component: ContactEdit }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
