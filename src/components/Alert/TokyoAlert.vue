<template>
  <div>
        <div :class="{'alert alert-dismissable':true, [`alert-`+color]: (color!=='')}">
            <span class="alert-icon">
                <i :class="{[icon]:true}" v-if="icon"></i>
            </span>
            <span class="alert-text">
                {{title}}
            </span>
            <slot/>
        </div>
  </div>
</template>

<script>
/**
* Alert Component
* @displayName Tokyo Alert
 */
export default {
    props: {
        color: {
            type: String,
            default: "primary"
        },
        icon: {
            type: String,
            required: false
        },
        dismissable: {
            type: Boolean,
            required: false
        },
        title: {
            type: String,
            required:false,
        }
    },
    
}
</script>

<style>

</style>