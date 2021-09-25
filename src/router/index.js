import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../views/Layout/Default'
import AuthLayout from '../views/Layout/Auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'dashboard',
    component: DefaultLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Home')
      },
      {
        path: '/typography',
        name: 'Typography',
        component: () => import(/* webpackChunkName: "Typography" */ '../views/Typography.vue')
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import(/* webpackChunkName: "about" */ '../views/Table.vue')
      },
      {
        path: '/components/button',
        name: 'Button',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Button.vue')
      },
      {
        path: '/components/breadcumb',
        name: 'Breadcumb',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Breadcumb.vue')
      },
      {
        path: '/components/alert',
        name: 'Alert',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Alert.vue')
      },
      {
        path: '/components/card',
        name: 'Card',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Card.vue')
      },
      {
        path: '/components/badge',
        name: 'Badge',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Badge.vue')
      },
      {
        path: '/components/carousel',
        name: 'Carousel',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Carousel.vue')
      },
      {
        path: '/components/modal',
        name: 'Modal',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Modal.vue')
      },
      {
        path: '/components/pagination',
        name: 'Pagination',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Pagination.vue')
      },
      {
        path: '/components/input',
        name: 'Input',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Input.vue')
      },
      {
        path: '/components/select',
        name: 'Select',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Select.vue')
      },
      {
        path: '/components/radio',
        name: 'Radio',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Radio.vue')
      },
      {
        path: '/components/checkbox',
        name: 'Check Box',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/CheckBox.vue')
      },
      {
        path: '/components/textarea',
        name: 'Textarea',
        component: () => import(/* webpackChunkName: "about" */ '../views/Components/Textarea.vue')
      },
      {
        path: '/components/form-layout',
        name: 'Form Layout',
        component: () => import(/* webpackChunkName: "about" */ '../views/FormLayout.vue')
      },
      {
        path: '/widget/chart',
        name: 'Chart',
        component: () => import(/* webpackChunkName: "about" */ '../views/Widget/Chart.vue')
      },
      {
        path: '/widget/toast',
        name: 'Toast',
        component: () => import(/* webpackChunkName: "about" */ '../views/Widget/Toast.vue')
      },
      {
        path: '/widget/sweet-alert',
        name: 'Sweet Alert',
        component: () => import(/* webpackChunkName: "about" */ '../views/Widget/SweetAlert.vue')
      },
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: 'Login',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChuckname: "tes" */ '../views/Auth/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChuckname: "tes" */ '../views/Auth/Register.vue')
      },
      {
        path: 'forgot-password',
        name: 'Forgot Password',
        component: () => import(/* webpackChuckname: "tes" */ '../views/Auth/ForgotPassword.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
