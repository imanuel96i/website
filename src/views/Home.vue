<template>
  <v-main>
    <Hero/>
    <Gallery/>
    <CountdownTimer></CountdownTimer>
    <LatestPost/>
  </v-main>
</template>

<script>
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import LatestPost from '../components/LatestPost';
import CountdownTimer from '../components/Timer';

  export default {
    name: 'Home',

    components: {
      Hero,
      Gallery,
      LatestPost,
      CountdownTimer,
    },

    data () {
      return {
        items: [
        ],
      }
    },
  }
</script>
