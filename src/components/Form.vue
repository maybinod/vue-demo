<template>
  <div>
    <form>
      <label>Name</label>
      <input v-model="form.name">

      <button @click.prevent="onSubmitClick">Submit</button>
      <slot name="button"></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',

  data () {
    return {
      form: {
        name: ''
      }
    }
  },

  methods: {
    onSubmitClick () {
      this.$emit('form:submit', this.form.name)
    }
  },

  props: {
    email: {
      require: false
    }
  }
}
</script>

<style>
</style>
