<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
            id="input-3"
            type="password"
            v-model="form.password"
            placeholder="Enter Password"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Confirm  Password:" label-for="input-3">
        <b-form-input
            id="input-3"
            type="password"
            v-model="form.password_confirmation"
            placeholder="Enter Confirm Password"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },

  methods: {
    onSubmit () {
      axios.post('http://192.168.100.77:8000/api/register', this.form)
      .then((res) => {
        this.$router.push({name: 'users'})
      })
    }
  }
}
</script>
