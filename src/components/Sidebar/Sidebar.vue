<template>
  <div class="sidebar" :class="{'show':showSidebar}">
        <b-navbar-brand class="border-bottom">
            <span style="font-weight:bold" class="text-primary">TOKYO</span>
        </b-navbar-brand>
        <i class="fas fa-list" @click="showNav" style="cursor:pointer"></i>
        <ul class="nav flex-column tokyo-nav p-2 mt-2">
            <div v-for="titleItem in dataSidebar" :key="titleItem">
                <li class="nav-title">{{titleItem.title}}</li>
                <li class="nav-item" v-for="item in titleItem.children" :key="item">
                    <router-link class="nav-link active" aria-current="page" :to="item.link">
                        <i :class="item.icon"></i> 
                        <span class="link-name">{{item.name}}</span>
                    </router-link>
                    <span class="tooltip">
                        {{item.name}}
                    </span>
                </li>
                <div v-for="(items, index) in titleItem.children" :key="(item, index)">
                    <template v-if="!items.link">
                        <li class="nav-item">
                            <div v-b-toggle="`${items.slug}`" class="nav-link" >
                                <i :class="items.icon"></i>
                                <span class="link-name">{{items.name}}</span>
                            </div>
                            <span class="tooltip">
                                <h5 class="mx-auto my-2">{{items.name}}</h5>
                                <li class="nav-item nav-item-collapse" v-for="item in items.subItem" :key="item">
                                    <router-link class="nav-link" :to="item.link">{{item.name}}</router-link>
                                </li>
                            </span>
                        </li>
                        <b-collapse :id="items.slug" v-if="!showSidebar">
                            <li class="nav-item nav-item-collapse" v-for="item in items.subItem" :key="item">
                                <router-link class="nav-link" :to="item.link">{{item.name}}</router-link>
                            </li>
                        </b-collapse>
                    </template>
                </div>
            </div>
        </ul>
  </div>
</template>

<script>
import dataSidebar from './state'
export default {
    mounted() {
        console.log(dataSidebar);
    },
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
    },
    computed: {
        subItem: function() {
            return this.dataSidebar.filter(function(u) {
                return u.subItem
            })
        }
    }
}
</script>

<style >

</style>