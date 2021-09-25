<template>
  <div
    class="form-group"
    :class="[
    {'input-group input-group-select': inputGroup}
    ]"
    >
    <slot name="label" v-if="!inputGroup">
      <label v-if="label" class="form-control-label" :class="labelClasses" >
        {{ label }}
        <span v-if="required">*</span>
      </label>
    </slot>
    <label v-if="inputGroup && inputAppend == 'left'" class="form-control-label" :class="[{'input-group-text':inputAppend == 'left'}, labelClasses]" >
        {{ label }}
        <span v-if="required">*</span>
      </label>
    <select 
      class="custom-select" 
      v-model="data" 
      :class="selectClasses" 
      v-bind="$attrs"
      id="exampleFormControlSelect1"
      >
      <slot/>
      <option v-for="(option, i) in options" :key="i" :disabled="option.selected" :selected="selected" :value="option.value">
        {{option.label}}
      </option>
    </select>
    <label v-if="inputGroup && inputAppend == 'right'" class="form-control-label" :class="[{'input-group-text':inputAppend == 'right'}, labelClasses]" >
        {{ label }}
        <span v-if="required">*</span>
      </label>
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean
    },
    labelClasses: {
      type: String,
    },
    selectClasses: {
      type: String,
      required: false
    },
    options: {
      type: Array,
      required:false
    },
    selected: {
      type: String,
      required:false,
    },
    inputGroup: {
      default: false,
      type:Boolean,
    },
    inputAppend: {
      default: 'left',
      type: String,
      required:false,
    },
    label: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      data: ''
    }
  },
  watch: {
    data() {
      this.$emit('input', this.data);
    }
  },
}
</script>

<style>

</style>