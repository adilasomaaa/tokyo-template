<template>
  <div class="form-check">
      <input 
        type="radio" 
        :name="name"
        :value="val" 
        @change="changeSelect()"
        :id="id" 
        class="form-check-input" 
        :class="inputClasses" 
        :disabled="disabled" 
        :checked="checked">
          <label :for="id" class="form-check-label">
            <slot>
              {{label}}
            </slot>
          </label>
  </div>
</template>

<script>
export default {
    props: {
        inputClasses: {
          type: String,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
        checked: {
            type: Boolean,
            required: false,
        },
        name: {
            type: String,
            required: false,
        },
        id: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: true,
            default: 'Example Radio'
        },
        val: {
            type: String,
        },
    },
    methods: {
        changeSelect() {
            console.log('select')
            this.$emit('input', this.val)
        }
    },
    computed: {
        getValue() {
            return this.val.toLowerCase();
        }
    }
}
</script>

<style>

</style>