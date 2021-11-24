<template>
  <v-main>
    <div class="staticHero">
      <v-img
        src="../assets/images/img3.png"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p>
          AQUI IRA EL ACERCA DE NOSOTROS KASJKLSLADKJJKLASDKLJASLJKDKDLJSFLKASFJLASDJLAKSDJLASDKJDSALKDASJKL
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Team</h2>
        <v-row>
          <v-col cols="12" sm="4" v-for="item in items" :key="item.id">
            <v-card
              flat
              class="mx-auto"
            >
              <v-img
                class="white--text align-end"
                :src="item.src"
              >
              </v-img>

              <v-card-text class="text--primary text-center">
                <div>{{item.name}}</div>

                <div>{{item.title}}</div>
              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
  export default {
    name: 'About',

    data () {
      return {
        items: [
          {
            id: 1,
            name: 'Yumeno',
            src: require('../assets/images/yume.gif'),
            title: 'Creator',
          },
        ],
      }
    },
  }
</script>
