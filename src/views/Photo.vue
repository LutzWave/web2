<template>
        <!-- Nuevo componente -->
      <div class="login-page mx-auto">
        <div class="form mx-auto">
          <div class="login-form" mx-auto>
            <!--<h2 style="font-size: 26px;" class="mb-5"></h2> -->
            <p>Titulo</p>
            <p>por Usuario</p>
            <b-img class="custom-image" :src=this.props></b-img>
            <hr/>
            <b-row>
              <b-col cols="7">
                <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum fermentum efficitur. Sed convallis purus eget neque tristique, sit amet.</p>
                <hr/>
                <CommentBox/>
              </b-col>
              <b-col>
                <p>Información</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
</template>

<script>
import CommentBox from '@/components/CommentBox.vue'
export default {
  components: {CommentBox},
  props: {
    url: String
  },
  methods: {

  }
}
</script>

<style scoped>
/* Esto es un comentario */
.login-page {
  padding: 8% 0 0;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 840px;
  margin: 0 auto 100px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  border-radius: 10px;
  transition: linear 0.1s;
}

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

.form button {
  font-family: 'Monserrat', sans-serif;
  outline: 0;
  background: #ea4c89;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
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

.custom-image {
  width: 100%!important;
  height: 100%!important;
  border-radius: 10px;
  object-fit: cover;
}
</style>