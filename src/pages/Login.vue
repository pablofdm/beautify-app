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
        <q-input  dark outlined color="purple" type="number" v-model="form.age" label="Idade" class="col-md-12 col-sm-12 col-xs-12" :rules="[val => val !== null && val !== '' || 'Idade obrigatória', val => val > 0 && val < 100 || 'Coloque uma idade real']">
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
        <div class="col-12 justify-center text-center">
          <q-btn label="Resetar" dark outlined color="purple" type="reset" class="q-mr-md "/>
          <q-btn label="Cadastrar" dark outlined color="purple"  type="submit"/>
        </div>
      </q-form>
  </q-page>
</template>

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
        { label: 'Autono em domicílio', value: 'autonoDomicilio' }
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
