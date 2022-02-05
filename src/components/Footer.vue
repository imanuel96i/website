<template>
  <v-container>
    <v-footer
      padless
    >
      <v-card
        flat
        tile
        class="text-center"
      >
        <v-card-text class="pt-0">
          Social Media
        </v-card-text>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Website</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
