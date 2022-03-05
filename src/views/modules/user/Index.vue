<template>
  <div>
    <div class="d-flex justify-content-between">
      <router-link :to="{ name: 'user-create' }" class="btn btn-primary mb-2" v-if="!isLoggedIn">Sign Up</router-link>
      <a @click="onLogout" class="btn btn-primary mb-2" v-else>Log out</a>
    </div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>S.N</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users">
        <td>{{ ++index }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <router-link :to="{ name: 'user', params: { id: user.id }}" class="btn btn-info">Show</router-link>
          <a @click="onDelete(user)" class="btn btn-danger ml-2">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>

    <b-modal
        @ok="deleteUser"
        v-model="showModal"
    >
      Are you sure you want to delete?
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created () {
    this.getUsers()
  },

  data () {
    return {
      users: [],
      showModal: false,
      user: ''
    }
  },

  computed: {
    isLoggedIn () {
      return localStorage.getItem('access_token')
    }
  },

  methods: {
    onDelete (user) {
      this.user = user
      this.showModal = true
    },

    getUsers () {
      axios.get('http://192.168.100.77:8000/api/users')
          .then((res) => {
            this.users = res.data
          })
          .catch((error) => {
            console.log(error)
          })
    },

    deleteUser () {
      axios.delete('http://192.168.100.77:8000/api/users/' + this.user.id)
      .then((res) => {
        this.getUsers()
        this.showModal = false
        this.user = ''
      })
    },

    onLogout () {
      const token = localStorage.getItem('access_token')
      axios.post('http://192.168.100.77:8000/api/signout', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(() => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>
