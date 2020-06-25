<template>
<nav class="navbar navbar-expand-sm bg-primary navbar-dark justify-content-center">
  <!-- Brand -->
  
  

  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Agende Seu Horário</a>
    </li>
  </ul>
    <img src="logo.png" alt="Logo">
    <a class="navbar-brand" href="#"></a>
    <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Nossos Serviços</a>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/arearestrita">Área Restrita</router-link>
    </li>
  </ul>
</nav>

</template>

<script>
export default {
    
}
</script>

<style scoped>
img{
    width: 200px;
    height: 100px;
}

</style>