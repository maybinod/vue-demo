<template>
  <div>
    <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
    >
      <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          placeholder="Enter email"
          required
      ></b-form-input>
    </b-form-group>

    <b-form-group
        id="input-group-1"
        label="Email Password:"
        label-for="input-1"
    >
      <b-form-input
          id="input-1"
          v-model="user.password"
          type="password"
          placeholder="Enter Password"
          required
      ></b-form-input>
    </b-form-group>

    <button @click="onLoginClick" class="btn btn-success">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    onLoginClick () {
      axios.post('http://192.168.100.77:8000/api/login', this.user)
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('user', res.data.user)

        this.$router.push({ name: 'users' })
      })
      .catch(() => {
        alert('Opps.')
      })
    }
  }
}
</script>
