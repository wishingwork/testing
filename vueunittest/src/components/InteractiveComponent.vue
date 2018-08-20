<template>
  <div>
    <span>
      {{ msg }}
      <el-button type="primary" @click="handleChange">Change</el-button>
    </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello world'
    }
  },
  methods: {
    handleChange () {
      this.msg = 'bye bye'
    }
  }
}
</script>
