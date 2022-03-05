<template>
  <div class="home">
    <h2>Contact Us Page</h2>

  </div>
</template>

<script>
import Form from '@/components/Form'
import axios  from 'axios'

export default {
  components: {
    Form
  },

  data () {
    return {
      email: ''
    }
  },

  methods: {
    onFormSubmit (data) {
      axios.post('http://saveForm.com/api/store', data)
          .then(() => {
      })
    }
  },

  name: 'ContactUs'
}
</script>

<style>
</style>
