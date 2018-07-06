<template>
  <div v-bind:style="{ margin: margin }">
    <h1>vue</h1>
    <h2>{{ count }}</h2>
    <button @click="countUp">+</button>
    <button @click="countDown">-</button>
  </div>
</template>

<script>
export default {
  name: 'name',
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
  }
}
</script>

<style scoped>

</style>