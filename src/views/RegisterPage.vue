<template>
    <div class="login-container vh-100 vw-100 d-flex justify-content-center align-items-center">
      <!-- Card de Registro -->
      <div class="login-card p-4 rounded shadow">
        <!-- Logo e título -->
        <div class="text-center mb-4">
          <img src="../assets/images/logo_gpt_fatec.png" alt="Logo" class="login-logo mb-2" />
          <h3 class="login-title">Primeiro Acesso</h3>
          <p class="text-muted">Por favor, registre-se na plataforma</p>
        </div>
  
        <!-- Formulário -->
        <b-form>
          <!-- Nome -->
          <b-form-group label="Nome" label-for="name">
            <b-form-input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              autocomplete="off"
              v-model="form.nome"
            ></b-form-input>
          </b-form-group>
  
          <!-- E-mail -->
          <b-form-group label="E-mail" label-for="email">
            <b-form-input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              autocomplete="off"
              v-model="form.email"
            ></b-form-input>
          </b-form-group>
  
          <!-- Data de Nascimento -->
          <b-form-group label="Data de Nascimento" label-for="datanascimento">
            <b-form-input
              id="datanascimento"
              type="date"
              placeholder="Selecione a data"
              aria-describedby="datanascimento-feedback"
              v-model="form.dataNascimento"
              class="w-100"
            ></b-form-input>
          </b-form-group>
  
          <!-- Senha -->
          <b-form-group label="Senha" label-for="password">
            <b-form-input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              v-model="form.password"
            ></b-form-input>
          </b-form-group>
  
          <!-- Botão de Registro -->
          <b-button variant="primary" type="button" block class="mb-3" @click="goToFatecGpt">
            Registrar
          </b-button>
        </b-form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterPage",
    data() {
      return {
        form: {
          nome: "",
          email: "",
          dataNascimento: null,
          password: "",
        },
      };
    },
    methods: {
      goToFatecGpt() {
        this.$router.push({ name: "FatecGptPage" });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo da página de registro */
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
  
  /* Ajuste de tamanho para o Datepicker */
  .b-form-datepicker {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
  }
  </style>
  