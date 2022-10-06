<template>
    <v-main>
        <div class="block">
            <v-container>
                <v-container v-if="!chk">
                    <v-alert type="error">
                        {{msg}}
                    </v-alert>
                </v-container>
                <v-container v-if="chk">
                    <v-alert type="success">
                        {{msg}}
                    </v-alert>
                </v-container>
            </v-container>
        </div>
    </v-main>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'VerifyEmail',
        token: '',
        msg: '',
        chk: null,
        data() {
            axios.get('http://127.0.0.1:8000/verify/',{ 
                params: {
                    token: this.$route.params.token
                }
            })
            .then(response =>{
                console.log(response['data']['email'])
                this.msg = response['data']['email']
                this.chk = true
            })
            .catch(err =>{
                this.msg =err['response']['data']['error']
                this.chk = false
            })
            return {
                msg: this.msg,
                chk: this.chk,
            }
        },
    }
</script>