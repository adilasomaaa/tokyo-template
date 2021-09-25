<template>
  <div class="auth container py-5" style="background-image: url('../login.png');">
    <div class="row">
        <div class="col">
            <div class="auth-header">
                <h1 class="font-weight-bold text-dark">
                    Register.
                </h1>
            </div>
            <div class="auth-body">
                <p class="text-muted w-50">
                    Input your data to register to our website.
                </p>
                <div class="row mb-5">
                    <div class="col col-md-4">
                            <form @submit.prevent="submitForm">
                              <div v-if="step === 1">
                                    <tokyo-input
                                        addonLeftIcon="fas fa-user"
                                        placeholder="First Name ..."
                                        inputClasses="form-control-lg"
                                        v-model="registration.firstName"
                                    ></tokyo-input>
                                    <tokyo-input
                                        addonLeftIcon="fas fa-key"
                                        placeholder="Last Name ..."
                                        inputClasses="form-control-lg"
                                        v-model="registration.lastName"
                                    ></tokyo-input>
                                  <div>
                                    <div>
                                      <router-link :to="{name: 'Login'}" class="btn btn-secondary float-left btn-link" style="background:Transparent;border:none">Login</router-link>
                                      <button class="btn btn-primary float-right" @click.prevent="next()"> <i class="fas fa-arrow-right"></i></button>
                                    </div>
                                </div>
                              </div>
                              <div v-if="step === 2">
                                    <tokyo-input
                                        addonLeftIcon="fas fa-envelope"
                                        placeholder="Email ..."
                                        inputClasses="form-control-lg"
                                        v-model="registration.email"
                                    ></tokyo-input>
                                    <tokyo-input
                                        addonLeftIcon="fas fa-user"
                                        placeholder="Username ..."
                                        inputClasses="form-control-lg"
                                        v-model="registration.username"
                                    ></tokyo-input>
                                    <div>
                                      <button class="btn btn-secondary float-left" @click.prevent="prev()"><i class="fas fa-arrow-left"></i> </button>
                                      <button class="btn btn-primary float-right" @click.prevent="next()"> <i class="fas fa-arrow-right"></i></button>
                                    </div>
                              </div>
                               <div v-if="step === 3">
                                    <tokyo-input
                                        addonLeftIcon="fas fa-key"
                                        type="password"
                                        placeholder="Password ..."
                                        inputClasses="form-control-lg"
                                        v-model="registration.password"
                                    ></tokyo-input>
                                    <tokyo-input
                                        addonLeftIcon="fas fa-key"
                                        type="password"
                                        placeholder="Confirm Password ..."
                                        inputClasses="form-control-lg"
                                        v-model="registration.password_confirmation"
                                    ></tokyo-input>
                                    <div>
                                      <button class="btn btn-secondary float-left" @click.prevent="prev()"><i class="fas fa-arrow-left"></i> </button>
                                      <button type="submit" class="btn btn-primary float-right">Register</button>
                                    </div>
                              </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      registration: {
        firstName: null,
        lastName: null,
        email: null,
        username: null,
        password: null,
        passwod_confirmation: null
      },
      valid: false
    }
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submitForm() {
      alert('Registration Successfully' + this.registration.firstName)
    }
  }
}
</script>

<style>
.auth {
    padding-top:100px!important;
    height: 100vh;
    background-size: 700px;
    background-position-x: right;
    background-repeat: no-repeat;
}
.auth-header h1{
    font-size:3rem;
    text-align:left;
}

.auth-body p {
    font-size:2rem;
    text-align:left;
}
</style>