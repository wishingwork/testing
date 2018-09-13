<template>
  <div class="foo" @click="giveZero">
    <h1>{{ msg }}</h1>
    <p>Some Text</p>
  </div>
</template>
<script> 
export default {
  name: 'Foo',
  data () {
    return {
      who: 'world',
      updates: 0
    }
  },
  computed: {
    msg () {
      return 'Hello ' + this.who
    }
  },
  watch: {
    who () {
      this.updates++
    }
  },
  methods: {
    giveZero () {
      return 0
    }
  }
}
</script>
