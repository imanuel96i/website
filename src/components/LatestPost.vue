<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Latest Post</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="item in items" :key="item.id">
          <v-card outlined
            class="mx-auto"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.src"
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{item.subtitle}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{item.description}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="primary"
                text
              >
                More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'LatestPost',

    data () {
      return {
        items: [
          {
            id: 1,
            title: 'Suichan 1',
            subtitle: 'Ropa 1',
            description: 'Nuevo Outfit de Suisei Hoshimiya',
            src: require('../assets/images/s1.png'),
          },
          {
            id: 2,
            title: 'Suichan 2',
            subtitle: 'Ropa 2',
            description: 'Nuevo Outfit de Suisei Hoshimiya',
            src: require('../assets/images/s2.png'),
          },
          {
            id: 3,
            title: 'Suichan 3',
            subtitle: 'Ropa 3',
            description: 'Nuevo Outfit de Suisei Hoshimiya',
            src: require('../assets/images/s3.png'),
          },
        ],
      }
    }
  }
</script>
