<template>
  <div class="sidebar" :class="{'show':showSidebar}">
        <b-navbar-brand class="border-bottom">
            <span style="font-weight:bold" class="text-primary">TOKYO</span>
        </b-navbar-brand>
        <i class="fas fa-list" @click="showNav" style="cursor:pointer"></i>
        <ul class="nav flex-column tokyo-nav p-2 mt-2">
            <li class="nav-title">Menu</li>
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/dashboard">
                    <i class="fas fa-th-large"></i> 
                    <span class="link-name">Dashboard</span>
                </router-link>
                <span class="tooltip">
                    Dashboard
                </span>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/typography">
                    <i class="fas fa-quote-right"></i>
                    <span class="link-name">Typography</span>
                </router-link>
                <span class="tooltip">
                    Typography
                </span>
            </li>
           
            <li class="nav-item">
                <div v-b-toggle.my-collapse class="nav-link" >
                    <i class="fas fa-layer-group"></i>
                    <span class="link-name">Components</span>
                </div>
                <span class="tooltip">
                    <h5 class="mx-auto my-2">Components</h5>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/alert">Alert</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/badge">Badge</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/breadcumb">Breadcumb</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/button">Button</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/card">Card</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/carousel">Carousel</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/modal">Modal</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/pagination">Pagination</router-link>
                    </li>
                </span>
            </li>
            <b-collapse id="my-collapse" v-if="!showSidebar">
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/alert">Alert</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/badge">Badge</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/breadcumb">Breadcumb</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/button">Button</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/card">Card</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/carousel">Carousel</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/modal">Modal</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/pagination">Pagination</router-link>
                </li>
            </b-collapse>
            <li class="nav-title">Form & Table</li>
            <li class="nav-item">
                <router-link class="nav-link" to="/table"><i class="fas fa-table"></i>
                    <span class="link-name"> Table</span>
                </router-link>
                <span class="tooltip">
                    Table
                </span>
            </li>
            <li class="nav-item">
                <div v-b-toggle.my-collapse-form class="nav-link">
                    <i class="fas fa-keyboard"></i>
                    <span class="link-name">Form Elements</span>
                </div>
                <span class="tooltip">
                    <h5 class="mx-auto my-2">Form Elements</h5>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/input">Input</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/select">Select</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/radio">Radio</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/checkbox">Checkbox</router-link>
                    </li>
                     <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/components/textarea">Textarea</router-link>
                    </li>
                </span>
            </li>
            <b-collapse id="my-collapse-form" v-if="!showSidebar">
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/input">Input</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/select">Select</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/radio">Radio</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/checkbox">Checkbox</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/components/textarea">Textarea</router-link>
                </li>
            </b-collapse>
            <li class="nav-item">
                <router-link class="nav-link" to="/components/form-layout"><i class="fas fa-bars"></i>
                    <span class="link-name"> Form Layout</span>
                </router-link>
                <span class="tooltip">
                    Form Layout
                </span>
            </li>
            <li class="nav-title">Widget</li>
            <li class="nav-item">
                <router-link class="nav-link" to="/widget/chart"><i class="fas fa-chart-bar"></i>
                    <span class="link-name"> Chart</span>
                </router-link>
                <span class="tooltip">
                    Chart
                </span>
            </li>
            <li class="nav-item">
                <div v-b-toggle.my-collapse-2 class="nav-link">
                    <i class="fas fa-bell"></i>
                    <span class="link-name">Notification</span>
                </div>
                <span class="tooltip">
                    <h5 class="mx-auto my-2">Notification</h5>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/widget/toast">Toast</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/widget/sweet-alert">Sweet Alert</router-link>
                    </li>
                </span>
            </li>
            <b-collapse id="my-collapse-2" v-if="!showSidebar">
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/widget/toast">Toast</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/widget/sweet-alert">Sweet Alert</router-link>
                </li>
            </b-collapse>
            <li class="nav-title">Pages</li>
             <li class="nav-item">
                <div v-b-toggle.my-collapse-1 class="nav-link">
                    <i class="fas fa-key"></i>
                    <span class="link-name">Authentication</span>
                </div>
                <span class="tooltip">
                    <h5 class="mx-auto my-2">Authentication</h5>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/auth/register">Register</router-link>
                    </li>
                    <li class="nav-item nav-item-collapse">
                        <router-link class="nav-link" to="/auth/login">Login</router-link>
                    </li>
                </span>
            </li>
            <b-collapse id="my-collapse-1" v-if="!showSidebar">
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/auth/register">Register</router-link>
                </li>
                <li class="nav-item nav-item-collapse">
                    <router-link class="nav-link" to="/auth/login">Login</router-link>
                </li>
            </b-collapse>
            
        </ul>
  </div>
</template>

<script>
import dataSidebar from './state'
export default {
    data() {
        return {
            dataSidebar,
            showSidebar:false,
        }
    },
    methods: {
        showNav() {
            this.showSidebar = !this.showSidebar
        }
    }
}
</script>

<style >

</style>