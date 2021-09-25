<template>
  <div class="row">
      <div class="col">
          <tokyo-card>
              <template v-slot:header>
                  Input Example
              </template>
                <p>
                    You can use this element by typing <code>tokyo-input</code>, if you wanna customize the styles of this component you can typing manually like input component usually. 
                </p>
                <div class="row">
                    <div class="col">
                        <!-- <label for="">Basic Input</label> -->
                        <tokyo-input 
                            placeholder="Your Name ..."
                            label="Basic Input"
                            v-model="basicInput"
                        >
                        </tokyo-input>
                        <p class="bg-secondary p-3 rounded">
                            input : {{basicInput}}
                        </p>
                        <tokyo-input 
                            placeholder="Your Name ..."
                            topHelp="eg. yourname@gmail.com"
                            label="With Helper"
                        >
                        </tokyo-input>
                        <tokyo-input 
                            placeholder="Your Name ..."
                            bottomHelp="eg. yourname@gmail.com"
                            label="With Bottom Helper"
                        >
                        </tokyo-input>
                    </div>
                    <div class="col">
                        <tokyo-input
                            disabled
                            placeholder="Disabled ..."
                            label="Input disabled"
                        >
                        </tokyo-input>
                        <tokyo-input
                            readonly
                            placeholder="Read Only ..."
                            label="Input Read Only"
                        >
                        </tokyo-input>
                        <tokyo-input
                            placeholder="Alternative Input ..."
                            label="Alternative Input"
                            alternative
                        >
                        </tokyo-input>
                    </div>
                </div>
          </tokyo-card>
          <tokyo-card class="mt-3">
              <template v-slot:header>
                  Input with icon
              </template>
               <p>
                    You can add icon in left or right input component by add the props <code>addonLeftIcon</code> or <code>addonRightIcon</code>. 
                </p>
              <div class="row">
                  <div class="col">
                      <label for="">Input with left icon</label>
                      <tokyo-input
                        addonLeftIcon="fas fa-user"
                        placeholder="Input with left icon"
                      ></tokyo-input>
                  </div>
                  <div class="col">
                      <label for="">Input with right icon</label>
                      <tokyo-input
                        addonRightIcon="fas fa-bookmark"
                        placeholder="Input with right icon"
                      ></tokyo-input>
                  </div>
              </div>
          </tokyo-card>
          <tokyo-card class="mt-3">
              <template v-slot:header>
                  Horizontal Input
              </template>
              <p>
                  Add class <code>row</code> and <code>col</code> first, like usually make a horizontal input, and then put <code>tokyo-input</code> and add prop styling like <code>labelClasses</code> and <code>inputClasses</code>
              </p>
              <div class="row">
                  <div class="col">
                      <tokyo-input
                        class="row align-items-center"
                        placeholder="Input First Name ..."
                        labelClasses="col-form-label col-lg-2"
                        label="First Name"
                        inputClasses="col-lg-10"
                    >
                    </tokyo-input>
                  </div>
                  <div class="col">
                    <tokyo-input
                        class="row align-items-center"
                        placeholder="Input Last Name ..."
                        labelClasses="col-form-label col-lg-2"
                        label="Last Name"
                        inputClasses="col-lg-10"
                    >
                    </tokyo-input>
                  </div>
              </div>
          </tokyo-card>
          <tokyo-card class="mt-3">
              <template v-slot:header>
                  Control Sizing Input
              </template>
              <p>
                  You can modified and customize the size of input just type <code>inputClasses="form-control-lg"</code>. Choose type you want, like <code>md</code> or <code>lg</code>
              </p>
              <div class="row">
                  <div class="col">
                      <tokyo-input
                        placeholder="Input First Name ..."
                        label="Large"
                        inputClasses="form-control-lg"
                    >
                    </tokyo-input>
                  </div>
                  <div class="col">
                    <tokyo-input
                        placeholder="Input First Name ..."
                        label="Default"
                    >
                    </tokyo-input>
                  </div>
                  <div class="col">
                    <tokyo-input
                        placeholder="Input First Name ..."
                        label="Small"
                        inputClasses="form-control-sm"
                    >
                    </tokyo-input>
                  </div>
              </div>
          </tokyo-card>
          <tokyo-card class="mt-3">
              <template v-slot:header>
                  Input Validation States
              </template>
              <p>
                  Use props <code>valid</code> to defined your input was validated the data. and if you wanna to show an invalid data, just type <code>:valid="false"</code>.
              </p>
              <div class="row">
                  <div class="col">
                      <tokyo-input
                        placeholder="Input First Name ..."
                        label="Valid State"
                        valid
                    >
                    </tokyo-input>
                  </div>
                  <div class="col">
                    <tokyo-input
                        placeholder="Input First Name ..."
                        label="Invalid State"
                        :valid="false"
                    >
                    </tokyo-input>
                  </div>
              </div>
          </tokyo-card>
          <tokyo-card class="mt-3">
              <template v-slot:header>
                  File Input
              </template>
              <p>
                    You can use this element by typing <code>tokyo-input</code>, if you wanna customize the styles of this component you can typing manually like input component usually. 
                </p>
              <div class="row">
                  <div class="col">
                      <tokyo-input
                        placeholder="Input First Name ..."
                        label="Valid State"
                        type="file"
                    >
                    </tokyo-input>
                  </div>
                  <div class="col">
                    <tokyo-input
                        placeholder="Input First Name ..."
                        label="Invalid State"
                    >
                    </tokyo-input>
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
            basicInput: null
        }
    }
}
</script>

<style>

</style>