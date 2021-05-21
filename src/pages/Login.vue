<template>
  <q-page class="container bg-grey-10" padding >
    <div class="justify-center text-center">
      <img :src="img" alt="singInLogo" width="200px">
      </div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-col-gutter-md row" ref="myForm">
        <q-input dark outlined color="purple" v-model="form.name" label="Nome" class="col-md-12 col-sm-12 col-xs-12" :rules="[val => val != '' || 'Nome obrigatório']">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input  dark outlined color="purple" type="number" v-model="form.age" label="Idade" class="col-md-12 col-sm-12 col-xs-12" :rules="[val => val !== null && val !== '' || 'Idade obrigatória', val => val >= 18 && val < 100 || 'Você deve ser maior de 18 anos']">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input  dark outlined color="purple" type="Email" suffix="@gmail.com" v-model="form.mail" label="E-mail" class="col-md-12 col-sm-12 col-xs-12" :rules="[val => val && val.length > 0 ||  'Email obrigatório']">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
        <q-input  dark outlined color="purple" mask="(##) #####-####" unmasked-value  v-model="form.telefone" label="Telefone | Whatsapp" class="col-md-12 col-sm-12 col-xs-12" :rules="[val => val && val.length > 0 || 'Telefone obrigatório', val => val.length <= 11 || 'Coloque um número válido']">
        </q-input>
        <q-select dark outlined color="purple" v-model="form.tipoPessoa" :options="optionsTipoPessoa" label="Tipo de pessoa" class="col-md-12 col-sm-12 col-xs-12" emit-value map-options :rules="[val => val && val.length > 0 || 'Tipo de Pessoa obrigatório']"/>
        <span class="text-bold text-white" >Sexo:</span>
        <q-option-group :options="optionsSexo" dark outlined color="purple"  type="radio" v-model="form.sexo" label="Sexo" class="col-md-12 col-sm-12 col-xs-12 text-white"/>
        <span class="text-bold text-white">Tipo de atuação:</span>
        <q-option-group
          :options="optionsAtuacao"
          dark outlined color="purple"
          label="Dificuldades"
          type="checkbox"
          v-model="form.atuacao"
          class="col-md-12 col-sm-12 col-xs-12 text-white"
        />
        <div class="col-12 justify-center text-center q-col-gutter-y-md">
          <div>
            <q-btn label="Cadastrar" dark outlined color="purple" type="submit" class="rainbow-button"/>
          </div>
          <div>
            <q-btn label="Resetar" dark outlined color="purple" type="reset" class="q-mr-md rainbow-button q-px-xl q-py-xs"/>
          </div>
        </div>
        <div class="justify-center text-center col-12">
          <a href="/signIn" class="text-white" to="/signIn">Já tenho cadastro</a>
        </div>
      </q-form>
  </q-page>
</template>

<style scoped>
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
  animation:flicker 3s linear infinite;
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
import signImg from 'src/assets/cadastroLogo.png'

export default {
  name: 'Index',
  data () {
    return {
      img: signImg,
      form: {
        name: null,
        age: null,
        mail: '',
        telefone: '',
        tipoPessoa: '',
        sexo: 'NI',
        atuacao: []
      },
      optionsTipoPessoa: [
        { label: 'Pessoa Física', value: 'pf' },
        { label: 'Pessoa Jurídica', value: 'pj' }
      ],
      optionsSexo: [
        { label: 'Não Informado', value: 'NI' },
        { label: 'Feminino', value: 'F' },
        { label: 'Masculino', value: 'M' }
      ],
      optionsAtuacao: [
        { label: 'Autonomo', value: 'autonomo' },
        { label: 'Propriedade', value: 'visuais' },
        { label: 'Autonomo em domicílio', value: 'autonomoDomicilio' }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({ message: 'Cadastro realizado com sucesso', color: 'positive', icon: 'announcement' })
      this.onReset()
    },
    async onReset () {
      await this.resetForm()
      this.$refs.myForm.resetValidation()
    },
    async resetForm () {
      this.form = {
        name: '',
        age: null,
        mail: '',
        telefone: '',
        tipoPessoa: '',
        sexo: 'NI',
        atuacao: ''

      }
    }
  }
}

</script>
