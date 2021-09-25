<template>
  <div class="row">
      <div class="col">
          <div class="card">
              <div class="card-header">
                  Alert Example
              </div>
              <div class="card-body">
                  <p>
                      To use this component, you can write <code>tokyo-alert</code> and the props you can use is <code>color</code> to defined color you want to use.
                  </p>
                  <tokyo-alert color="primary">
                      <strong>Primary!</strong> This is a primary alert
                  </tokyo-alert>
                  <tokyo-alert color="secondary">
                      <strong>Secondary!</strong> This is a secondary alert
                  </tokyo-alert>
              </div>
          </div>
          <div class="card mt-3">
              <div class="card-header">
                  Alert with icon
              </div>
              <div class="card-body">
                  <p>
                      To use this component, you can write <code>tokyo-alert</code> and the props you can use is <code>icon</code> to add icon in this component.
                  </p>
                  <tokyo-alert color="primary" icon="fas fa-exclamation">
                      <strong>Primary!</strong> This is a primary alert
                  </tokyo-alert>
                  <tokyo-alert color="secondary" icon="fas fa-exclamation">
                      <strong>Secondary!</strong> This is a secondary alert
                  </tokyo-alert>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>