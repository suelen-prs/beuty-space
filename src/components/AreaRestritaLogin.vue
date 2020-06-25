<template>
 <section class="fundo">
          <div class="fundo2">
            <div class="row">
              <div class="col-md-5 col-sm-10 col-12 mx-auto mt-5">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Área Restrita</h4>
                    <hr>
                    <p class="card-text mt-4">
                      <label for="email">Login</label>
                      <input type="email" class="form-control" id="email">
                    </p>
                    <p class="card-text">
                      <label for="pwd">Senha</label>
                      <input type="password" class="form-control" id="pwd">
                    </p>
                    <p class="card-text">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox"> Lembrar Senha
                        </label>
                      </div>
                    <a href="#" class="btn btn-success btn-block">Entrar</a>
                  </div>
                </div>
      
              </div>
            </div>
          </div>
 </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.fundo {
  background: url(/salao.jpg);
  background-size: cover;
  min-height: 600px; 
  position: relative;
}
</style>