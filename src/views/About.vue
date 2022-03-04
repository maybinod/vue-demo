<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Form>
      <template #button>
        <button>Test123</button>
      </template>
    </Form>
  </div>
</template>

<script>
import Form from '@/components/Form'
export default {
  components: {
    Form
  }
}
</script>
