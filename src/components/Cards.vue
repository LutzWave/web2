<template>
  <b-row class="m-5">
      <b-col lg="3" md="6" sm="12" class="my-3" style="" v-for="(image, index) in images" :key="index">
        <router-link :to="{ name: 'Photo', params: {id: index}}">
          <b-card overlay class="border-0 mx-auto" style="font-family: Calibri, sans-serif;" :img-src="image.url">
            <b-container>
              <div class="card-content">
                <b-row>
                  <b-col cols="1">
                    <b-icon-heart style="color: white"></b-icon-heart>
                  </b-col>
                  <b-col class="text-left">
                      <p>{{image.likes}}</p>
                  </b-col>
                </b-row>
                <b-card-title> {{image.title}}</b-card-title>
              </div>
            </b-container>
          </b-card>
        </router-link>
      </b-col>
  </b-row>
</template>

<script>
export default {
name: "Cards.vue",
  data() {
    return {
      images: [
        {
          url: "https://dspncdn.com/a1/media/692x/07/83/58/07835835b311cf31c9d645470b6be7a0.jpg",
          title: "Imagen 1",
          likes: 1
        },
        {
          url: "https://static.designboom.com/wp-content/uploads/2017/04/the-maiden-tent-bonaventura-visconti-di-modrone-leo-bettini-oberkalmsteiner-designboom-02.jpg",
          title: "Imagen 2",
          likes: 2
        },
        {
          url: "https://dspncdn.com/a1/media/692x/1a/74/05/1a7405bbe5c545c8247557481fa02001.jpg",
          title: "Imagen 3",
          likes: 3
        },
        {
          url: "https://dspncdn.com/a1/media/692x/0b/8f/13/0b8f138c0f12eee0fb4de7be63428d10.jpg",
          title: "Imagen 4",
          likes: 4
        },
        {
          url: "https://mymodernmet.com/wp/wp-content/uploads/2020/03/Nature-TTL-POTY-2020-Winners-Overall-Winner-Florian-ledoux.jpg",
          title: "Imagen 5",
          likes: 5
        },
        {
          url: "https://64.media.tumblr.com/tumblr_lez089qWPc1qz6f9yo1_500.jpg", 
          title: "Imagen 6",
          likes: 6
        },
        {
          url: "https://mymodernmet.com/wp/wp-content/uploads/2013/07/carl-warner-bodyscapes-9.jpg",
          title: "Imagen 7",
          likes: 8
        },
        {
          url: "https://mymodernmet.com/wp/wp-content/uploads/2018/03/panorama-glass-lodge-iceland-2.jpg",
          title: "Imagen 8",
          likes: 8,
        },
        {
          url: "https://dspncdn.com/a1/media/692x/2e/75/bb/2e75bbdf6cc62669dadfae6e81da36f0.jpg",
          title: "Imagen 9",
          likes: 9
        }
      ],
      currentImage: null
    }
  }
}
</script>

<style scoped>

.card-img{
  width: 100%;
  height: 305px!important;
  object-fit: cover;
}

.card{
  position: relative;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: 1s transform cubic-bezier(.155,1.105,.295,1.12), 1s box-shadow, 1s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  cursor: pointer;
}

.card:hover{
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,.24), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: conic-gradient(black, black);
  transition: opacity 0.2s linear;
  opacity: 0;
}

/*.b-icon {
  position: relative;
  right: 0;
  color: white;
  opacity: 0;
  transition: opacity 0.1s linear;
}*/

.card-content {
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.1s linear;
}

.card:hover .card-content {
  opacity: 100;
}

.card:hover:before{
  opacity: 30%;
}

.card-text {
  position: absolute;
  bottom: 10px;
  text-align: left;
  color: white;
  font-family: Calibri,serif;
  line-height: 18px;
  opacity: 0;
  transition: opacity 0.1s linear;
}


</style>