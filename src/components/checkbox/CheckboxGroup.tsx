import type { PropType } from 'vue'
import { computed, defineComponent, provide } from 'vue'

export interface CheckboxGroupProvide {
  get: () => string[]
  add: (val: string) => boolean
  remove: (val: string) => boolean
}

export default defineComponent({
  name: 'SaCheckboxGroup',
  props: {
    value: {
      type: Object as PropType<string[]>,
      default: [] as string[],
    },
    max: Number,
    min: Number,
  },
  emits: ['update:value'],
  setup(props, { slots, emit }) {
    const prefix = 'sa-checkbox-group'

    const value = computed({
      get: () => props.value,
      set: (value: string[]) => emit('update:value', value),
    })

    const provideObject: CheckboxGroupProvide = {
      get: () => value.value,
      add: (val: string) => {
        if (props.max && value.value.length >= props.max) {
          return false
        }
        value.value.push(val)
        return true
      },
      remove(val: string) {
        if (props.min && value.value.length <= props.min) {
          return false
        }
        const index = value.value.indexOf(val)
        if (index === -1) {
          return false
        }
        value.value.splice(index, 1)
        return true
      },
    }

    provide('sa-checkbox-group', provideObject)

    return () => <div class={`${prefix}`}>
      {slots.default?.()}
    </div>
  },
})
