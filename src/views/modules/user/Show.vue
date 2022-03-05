<template>
  <div>
    <h1>Show Page</h1>

    <router-link :to="{ name: 'users' }">BacK</router-link>
    <b-card>
      <div>
        <strong>Name: </strong> {{  user.name }}
      </div>
      <div>
        <strong>Email: </strong> {{ user.email }}
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created () {
    const userId = this.$route.params.id

    axios.get('http://192.168.100.77:8000/api/users/' + userId)
    .then((res) => {
      this.user = res.data
    })
  },

  data () {
    return {
      user: ''
    }
  }
}
</script>
