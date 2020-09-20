<template>
  <div>
      <h1>Vue editor: https://www.vue2editor.com/</h1>
      <v-card dark class="red--text">
          <vue-editor v-model="content"/>
      </v-card>
      
  </div>
</template>

<script>


export default {
  

  data: () => ({
    content: "<h1>Some initial content</h1>"
  })
};
</script>

<style>

</style>