<template>
<div>
     <b-sidebar class="tokyo-sidebar bg-white d-md-block" visible  no-header shadow>
      <template >
        <div class="p-3">
          <h4><span style="font-weight:bold" class="text-primary">Tokyo</span><span class="text-muted" style="font-size:20px">Template</span></h4>
          <hr/>
          <nav class="mb-3 text-left" @clickable="false">
            <b-nav vertical>
                <li class="menu-header">
                    Dashboard
                </li>
                <li class="nav-item">
                    <router-link to="dashboard" class="nav-link"><i class="fas fa-user"></i> <span>Dashboard</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="about" class="nav-link"><i class="fas fa-user"></i> <span>About</span></router-link>
                </li>
            </b-nav>
          </nav>          
        </div>
      </template>
    </b-sidebar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>