<template>
  <div class="row row-cols-2">
      <div class="col">
          <tokyo-card header="Horizontal Form Layout">
                <tokyo-input
                    class="row align-items-center pr-3"
                    placeholder="Input First Name ..."
                    labelClasses="col-form-label col-lg-4"
                    label="First Name"
                    inputClasses="col-lg-8"
                >
                </tokyo-input>
                <tokyo-input
                    class="row align-items-center pr-3"
                    placeholder="Input Last Name ..."
                    labelClasses="col-form-label col-lg-4"
                    label="Last Name"
                    inputClasses="col-lg-8"
                >
                </tokyo-input>
                <tokyo-select 
                  label="Quantity"
                  :options="options"
                  class="row align-items-center pr-3"
                  selectClasses="col-lg-8"
                  labelClasses="col-form-label col-lg-4"
                  ></tokyo-select>
                <tokyo-input
                    class="row align-items-center pr-3"
                    type="password"
                    placeholder="Input Password ..."
                    labelClasses="col-form-label col-lg-4"
                    label="Password"
                    inputClasses="col-lg-8"
                >
                </tokyo-input>
                <tokyo-checkbox class="col-12 col-md-8 offset-md-4 my-3" name="tes" label="Remember Me"></tokyo-checkbox>
                <div class="row">
                    <div class="col-md">
                        <button type="reset" class="btn btn-secondary btn-block">Reset</button>
                    </div>
                    <div class="col-md">
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
          </tokyo-card>
      </div>
      <div class="col">
          <tokyo-card header="Horizontal Form Layout with icon">
                <tokyo-input
                    placeholder="Input First Name ..."
                    addonLeftIcon="fas fa-user"
                    inputClasses="col-lg-8"
                    label="Input First Name"
                    labelClasses="col-lg-4 p-0 mt-2"
                >
                </tokyo-input>
                <tokyo-input
                    placeholder="Input Last Name ..."
                    addonLeftIcon="fas fa-user"
                    inputClasses="col-lg-8"
                    label="Input Last Name"
                    labelClasses="col-lg-4 p-0 mt-2"
                >
                </tokyo-input>
                <tokyo-input
                    placeholder="Input Passwod ..."
                    addonLeftIcon="fas fa-key"
                    type="password"
                    inputClasses="col-lg-8"
                    label="Input Passwod"
                    labelClasses="col-lg-4 p-0 mt-2"
                >
                </tokyo-input>
                <tokyo-checkbox class="col-12 col-md-8 offset-md-4 my-3" name="tes" label="Remember Me"></tokyo-checkbox>
                <div class="row">
                    <div class="col-md">
                        <button type="reset" class="btn btn-secondary btn-block">Reset</button>
                    </div>
                    <div class="col-md">
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
          </tokyo-card>
      </div>
      <div class="col mt-3">
          <tokyo-card header="Vertical Form">
              <tokyo-input
                label="Name"
                placeholder="Your Name ..."
              >
              </tokyo-input>
              <tokyo-input
                label="Email"
                type="email"
                placeholder="Your Email ..."
              >
              </tokyo-input>
              <tokyo-select 
                  label="Quantity"
                  :options="options"
                  ></tokyo-select>
              <tokyo-textarea label="Address"></tokyo-textarea>
              <div class="row">
                    <div class="col-md">
                        <button type="reset" class="btn btn-secondary btn-block">Reset</button>
                    </div>
                    <div class="col-md">
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
          </tokyo-card>
      </div>
      <div class="col mt-3">
        <tokyo-card header="Vertical Form with icon">
                <label for="" class="form-control-label font-weight-bold">Name</label>
                <tokyo-input
                    placeholder="Your Name ..."
                    addonLeftIcon="fas fa-user"
                >
                </tokyo-input>
                <label for="" class="form-control-label font-weight-bold">Email</label>
                <tokyo-input
                    placeholder="Your Email ..."
                    addonLeftIcon="fas fa-user"
                >
                </tokyo-input>
                <tokyo-select 
                    label="Quantity"
                    :options="options"
                    ></tokyo-select>
                <tokyo-textarea label="Address"></tokyo-textarea>
                <div class="row">
                    <div class="col-md">
                        <button type="reset" class="btn btn-secondary btn-block">Reset</button>
                    </div>
                    <div class="col-md">
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
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
            options: [
                {
                label: 'Choose',
                value: 'Choose',
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