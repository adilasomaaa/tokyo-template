<template>
  <div class="row">
      <div class="col">
          <tokyo-card header="Chekbox Example
          ">
          <p>
              You can use this component by typing <code>tokyo-checkbox</code> and dont forget to assign the props <code>name, val, label</code>.
              If you wanna checkbox with checked element you can pass <code>checked</code> or make <code>v-model</code> with true value.
          </p>
              <div class="row">
                  <div class="col">
                        <tokyo-checkbox name="checkbox1"  val="Vue"  label="Vue" checked></tokyo-checkbox>
                        <tokyo-checkbox v-model="selected"  name="value4" val="Laravel" label="Laravel" check></tokyo-checkbox>
                        <tokyo-checkbox  name="value2" value="check" label="Disabled Checkbox" disabled></tokyo-checkbox>
                        <tokyo-checkbox  name="value3" value="check" label="Disabled Checked Checkbox" disabled checked></tokyo-checkbox>
                        <p>
                            Selected Value : {{selected}}
                        </p>
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
           checkbox: [],
           selected: true,
       }
   }
}
</script>

<style>

</style>