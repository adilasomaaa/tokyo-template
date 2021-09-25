<template>
  <span :class="{'badge':true, [`badge-${color}`]: color, [`badge-pill`]:pill}">
      <slot/>
  </span>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        pill: {
            type: Boolean
        }
    }
}
</script>

<style>

</style>