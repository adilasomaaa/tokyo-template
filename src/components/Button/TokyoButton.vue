<template>
  <button :type="type" :class="{'btn':true, [`btn-${color}`]:  variant=='default',
        [`btn-outline-`+color]: variant=='outline',
        [`btn-${size}`]: size,
        [`rounded-pill`]: rounded}
      "
      @click="$emit('click')"
      >
        <template v-if="icon" >
          <span class="btn-inner--icon">
            <i :class="{[icon]:true}" ></i>
          </span>
        </template>
          <span class="btn-inner--text" v-if="hasSlot">
            <slot />
          </span>
        
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: 'button',
      required: false,
    },
    rounded: {
      default: false,
      type:Boolean,
    },
    color: {
      required:false,
      default:'primary',
    },
    variant: {
      required:false,
      default:'default'
    },
    size: {
      required:false
    },
    icon: {
      required:false,
      type:String
    },
    value: {
      type: String
    }
  },
  computed: {
    hasSlot() {
      return !!this.$slots
    }
  }
}
</script>

<style>

</style>