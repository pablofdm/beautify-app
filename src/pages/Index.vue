<template color="dark" >
  <q-page class="container bg-grey-10" padding >
    <div class="justify-center text-center">
      <img :src="logo" alt="logo" width="320px"/>
    </div>
    <div class="justify-center text-center posit">
      <img :src="logoText" alt="logo" width="320px" style="margin-top: -45px"/>
    </div>
    <div class="q-col-gutter-y-md content-center item-center posit2">
      <div class="justify-center text-center col-12">
        <q-btn unelevated rounded color="purple" label="Cadastrar" class="q-px-xl q-py-xs rainbow-button" to="/login"/>
      </div>
      <div class="justify-center text-center col-12">
        <q-btn unelevated rounded color="purple" label="Login" class="q-px-xl q-py-xs rainbow-button" to="/signIn"/>
      </div>
    </div>
    <footer style="margin-top: 3.5rem;">
      <div class="justify-center text-center col-12">
        <label class="text-white list-none" to="/index">Copyright © {{getYear}} Beautify. Todos os direitos reservados.</label>
      </div>
    </footer>
    <!-- <p class="text-h4">Formulário</p>
      <form @submit="onSubmit" @reset="onReset" class="q-col-gutter-md row">
        <q-input  clearable outlined color="deep-purple" v-model="form.name" label="nome" class="col-md-12 col-sm-12 col-xs-12" :rules="[val => val && val.lenght > 0 || 'Nome obrigatório']">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input  clearable outlined color="deep-purple" type="number" v-model="form.age" label="Idade" class="col-md-12 col-sm-12 col-xs-12" :rules="[val => val && val != null && val != '' || 'Idade obrigatória']">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input  clearable outlined color="deep-purple" type="Email" suffix="@gmail.com" v-model="form.mail" label="E-mail" class="col-md-12 col-sm-12 col-xs-12">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
        <q-input  clearable outlined color="deep-purple" suffix="@gmail.com" mask="(##) #####-####" unmasked-value  v-model="form.telefone" label="Telefone" class="col-md-12 col-sm-12 col-xs-12">
        </q-input>
        <div class="col-12">
          <q-btn label="Cadastrar" color="deep-purple" type="submit" class="float-right"/>
          <q-btn label="Resetar" type="reset" color="deep-purple"  flat class="q-ml-md float-right" />
        </div>
      </form> -->
  </q-page>
</template>
<style scoped>
.posit {
  margin-top: -50px
}

.posit2{
  margin-top: 40px;
}

.rainbow-button {
  --primary-neon:rgba(231,131,243,.9);
  --light-neon:rgba(159,87,161,.7);
  --pulse-neon:rgba(159,87,161,.5);
  --bright-neon:rgba(159,87,161,1);
  --off-neon:#333;

  --neon-shadow:0 0 7px 4px var(--light-neon), 0 0 7px 4px var(--light-neon) inset;
  --neon-shadow-pulse:0 0 8px 5px var(--pulse-neon), 0 0 8px 5px var(--pulse-neon) inset;
  --neon-shadow-bright:0 0 8px 4px var(--bright-neon), 0 0 8px 4px var(--bright-neon) inset;
  --neon-shadow-text:0 0 7px var(--primary-neon);

  width:calc(20vw + 6px);
  height:calc(8vw + 6px);
  color:var(--primary-neon);
  text-shadow:var(--neon-shadow-text);
  border:3px solid var(--primary-neon);
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-transform:uppercase;
  font-size:3vw;
  font-weight:bold;
  box-shadow:var(--neon-shadow);
  animation:flicker 10s linear infinite;
  margin: auto;
  width: 300px;
  border-radius: 25px;
  padding: 1.5rem;
}

@keyframes flicker {
  0% {
    box-shadow:var(--neon-shadow);
  }
  45% {
    box-shadow:var(--neon-shadow-pulse);
  }
  90% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
    color:var(--primary-neon);
    text-shadow:var(--neon-shadow-text);
  }
  90.01% {
    box-shadow:none;
    border-color:var(--off-neon);
    color:var(--off-neon);
    text-shadow:none;
  }
  94% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  94.01% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  95% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  95.01% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  95.5% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  95.51% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  96% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  96.01% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  96.5% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  96.51% {
    box-shadow:var(--neon-shadow-bright);
    border-color:var(--primary-neon);
  }
  100% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
}
</style>

<script>
import imglogo from 'src/assets/nail.png'
import logoText from 'src/assets/logotext.png'

export default {
  name: 'Index',
  data () {
    return {
      logo: imglogo,
      logoText: logoText,
      form: {
        name: '',
        age: null,
        mail: '',
        telefone: ''
      }
    }
  },
  computed: {
    getYear () {
      const today = new Date()
      return today.getFullYear()
    }
  },
  methods: {
    onSubmit () {
      console.log('hehe')
    },
    onReset () {
      console.log('hehe')
    }
  }
}

</script>
