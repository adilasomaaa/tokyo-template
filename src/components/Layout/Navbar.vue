<template>
   <b-navbar toggleable="lg" type="light" class="top-nav" style="background-color:#fff;padding:15px">
     
    <div class="col-md">
      <div class="row">
        <div class="col">
          <b-form-input size="md" class="mr-sm-2 w-100" style="position:relative" placeholder="Search">
          </b-form-input>
          <i class="fas fa-search" style="position:absolute;top: 13px;right: 25px;"></i>
        </div>
        <div class="col">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </div>
      </div>
    <b-navbar-brand href="#">
      <!-- <span style="font-weight:bold" class="text-primary">Tokyo</span><span class="text-primary" style="font-size:17px">Template</span> -->
    </b-navbar-brand>
    </div>
    <div class="col">
      <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown  right style="font-size:20px;align-items:center">
          <template #button-content>
            <i class="mt-2 fas fa-bell"></i>
          </template>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right >
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <div class="avatar avatar-sm">
              <img src="/img/theme/team-1.jpg" alt=""> 
            </div>
            <span class="font-weight-bold">
              Yasdil Lasoma
            </span>
          </template>
          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item>Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
    
  </b-navbar>
</template>

<script>
export default {
  
}
</script>

<style>

</style>