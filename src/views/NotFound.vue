<template>
  <v-main>
    <v-container>
      <div class="block text-center notFound">
        <h2>Page not Found</h2>
        <i class="fas fa-exclamation-triangle red--text"></i>
        <p>We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at admin@website.cl</p>
      </div>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    name: 'NotFound',

    data () {
      return {
        items: [
        ],
      }
    },
  }
</script>
