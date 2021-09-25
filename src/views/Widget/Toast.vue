<template>
  <div class="row">
      <div class="col">
          <tokyo-card header="Toast Notification Example">
              <p>
                  Use <code>this.$toasted.show('hello adi')</code> in your script template to use this component.
              </p>
              <div class="sweet-alert">
                  <tokyo-button color="primary" @click="handleClick()">Basic Toast</tokyo-button>
                  <tokyo-button color="secondary" @click="withDuration()">With Duration</tokyo-button>
                  <tokyo-button color="success" @click="withIcon()">With Icon</tokyo-button>
                  <tokyo-button color="danger" @click="withAction()">With Action</tokyo-button>
                  <tokyo-button color="dark" @click="multipleAction()">With Multiple Action</tokyo-button>
              </div>
          </tokyo-card>
          <tokyo-card class="mt-3" header="Position Example">
              <p>
                  Use <code>this.$toasted.show('hello adi')</code> in your script template to use this component.
              </p>
              <div class="d-flex justify-content-center">
                <div class="sweet-alert d-block">
                    <tokyo-button color="secondary" @click="topLeft()">Top Left</tokyo-button>
                    <tokyo-button color="success" @click="topCenter()">Top Center</tokyo-button>
                    <tokyo-button color="primary" @click="topRight()">Top Right</tokyo-button>
                </div>
                <br/>
                <div class="sweet-alert d-block">
                    <tokyo-button color="danger" @click="bottomLeft()">Bottom Left</tokyo-button>
                    <tokyo-button color="dark" @click="bottomCenter()">Bottom Center</tokyo-button>
                    <tokyo-button color="dark" @click="bottomRight()">Bottom Right</tokyo-button>
                </div>
              </div>
          </tokyo-card>
          <tokyo-card class="mt-3" header="Change Theme">
                <p>
                  Use <code>this.$toasted.show('hello adi')</code> in your script template to use this component.
                </p>
              <div class="sweet-alert">
                  <tokyo-button color="primary" @click="handleClick()">Toasted Primary</tokyo-button>
                  <tokyo-button color="secondary" @click="outlineTheme()">Outline</tokyo-button>
                  <tokyo-button color="success" @click="bubbleTheme()">Bubble</tokyo-button>
              </div>
          </tokyo-card>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$toasted.show('Hello World', {
                duration: 5000,
            })
        },
        withDuration() {
            this.$toasted.show("Toasted with duration",{
                duration: 5000,
            })
        },
        withIcon() {
            this.$toasted.show("Toasted with Icon",{
                duration: 5000,
                icon: {name: 'user'},
            })
        },
        withAction() {
            this.$toasted.show("Toasted with Action",{
                duration: 5000,
                action : {
                    text : 'Cancel',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                },
            })
        },
        multipleAction() {
            this.$toasted.show("Toasted with Multiple Action",{
                duration: 5000,
                 action : [
                    {
                        text : 'Cancel',
                        onClick : (e, toastObject) => {
                            toastObject.goAway(0);
                        }
                    },
                    {
                        text : 'Undo',
                        // router navigation
                        push : { 
                            name : 'somewhere',
                            // this will prevent toast from closing
                            dontClose : true
                        }
                    }
                ]
            })
        },
        topRight() {
            this.$toasted.show("Toasted Top Right", {
                duration: 5000,
                position: "top-right"
            })
        },
        topLeft() {
            this.$toasted.show("Toasted Top Left", {
                duration: 5000,
                position: "top-left"
            })
        },
        topCenter() {
            this.$toasted.show("Toasted Top Center", {
                duration: 5000,
                position: "top-center"
            })
        },
        bottomLeft() {
            this.$toasted.show("Toasted Bottom Left", {
                duration: 5000,
                position: "bottom-left"
            })
        },
        bottomRight() {
            this.$toasted.show("Toasted Bottom Right", {
                duration: 5000,
                position: "bottom-right"
            })
        },
        bottomCenter() {
            this.$toasted.show("Toasted Bottom Center", {
                duration: 5000,
                position: "bottom-center"
            })
        },
        outlineTheme() {
            this.$toasted.show("Outline Theme", {
                duration: 5000,
                theme: "outline"
            })
        },
        bubbleTheme() {
            this.$toasted.show("Bubble Theme", {
                duration: 5000,
                theme: "bubble"
            })
        },
    }
}
</script>

<style>
.sweet-alert .btn {
    margin: 0px 10px 10px 0;
}
</style>