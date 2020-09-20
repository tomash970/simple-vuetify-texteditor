<template>
  <v-app>
    <div>
      <TextEditor/>
      <br>
      <v-divider></v-divider>
      <Tiptap/>
      <br>
      <v-divider></v-divider>
      <VueEditor/>
      <br>
      <v-divider></v-divider>
    </div>
    
     
    
  </v-app>
</template>

<script>
import TextEditor from './components/TextEditor';
import Tiptap from './components/Tiptap';
import VueEditor from './components/VueEditor';

export default {
  name: 'App',

  components: {
    TextEditor,
    Tiptap,
    VueEditor,
  },

  data: () => ({
    //
  }),
};
</script>
