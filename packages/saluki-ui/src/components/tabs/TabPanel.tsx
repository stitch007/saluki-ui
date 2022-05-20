import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SaTabPanel',
  props: {
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { slots }) {
    return () => slots.default?.()
  },
})
