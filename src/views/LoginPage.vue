<template>
    <div class="login-container vh-100 vw-100 d-flex justify-content-center align-items-center">
      <!-- Card de Login -->
      <div class="login-card p-4 rounded shadow">
        <!-- Logo -->
        <div class="text-center mb-4">
          <img src="../assets/images/logo_gpt_fatec.png" alt="Logo" class="login-logo mb-2" />
          <h3 class="login-title">Bem-vindo</h3>
          <p class="text-muted">Por favor, entre na sua conta</p>
        </div>
  
        <!-- Formulário -->
        <b-form>
          <!-- Campo de E-mail -->
          <b-form-group label="E-mail" label-for="email">
            <b-form-input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              autocomplete="off"
            ></b-form-input>
          </b-form-group>
  
          <!-- Campo de Senha -->
          <b-form-group label="Senha" label-for="password">
            <b-form-input
              id="password"
              type="password"
              placeholder="Digite sua senha"
            ></b-form-input>
          </b-form-group>
  
          <!-- Botão de Login -->
          <b-button variant="primary" type="submit" block class="mb-3"  @click="goToFatecGpt">
            Entrar
          </b-button>
  
          <!-- Link para recuperar senha -->
          <div class="text-center">
            <small>
              <a href="#" class="text-muted">Esqueceu sua senha?</a>
            </small>
          </div>
        </b-form>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    goToFatecGpt() {
      this.$router.push({name:"FatecGptPage"});
    }
  }
}
</script>
  
  <style scoped>
  /* Estilo da tela de login */
  .login-container {
    background-color: #f8f9fa;
  }
  
  .login-card {
    width: 100%;
    max-width: 400px;
    background-color: #ffffff;
  }
  
  .login-logo {
    max-width: 150px;
    object-fit: contain;
  }
  
  .login-title {
    font-weight: 600;
    color: #343a40;
  }
  </style>
  