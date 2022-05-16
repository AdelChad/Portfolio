import Vue from 'vue'
import VueRouter from 'vue-router'

import Map from "../components/Map.vue"
import Loisir from "../components/Loisir.vue"
import Contact from "../components/Contact.vue"
import Service from "../components/Service.vue"
import Experience from "../components/Experience.vue"
import CV from "../components/CV.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Map",
        component: Map,
    },
    {
        path: "/loisir",
        name: "Loisir",
        component: Loisir,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/service",
        name: "Service",
        component: Service,
    },
    {
        path: "/experience",
        name: "Experience",
        component: Experience,
    },
    {
        path: "/cv",
        name: "CV",
        component: CV,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router