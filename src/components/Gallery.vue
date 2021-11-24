<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
          md="4"
        >
          <v-img
            :src="item.src"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',

    data () {
      return {
        items: [
          {
            id: 1,
            src: require('../assets/images/img1.png'),
          },
          {
            id: 2,
            src: require('../assets/images/img2.png'),
          },
          {
            id: 3,
            src: require('../assets/images/img3.png'),
          },
          {
            id: 4,
            src: require('../assets/images/img4.png'),
          },
          {
            id: 5,
            src: require('../assets/images/img5.png'),
          },
          {
            id: 6,
            src: require('../assets/images/img6.png'),
          },
          {
            id: 7,
            src: require('../assets/images/img7.png'),
          },
          {
            id: 8,
            src: require('../assets/images/img8.png'),
          },
          {
            id: 9,
            src: require('../assets/images/img9.png'),
          },
        ],
      }
    }
  }
</script>
