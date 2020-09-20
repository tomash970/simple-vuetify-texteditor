<template>
  <v-container>
    <v-card dark max-width="768px">
      <div >
        <v-btn class="font-weight-bold" tile>B</v-btn>
        <v-btn class="font-italic" tile>I</v-btn>
        <v-btn  class="text-decoration-underline" tile>U</v-btn>
        <v-btn  class="text-decoration-line-through" tile>T</v-btn>
        <v-btn><v-icon>mdi-format-list-bulleted</v-icon></v-btn>
        <v-btn><v-icon>mdi-format-list-numbered</v-icon></v-btn>
        <v-btn tile>P</v-btn>
        <v-btn tile>H1</v-btn>
        <v-btn tile>H2</v-btn>
        <v-btn tile>H3</v-btn>
        <v-btn tile>H4</v-btn>
        <v-btn tile>B</v-btn>
      </div>
      <v-card-text >
        <div contenteditable="true" >
          This text can be edited by the user. <h1>Paragraph changed!</h1><p>To je to!</p>
        </div>
      </v-card-text>
    </v-card>
    
  </v-container>
</template>

<script>
  export default {
    name: 'TextEditor',

    data: () => ({
      text: "<h1>Paragraph changed!</h1><p>To je to!</p>"
    }),
    methods: {
      transform (type) {
        console.log(type)
      },
      
    }
    
  }
</script>
