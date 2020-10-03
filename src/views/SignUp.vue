<template>
    <div class="signup-page">
      <div class="form">
          <b-form>
            <b-row>
              <b-col>
                <b-form-group label="Nombre" class="label-form">
                  <b-form-input type="text" class="mb-0" required/>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Usuario" class="label-form">
                  <b-form-input type="text" class="mb-0" required/>
                </b-form-group>
              </b-col>
            </b-row>
            
            <b-form-group label="Dirección de correo electrónico" class="label-form">
              <b-form-input type="email" required class="mb-0"/>
            </b-form-group>
            <b-form-group label="Contraseña" class="label-form">
              <b-form-input type="password" required class="mb-0 Input"/>
            </b-form-group>

            <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                style="text-align: left; font-size: 12px;"
                class="mb-3 agree-terms"
            >
              Acepto las <b-link class="link">Condiciones del servicio</b-link> y la <b-link class="link">Política de privacidad</b-link> de Generico
            </b-form-checkbox>

            <button style="font-weight: bold">Registrarse</button>
            <hr/>
            <p class="message">¿Ya estás registrado? <router-link to="/login">Inicia sesión</router-link> </p>
          </b-form>
        </div>
    </div>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');

/* Pagina */
.signup-page {
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

.form-control:focus {
  box-shadow: 0 0 0 4px rgba(234, 76, 137, 0.4);
}

/* Etiqueta de Input cajas*/
.label-form {
   text-align: left; 
   font-weight: bold;
}

/* Boton Registrarse */
.form button {
  font-family: "Monserrat", sans-serif;
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

/* Footer Registro */
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.message a {
    color: #ea4c89;
}

/* Texto aceptación de terminos*/ 
.agree-terms {
  font-family: 'Roboto', sans-serif;
}

/* Links */
.link, .link:hover {
  color: #ea4c89;
}
</style>