<template>
  <div class="auth container py-5" style="background-image: url('../login.png');">
    <div class="row">
        <div class="col">
            <div class="auth-header">
                <h1 class="font-weight-bold text-dark">
                    Login.
                </h1>
            </div>
            <div class="auth-body">
                <p class="text-muted w-50">
                    Log in with your data that you entered during registration.
                </p>
                <div class="row mb-5">
                    <div class="col col-md-4">
                            <form action="">
                                    <tokyo-input
                                        addonLeftIcon="fas fa-user"
                                        placeholder="Username ..."
                                        inputClasses="form-control-lg"
                                    ></tokyo-input>
                                    <tokyo-input
                                        addonLeftIcon="fas fa-key"
                                        placeholder="Password ..."
                                        inputClasses="form-control-lg"
                                    ></tokyo-input>
                                    <div class="my-3 text-left">
                                        <tokyo-checkbox name="rememberme" label="Remember Me"></tokyo-checkbox>
                                    </div>
                                <button type="submit" class="btn btn-primary btn-block">Login</button>
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