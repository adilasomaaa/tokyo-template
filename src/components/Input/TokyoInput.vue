<template>
  <div
    class="form-group"
    :class="[
      { 'input-group': hasIcon },
      { 'has-danger': error },
      { focused: focused },
      { 'has-label': label || $slots.label },
      
      { 'has-success': valid === true },
      { 'has-danger': valid === false },
      formClasses,
    ]"
  >
    <slot name="label">
      <label v-if="label" class="form-control-label" :class="labelClasses">
        {{ label }}
        <span v-if="required">*</span>
      </label>
      <small class="text-muted" v-if="topHelp">
          {{topHelp}}
      </small>
    </slot>

    <div v-if="addonLeftIcon || $slots.addonLeft" class="input-group-prepend">
      <span class="input-group-text">
        <slot name="addonLeft">
          <i :class="addonLeftIcon"></i>
        </slot>
      </span>
    </div>
    <slot>
      <input
        v-on:input="updateValue($event.target.value)"
        :disabled="disabled"
        :readonly="readonly"
        :value="value"
        :type="type"
        class="form-control"
        :placeholder="placeholder"
        :class="[
          { 'is-valid': valid === true },
          { 'is-invalid': valid === false },
          { 'form-alternative':alternative},
          inputClasses,
        ]"
        aria-describedby="addon-right addon-left"
      />
    </slot>
    <div v-if="addonRightIcon || $slots.addonRight" class="input-group-append">
      <span class="input-group-text">
        <slot name="addonRight">
          <i :class="addonRightIcon"></i>
        </slot>
      </span>
    </div>
    <slot name="infoBlock"></slot>
    <slot name="helpBlock">
      <div
        class="text-danger invalid-feedback"
        style="display: block"
        :class="{ 'mt-2': hasIcon }"
        v-if="error"
      >
        {{ error }}
      </div>
    </slot>
    <small class="text-muted" v-if="bottomHelp">
          {{bottomHelp}}
      </small>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "base-input",
  props: {
    alternative: {
      type: Boolean
    },
    required: {
      type: Boolean,
      description: "Whether input is required (adds an asterix *)",
    },
    valid: {
      type: Boolean,
      description: "Whether is valid",
      default: undefined,
    },
    label: {
      type: String,
      description: "Input label (text before input)",
    },
    placeholder: {
      type: String
    },
    error: {
      type: String,
      description: "Input error (below input)",
    },
    formClasses: {
      type: String,
      description: "Form css classes",
    },
    labelClasses: {
      type: String,
      description: "Input label css classes",
    },
    inputClasses: {
      type: String,
      description: "Input css classes",
    },
    value: {
      type: [String, Number],
      description: "Input value",
    },
    addonRightIcon: {
      type: String,
      description: "Addon right icon",
    },
    addonLeftIcon: {
      type: String,
      description: "Addont left icon",
    },
    topHelp: {
        type: String,
        description: "Top Helper",
        required: false,
    },
    bottomHelp: {
        type: String,
        description: "Bottom Helper",
        required: false,
    },
    type: {
      type:String,
      default: 'text'
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    }
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur,
      };
    },
    hasIcon() {
      const { addonRight, addonLeft } = this.$slots;
      return (
        addonRight !== undefined ||
        addonLeft !== undefined ||
        this.addonRightIcon !== undefined ||
        this.addonLeftIcon !== undefined
      );
    },
  },
  methods: {
    updateValue(value) {
      this.value = value;
      this.$emit('input', value)
    },
    onFocus(value) {
      this.focused = true;
      this.$emit("focus", value);
    },
    onBlur(value) {
      this.focused = false;
      this.$emit("blur", value);
    },
  },
};
</script>
<style></style>