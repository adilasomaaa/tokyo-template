<template>
  <div class="row">
      <div class="col">
          <div class="card">
              <div class="card-header">
                  Example Badge
              </div>
              <div class="card-body">
                <p>
                      To use this component, you can write <code>tokyo-badge</code> and you can use props like <code>color</code> to defined color what you like.
                </p>
                    <button type="button" class="btn btn-secondary">
                        <span>Unread messages</span>
                        <tokyo-badge>24</tokyo-badge>
                    </button>
                    <button type="button" class="btn btn-primary ml-3">
                        <span>Notifications</span>
                        <tokyo-badge color="danger">4</tokyo-badge>
                        <!-- <span class="badge badge-lg badge-circle badge-floating badge-danger border-white">4</span> -->
                    </button>
              </div>
          </div>
          <div class="card mt-2">
              <div class="card-header">
                  Contextual variations
              </div>
              <div class="card-body">
                  <p>
                      To use this component, you can write <code>tokyo-badge</code> and you can use props like <code>color</code> to defined color what you like.
                </p>
                    <tokyo-badge class="mr-3">Primary</tokyo-badge>
                    <tokyo-badge class="mr-3" color="secondary">Secondary</tokyo-badge>
                    <tokyo-badge class="mr-3" color="warning">Warning</tokyo-badge>
                    <tokyo-badge class="mr-3" color="success">Success</tokyo-badge>
                    <tokyo-badge class="mr-3" color="info">Info</tokyo-badge>
                    <tokyo-badge class="mr-3" color="danger">Danger</tokyo-badge>
                    
              </div>
          </div>
          <div class="card mt-2">
              <div class="card-header">
                  Links
              </div>
              <div class="card-body">
                  <p>
                      To use this component, you can write <code>tokyo-badge</code> and you can use props like <code>color</code> to defined color what you like.
                </p>
                    <a href="#" class="badge badge-pill badge-primary">Primary</a>
                    <a href="#" class="badge badge-pill badge-secondary ml-2">Secondary</a>
                    <a href="#" class="badge badge-pill badge-success ml-2">Success</a>
                    <a href="#" class="badge badge-pill badge-info ml-2">Info</a>
                    <a href="#" class="badge badge-pill badge-danger ml-2">Danger</a>
                    
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