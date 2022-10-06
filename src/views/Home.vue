<template>
  <v-main>
    <Hero/>
    <Gallery/>
    <LatestPost/>
  </v-main>
</template>

<script>
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import LatestPost from '../components/LatestPost';

  export default {
    name: 'Home',

    components: {
      Hero,
      Gallery,
      LatestPost,
    },

    data () {
      return {
        items: [
        ],
      }
    },
  }
</script>
