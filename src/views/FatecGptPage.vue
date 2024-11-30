<template>
  <b-container fluid class="chat-container">
    <b-row no-gutters>
      <!-- Barra Lateral Esquerda -->
      <b-col sm="3" class="sidebar">
        <!-- Ícone do Usuário e Itens do Menu -->
        <div class="user-profile">
          <div class="user-avatar">
            {{ userInitials }}
          </div>
          <span class="user-name">{{ username }}</span>
        </div>

        <b-dropdown text="Opções" variant="link" class="user-dropdown">
          <template #button-content>
            <div class="user-options">
              <b-dropdown-item @click="goToProfile" class="black-button">Ver Perfil</b-dropdown-item>
              <b-dropdown-item @click="logout" class="black-button">Sair</b-dropdown-item>
            </div>
          </template>
        </b-dropdown>

        <!-- Adicione outros itens aqui -->
        <div class="additional-items">
          <b-button variant="outline-secondary" @click="goToSettings">Configurações</b-button>
        </div>
      </b-col>

      <!-- Janela de Chat -->
      <b-col sm="9" class="chat-window">
        <!-- Caixa de Chat com Rolagem -->
        <div class="chat-box">
          <div v-for="(message, index) in messages" :key="index" class="message-item" :class="{'user-message': message.type === 'user', 'gpt-message': message.type === 'gpt'}">
            <div class="message-content">{{ message.text }}</div>
          </div>
        </div>

        <!-- Fim do Chat (para rolar automaticamente até as últimas mensagens) -->
        <div ref="bottom" class="chat-bottom"></div>
      </b-col>
    </b-row>

    <!-- Fixo na Parte Inferior -->
    <b-row class="input-row">
      <b-col sm="12">
        <b-input-group>
          <b-form-input
            v-model="userInput"
            @keyup.enter="sendMessage"
            placeholder="Digite sua mensagem..."
            :disabled="isSending"
          ></b-form-input>
          <b-input-group-append>
            <b-button @click="sendMessage" variant="danger" :disabled="isSending">
              Enviar
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      username: 'João Silva',  // Nome do usuário
      userInput: '',            // Texto digitado pelo usuário
      isSending: false,         // Controle de envio
      messages: [               // Mensagens
        { text: 'Olá, como posso te ajudar hoje?', type: 'gpt' }
      ],
    };
  },
  computed: {
    userInitials() {
      // Pega as iniciais do nome do usuário
      return this.username
        .split(' ')
        .map(name => name.charAt(0).toUpperCase())
        .join('');
    }
  },
  methods: {
    sendMessage() {
      if (this.isSending || !this.userInput.trim()) return;

      this.isSending = true;
      // Adiciona a mensagem do usuário à lista
      this.messages.push({ text: this.userInput, type: 'user' });

      // Simula uma resposta do GPT
      setTimeout(() => {
        this.messages.push({ text: `Resposta para: "${this.userInput}"`, type: 'gpt' });
        this.userInput = '';  // Limpa o campo de entrada
        this.isSending = false;
        this.scrollToBottom();  // Rola até a última mensagem
      }, 1000);  // Tempo simulado de resposta
    },

    // Função para rolar até a última mensagem
    scrollToBottom() {
      this.$nextTick(() => {
        const bottom = this.$refs.bottom;
        bottom.scrollIntoView({ behavior: "smooth" });
      });
    },

    // Método para ir ao perfil do usuário
    goToProfile() {
      console.log('Redirecionando para o perfil...');
      // Lógica para redirecionar para a página de perfil
    },

    // Método para sair do app
    logout() {
      console.log('Saindo...');
      // Lógica para logout, como limpar o estado e redirecionar
    },

    // Método para acessar configurações
    goToSettings() {
      console.log('Acessando configurações...');
      // Lógica para acessar as configurações do app
    }
  }
};
</script>

<style scoped>
/* Estilos da Barra Lateral */
.sidebar {
  background-color: #f4f4f4;
  padding: 20px;
  height: 100vh;
  border-right: 2px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-profile {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background-color: #ff4d4d;  /* Vermelho para o ícone do usuário */
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-weight: bold;
}

.user-name {
  font-size: 1rem;
  color: #333;
}

.user-options {
  margin-top: 10px;
}

.black-button {
  color: black !important;
  background-color: transparent !important;
  border: none !important;
  padding: 8px 15px;
}

/* Estilos do Chat */
.chat-window {
  margin-left: 250px;  /* Ajusta o layout do chat para a direita da barra lateral */
  padding: 20px;
  height: calc(100vh - 80px);  /* Ajusta para deixar espaço para o campo de entrada */
  overflow-y: auto;
  position: relative;
  background-color: #ffcccc;  /* Cor de fundo vermelha para o chat */
}

.chat-box {
  max-height: calc(100vh - 120px); /* Deixa o chat com rolagem */
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.message-item {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
  max-width: 80%;
}

.user-message {
  background-color: #d9534f;  /* Vermelho para as mensagens do usuário */
  color: white;
  align-self: flex-end;
  text-align: right;
}

.gpt-message {
  background-color: #e0e0e0;
  color: #333;
  align-self: flex-start;
  text-align: left;
}

.message-content {
  word-wrap: break-word;
}

.input-row {
  position: fixed;
  bottom: 0;
  left: 250px;  /* Ajusta a posição do campo de digitação para a direita da barra lateral */
  width: calc(100% - 250px);
  background-color: white;
  padding: 10px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

input {
  border-radius: 20px;
}

button {
  border-radius: 20px;
  background-color: #ff4d4d;  /* Botão com cor de fundo vermelha */
  border: none;
  color: white;
}

button:disabled {
  background-color: #f5a5a5;
}

/* Responsividade */
@media (max-width: 768px) {
  .sidebar {
    position: relative;
    width: 100%;
    height: auto;
    border-right: none;
  }

  .chat-window {
    margin-left: 0;
  }

  .input-row {
    left: 0;
    width: 100%;
  }
}
</style>
