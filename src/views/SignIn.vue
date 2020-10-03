<template>
  <div class="signin-page">
    <div class="form">
      <div class="login-form">
        <b-form>
          <b-form-group label="Dirección de correo electrónico" style="text-align: left; font-weight: bold">
            <b-form-input type="email" required class="mb-0"/>
          </b-form-group>
          <b-form-group label="Contraseña" style="text-align: left; font-weight: bold">
            <b-form-input type="password" required class="mb-0 Input"/>
          </b-form-group>

          <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"

              class="mb-0 remember-email-address"
          >
            <p style="padding-top: 2%;">Recordar la dirección de correo electrónico</p>
          </b-form-checkbox>

          <button class="mb-3">Iniciar sesión</button>

          <div class="forgot-password">
          <b-link class="Link">¿Olvidaste tu contraseña?</b-link>
          </div>
          <hr/>

          <p class="message">¿No estás registrado? <router-link to="/sign-up">Regístrate aquí.</router-link></p>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');

/* Pagina */
.signin-page {
  padding: 8% 0 0;
  margin: auto;
}

/* "Carta" / Registro */ 
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 460px;
  margin: 0 auto 100px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  border-radius: 10px;
}

/* Input cajas */
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

/* Boton Inicio de sesión */
.form button {
  font-family: Monserrat, sans-serif;
  outline: 0;
  background: #ea4c89;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 5px;
}

.form button:hover,.form button:active,.form button:focus {
  background: #f371a0;
}

.form-control:focus {
  box-shadow: 0 0 0 4px rgba(234, 76, 137, 0.4);
}

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
  font-family: Roboto, sans-serif;
}

.form .message a {
  color: #ea4c89;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  color: black;
}

html {
  background-color: #f5f5f5;
}

.forgot-password {
  font-size: 12px;
  font-family: Roboto, Arial, sans-serif;
}

.Link {
  color: #ea4c89;
  font-family: Roboto, sans-serif;
}

.Link:hover {
  color: #ea4c89;
}

.remember-email-address {
  font-family: 'Roboto', Arial, sans-serif;
  text-align:left;
  font-size: 12px;
}

</style>