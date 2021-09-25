<template>
  <div class="custom-control custom-checkbox">
      <input 
        type="checkbox"        
        :id="name"
        :name="name"
        :disabled="disabled"
        v-model="model"
        class="custom-control-input" 
        >
          <label :for="name" class="custom-control-label">
            <slot>
              {{label}}
            </slot>
          </label>
  </div>
</template>

<script>
export default {
    props: {
        autofocus: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'primary'
        },
        label: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            required: false,
        },
        value: {
            type: String,
            // required: true,
        },
        val: {
            type: String
        },
        checked: {
            type: [Array, Boolean],
            description: "Whether checkbox is checked",
        },
    },
    model: {
        prop: "checked",
    },
    data() {
        return {
            touched: false,
        };
    },
    computed: {
        model: {
            get() {
                return this.checked;
            },
            set(check) {
                if (!this.touched) {
                    this.touched = true;
                    
                }
                this.$emit("input", check);
            },

        },
    },
    
}
</script>

<style>

</style>