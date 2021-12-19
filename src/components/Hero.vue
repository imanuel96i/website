<template>
  <div class="heroBlock">
    <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="fill-height title hidden-xs-only"
          align="center"
          justify="center"
        >
          <div>
            {{ item.title }} 
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Hero',

    data () {
      return {
        items: [
          {
            src: require('../assets/images/s1.png'),
            title: 'Suisei 1',
          },
          {
            src: require('../assets/images/s2.png'),
            title: 'Suisei 2',
          },
          {
            src: require('../assets/images/s3.png'),
            title: 'Suisei 3',
          },
        ],
      }
    },
  }
</script>
