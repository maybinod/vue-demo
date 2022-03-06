const user = {
  computed: {
    isLoggedIn () {
      return localStorage.getItem('access_token')
    }
  }
}

export default user

