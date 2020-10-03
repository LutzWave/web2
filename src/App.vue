<template>
  <div id="app">
    <!-- Barra de navegación -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar-custom">
        <b-navbar-brand href="#"><router-link to="/" class="router-link-custom">Galeria</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-navbar-nav>
              <b-nav-item><router-link to="/signin" class="router-link-custom">Iniciar sesión</router-link></b-nav-item>  
            </b-navbar-nav>

            <b-nav-form>
              <router-link to="/signup" tag="button" class="button-custom">Regístrate</router-link>
            </b-nav-form>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Barra de navegación */

/* Router Link */
.router-link-custom {
  color: #FFFFFF;
}

.router-link-custom:hover {
  color: #FFFFFF;
  text-decoration: none;
} 

/* Regístrate Botón */
.button-custom {
  font-family: Monserrat, sans-serif;
  outline: 0;
  background: #ea4c89;
  width: 100%;
  border: 0;

  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;

  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 5px;
}
</style>
