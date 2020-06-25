<template>
  <div id="app">
   <menu-principal/>
   <carrossel-imagens/>
   <nossos-servicos/>
   <rodape/>
   <router-view/>

  </div>
</template>

<script>
import MenuPrincipal from './components/MenuPrincipal'
import CarrosselImagens from './components/CarrosseImagens'
import NossosServicos from './components/NossosServicos'
import Rodape from './components/Rodape'


export default {
  name: 'App',
  components: {
    MenuPrincipal,
    CarrosselImagens,
    NossosServicos,
    Rodape
  }
}
</script>

<style>

</style>
