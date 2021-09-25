<template>
  <div class="form-group">
        <label :for="name">
            <slot>
              {{label}}
            </slot>
        </label>
        <textarea 
            :name="name"
            
            class="form-control"
            :class="textareaClasses"
            v-on:input="updateValue($event.target.value)"
            :id="id" 
            cols="10" 
            rows="5">
        </textarea>
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: null,
        },
        id: {
            type: String,
        },
        name: {
            type: String,
            required: false,
        },
        textareaClasses: {
            type: String,
            required: false
        },
        cols: {
            type: [Number, String],
            default: 10
        },
        row: {
            type: [Number, String],
            default: 5
        },
        value: {
            type: [String, Number]
        }
    },
    listeners() {
      return {
        ...this,
        input: this.updateValue,
      };
    },
    methods: {
        updateValue(value) {
            this.value = value;
            this.$emit('input', value)
        },
    }
}
</script>

<style>

</style>