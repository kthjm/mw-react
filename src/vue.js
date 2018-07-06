import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import ComponentAsFile from './vue.Component.vue'
import { margin, appStyle } from './.var.js'

const vueAppStyle = Object.keys(appStyle).map(key => `${key}:${appStyle[key]};`).join('')

const ComponentAsObj = {
  props: ['margin'],
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    countUp() {
      this.$store.commit('increment', +1)
    },
    countDown() {
      this.$store.commit('increment', -1)
    }
  },
  template: `
  <div v-bind:style="{ margin: margin }">
    <h1>vue</h1>
    <h2>{{ count }}</h2>
    <button @click="countUp">+</button>
    <button @click="countDown">-</button>
  </div>
  `
}

Vue.use(Vuex)

new Vue({
  el: '#vue',
  store: new Vuex.Store({
    state: { count: 0 },
    mutations: { increment: (state, payload) => state.count = state.count + payload }
  }),
  components: {
    ComponentAsObj,
    ComponentAsFile
  },
  template: `
  <div style="${vueAppStyle}">
    <ComponentAsObj margin="${margin}" />
    <ComponentAsFile margin="${margin}" />
  </div>
  `,
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
})