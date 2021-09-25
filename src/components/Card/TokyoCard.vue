<template>
  <div class="card">
    <div class="card-header" v-if="header || hasHeader">
      <slot name="header">
        {{header}}
      </slot>
    </div>
    <img :src="img" alt="" class="card-img-top">
    <div class="card-body">
      <div class="card-title" v-if="title">
        {{title}}
      </div>
      <slot/>
    </div>
    <div class="card-footer" v-if="footer || hasFooter" >
      <slot name="footer">
      </slot>
        {{footer}}
    </div>
  </div>
</template>

<script>
export default {
 props: {
   header: {
     type: String,
     required: false,
   },
   footer: {
     type: String,
     required: false,
   },
   img: {
     type: String,
     required:false,
   },
   title: {
     type: String,
     required: false,
   }
 },
 computed: {
  hasHeader() {
    return !!this.$slots.header
  },
  hasFooter() {
    return !!this.$slots.footer
  }
 }
}
</script>

<style>

</style>