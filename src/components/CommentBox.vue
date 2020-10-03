<template>
  <div align="center">
    <div class="comment-form">
      <b-textarea no-resize v-model="comment" class="mb-3"></b-textarea>
      <button v-on:click="addComment">Comentar</button>
    </div>

    <div v-for="(comment, index) in comments" :key="index" class="text-left">
      <div v-if="comment.user === currentUser">
        <b-icon-trash-fill v-on:click="removeComment(index)" style="cursor: pointer"></b-icon-trash-fill>
      </div>
      <p class="user"> {{comment.user}}:</p>
      <p class="content-comment"> {{comment.content}}</p>
    <hr/>
    </div>
    </div>
</template>

<script>
export default {
  name: "CommentBox",
  data() {
    return {
      comments: [
        {user: "usuario.no.generico", content: "Esto es una prueba"}
      ],
      currentUser: "usuario.generico"
    }
  },
  methods: {
    addComment: function (){
      if(this.currentUser && this.comment){
        this.comments.push({user: this.currentUser, content: this.comment})
        console.log(this.currentUser)
      }else{
        alert('Fields Empty');
      }
    },

    removeComment: function (index){
      if (index > -1) {
        this.comments.splice(index, 1);
      }
    }
  }
}
</script>

<style scoped>

.author{
  margin: 10px 0;
  font-weight: bold;
}

input{
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

button{
  background: #333;
  color: #ccc;
  border: 0;
  padding: 5px;
  cursor: pointer;
}

.user {
  font-weight: bold;
}

</style>