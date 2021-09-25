<template>
      <div class="main-content">
        <section class="content">
              <Sidebar/>
              <div class="layout-content">
                  <Navbar/>
                  <!-- <section class="header">
                    <Header/>
                  </section> -->
                <div class="p-2 mt-2">
                  <div class="d-flex align-items-center">
                    <div class="row ml-4">
                      <div class="col-auto">
                        <h1 class="font-weight-bold mt-2">{{$route.name}}</h1>                      
                      </div>
                      <div class="col">
                        <b-breadcrumb>
                            <b-breadcrumb-item to="/dashboard">
                            Dashboard
                            </b-breadcrumb-item>
                            <b-breadcrumb-item active>{{$route.name}}</b-breadcrumb-item>
                        </b-breadcrumb>
                      </div>
                    </div>
                  </div>
                <div class="p-3">
                  <fade-transition :duration="200" origin="center top" mode="out-in">
                    <router-view></router-view>
                  </fade-transition>
                </div>
                </div>
                <Footer class="mt-5" />
              </div>
        </section>
      </div>
</template>

<script>
// import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import { FadeTransition } from 'vue2-transitions';
export default {
    components: {
         Navbar, Footer, Sidebar, FadeTransition
    }
}
</script>

<style>

</style>