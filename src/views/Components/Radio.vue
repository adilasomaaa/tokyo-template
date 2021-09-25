<template>
  <div class="row">
      <div class="col">
          <tokyo-card
            header="Example Radio"
          >
        <p>
            Use this component by typing <code>tokyo-radio</code> and dont forget to pass the props like <code>val, name, and label</code>
        </p>
          <div class="row">
              <div class="col">
                  <tokyo-radio v-model="selected" val="A" name="value1" label="Basic Radio"></tokyo-radio>
                  <tokyo-radio v-model="selected" val="B" name="value1" label="Checked Radio" checked></tokyo-radio>
                  <div class="form-check">
                      <input type="radio" name="value3" id="" class="form-check-input" disabled>
                      <label class="form-check-label" for="">Disabled Radio</label>
                  </div>
                  <div class="form-check">
                      <input type="radio" name="value4" id="" class="form-check-input" checked disabled>
                      <label class="form-check-label" for="">Checked Disabled Radio</label>
                  </div>
                  selected: {{selected}}
              </div>
          </div>
          </tokyo-card>
          <tokyo-card
            header="Example Switch"
            class="mt-3"
          >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla autem porro culpa molestiae, accusamus exercitationem eos, quaerat accusantium debitis, tempore doloremque recusandae incidunt! Voluptatibus quidem assumenda tempore consequatur numquam.</p>
          <div class="row">
              <div class="col">
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1">
                    <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
                    </div>
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
            selected: null
        }
    }
}
</script>

<style>

</style>