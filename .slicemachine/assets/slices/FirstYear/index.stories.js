import MyComponent from '../../../../slices/FirstYear';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FirstYear'
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
      mock: {"variation":"default","name":"Default","slice_type":"first_year","items":[],"primary":{"meses":[{"type":"paragraph","text":"Aliqua cupidatat occaecat velit ad sunt sint sint aute aliquip adipisicing irure. Eiusmod reprehenderit magna tempor excepteur commodo ad officia. Mollit tempor aute dolore velit elit commodo ad adipisicing minim adipisicing.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
