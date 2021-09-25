<template>
  <div>
      <div class="row">
          <div class="col">
              <tokyo-card>
                  <template v-slot:header>
                      Example Breadcumb
                  </template>
                  <p>
                      Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS with BootstrapVue breadcrumb.
                  </p>
                    <b-breadcrumb>
                        <b-breadcrumb-item to="/dashboard">
                            Dashboard
                        </b-breadcrumb-item>
                        <b-breadcrumb-item active>
                            {{$route.name}}
                        </b-breadcrumb-item>
                    </b-breadcrumb>
              </tokyo-card>
              <tokyo-card class="mt-3">
                  <template v-slot:header>
                      Example Breadcumb with Icon
                  </template>
                  <p>
                      Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS with BootstrapVue breadcrumb.
                  </p>
                    <b-breadcrumb>
                        <b-breadcrumb-item to="/dashboard">
                        <i class="fas fa-home"></i>
                            Dashboard
                        </b-breadcrumb-item>
                        <b-breadcrumb-item active>
                            {{$route.name}}
                        </b-breadcrumb-item>
                    </b-breadcrumb>
              </tokyo-card>
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