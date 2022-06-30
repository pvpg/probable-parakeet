import MyComponent from '../../../../slices/FormSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FormSection'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"form_section","items":[],"primary":{"title":[{"type":"heading1","text":"Deploy collaborative partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Lorem aute non occaecat labore ea excepteur enim tempor laboris cillum dolor dolore qui reprehenderit qui. Pariatur consectetur cupidatat ut magna incididunt voluptate culpa duis dolore consectetur esse officia occaecat laboris qui.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _NoTitle = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"noTitle","name":"noTitle","slice_type":"form_section","items":[],"primary":{"description":[{"type":"paragraph","text":"Ea enim duis proident duis mollit esse sit ut excepteur id sint. Anim sunt cupidatat nulla incididunt fugiat enim fugiat.","spans":[]}]},"id":"_NoTitle"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_NoTitle.storyName = 'noTitle'
