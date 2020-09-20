  import { mount } from '@vue/test-utils'
  import VueEditor from '@/components/VueEditor.vue'
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  import Vue2Editor from "vue2-editor";
  
  describe('VueEditor.vue', () => {
    let wrapper;

    beforeEach(()=>{
        Vue.use(Vuetify);
        Vue.use(Vue2Editor);
        wrapper = mount(VueEditor);
      });

    // it('is sane', () => {
    //   return
    // });

    it('renders text', () => {
        expect(wrapper.find('h1').includes("Vue editor")).toBe(true);
    })
  })