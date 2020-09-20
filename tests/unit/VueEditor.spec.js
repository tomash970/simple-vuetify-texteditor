  import { shallowMount } from '@vue/test-utils'
  import VueEditor from '@/components/VueEditor.vue'
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  import Vue2Editor from "vue2-editor";
  
  describe('VueEditor.vue', () => {
    let wrapper;
    
    beforeEach(()=>{
        Vue.use(Vue2Editor);
        Vue.use(Vuetify);
        
        wrapper = shallowMount(VueEditor);
      });

    it('is sane', () => {
      return
    });

    it('renders text', () => {
        expect(wrapper.html()).toContain("Vue editor");
    })
  })