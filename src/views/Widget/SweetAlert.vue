<template>
  <div class="row">
      <div class="col">
          <tokyo-card header="Basic Sweet Alert">
              <p>
                  use syntax <code>$this.swal('Hello World')</code> to use this notification.
              </p>
              <div class="sweet-alert">
                <tokyo-button color="primary" @click="handleClick()">Click This!</tokyo-button>
                <tokyo-button color="secondary" @click="alertTitle()">With Title</tokyo-button>
                <tokyo-button color="success" @click="successAlert()">Success Alert</tokyo-button>
                <tokyo-button color="danger" @click="dangerAlert()">Failed Alert</tokyo-button>
              </div>
              <!-- <button class="btn btn-primary" @click="handeClick()">Click This!</button> -->
          </tokyo-card>
          <tokyo-card class="mt-3" header="With Confirm Buttons">
              <p>
                  use syntax <code>$this.swal('Hello World')</code> to use this notification.
              </p>
              <tokyo-button color="primary" @click="confirmButton()">Click This!</tokyo-button>
          </tokyo-card>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        confirmButton() {
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                }
            })
        },
        handleClick() {
            this.$swal('Hello World')
        },
        alertTitle() {
            this.$swal('Lorem Ipsum','Dolor amet isa nor')
        },
        successAlert() {
            this.$swal({
                icon: 'success',
                title: 'Task Successfully',
                text: 'Lorem ipsum dolor amet sia nor'
            })
        },
        dangerAlert() {
            this.$swal({
                icon: 'error',
                title: 'Task Failed',
                text: 'Lorem ipsum dolor amet sia nor'
            })
        }
    }
}
</script>

<style>
.sweet-alert .btn {
    margin: 0px 10px 10px 0;
}
</style>