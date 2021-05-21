<template>
  <q-page class="container bg-grey-10" padding >
    <!-- <div class="justify-center text-center">
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
          <a href="#" class="text-white" to="/signIn">Já tenho cadastro</a>
        </div>
      </q-form> -->
  </q-page>
</template>

<style scoped>

</style>

<script>
// import signImg from 'src/assets/cadastroLogo.png'

export default {
  name: 'signIn',
  data () {
    return {

    }
  },
  methods: {
  }
}

</script>
