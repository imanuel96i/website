<template>
  <v-main>
    <div class="staticHero">
      <v-img
        src="../assets/images/img7.png"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Registro</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <v-alert type="success" v-if="reg==true">
          Se ha registrado correctamente.
        </v-alert>
        <v-container v-if="reg==false">
          <v-alert type="error" v-if="regerr.email!=null || regerr.email!=''">
            {{regerr.email}}
          </v-alert>
        </v-container>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-text-field
            id="email"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.min,]"
            :type="show1 ? 'text' : 'password'"
            name="password"
            label="Contraseña"
            hint="Al menos 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field
            v-model="passwordconfirm"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[(password === passwordconfirm) || 'Las contraseñas deben coincidir', passwordRules.required, passwordRules.min,]"
            :type="show2 ? 'text' : 'password'"
            name="passwordconfirm"
            label="Confirmar Contraseña"
            hint="Las contraseñas deben coincidir"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>

          <v-text-field
            v-model="named"
            :counter="10"
            :rules="nameRules"
            label="Nombre"
            id="named"
            name="named"
            required
          ></v-text-field>

          <v-text-field
            v-model="lastname"
            :counter="10"
            :rules="nameRules"
            label="Apellido"
            required
          ></v-text-field>

          <v-text-field
            ref="mobile"
            v-model="mobile"
            :rules="mobileRules"
            label="Numero de telefono"
            required
            placeholder="99999999"
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="postRegister"
          >
            Submit
          </v-btn>
          
          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset
          </v-btn>
        </v-form>
      </v-container>
    </div>
  </v-main>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Contact',

    data: () => ({
      reg: null,
      regerr: {
        email: null,
      },
      show1: false,
      show2: false,
      password: '',
      passwordconfirm: '',
      valid: true,
      lastname: '',
      named: '',
      nameRules: [
        v => !!v || 'Se requiere un nombre',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Se requiere un E-mail',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      mobile: '',
      mobileRules: [
        v => !!v || 'Se requiere un numero',
        v => (v && v.length >= 8) || 'El numero debe contener al menos 8 digitos',
        v => !/\D/.test(v) || 'Solo se admiten digitos',
      ],
      passwordRules: {
          required: value => !!value || 'Es necesario que ingrese una contraseña',
          min: v => v.length >= 8 || 'La contraseña debe tener al menos 8 caracteres',
      },
    }),

    methods: {
      reset () {
        this.$refs.form.reset()
      },
      postRegister (){
        this.regerr.email = ''
        this.reg = null
        axios.post('http://127.0.0.1:8000/registro/',{
          first_name: this.named,
          last_name: this.lastname,
          email: this.email,
          mobile: this.mobile,
          password: this.password
        })
        .then((response) =>{
          console.log(response.data)
          this.reg = true
        })
        .catch((err) =>{
          console.error(err.response.data)
          this.reg = false
          if(err.response.data['email']!=null){
            this.regerr.email = 'Este email ya se encuentra en uso'
          }
        })
      },
    },
  }
</script>
