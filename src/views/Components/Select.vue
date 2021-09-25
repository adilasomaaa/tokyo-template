<template>
  <div class="row">
      <div class="col">
          <tokyo-card
            header="Select Example"
          >
            <p>
                To use this component you can type <code>.tokyo-select</code> and the props you can use include : <code>label, options, or etc. </code> you can defined many options at data in script template.
            </p>
            <div class="row">
              <div class="col">
                <tokyo-select 
                  label="Basic Select"
                  v-model="basicSelect"
                  :options="options"
                  >
                
                </tokyo-select>
                  <p>
                    Selected : {{basicSelect}}
                  </p>
              </div>
              <div class="col">
                <tokyo-select 
                  label="Disabled Select"
                  :options="options"
                  disabled
                  ></tokyo-select>
              </div>
                
            </div>
          </tokyo-card>
          <tokyo-card
            header="Input Group Text"
            class="mt-3"
          >
            <p>
                To use this component you can type <code>.tokyo-select</code> and the props you can use include : <code>label, options, or etc. </code> you can defined many options at data in script template.
            </p>
            <div class="row">
              <div class="col">
                <tokyo-select 
                  label="Disabled Select"
                  inputGroup
                  inputAppend="left"
                  :options="options"
                  ></tokyo-select>
              </div>
              <div class="col">
                <tokyo-select 
                  label="Disabled Select"
                  inputGroup
                  inputAppend="right"
                  :options="options"
                  ></tokyo-select>
              </div>
                
            </div>
          </tokyo-card>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicSelect: null,
      options: [
        {
          label: 'Choose',
          value: null,
          selected: false,
        },
        {
          label: 'One',
          value: 'One',
        },
        {
          label: 'Two',
          value: 'Two'
        },
        {
          label: 'Three',
          value: 'Three'
        }
      ]
    }
  }
}
</script>

<style>

</style>