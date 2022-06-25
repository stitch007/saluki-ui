import type { PropType } from 'vue'
import { defineComponent, provide } from 'vue'
import type { GlobalTheme } from '../theme'

export default defineComponent({
  name: 'SaConfig',
  props: {
    theme: Object as PropType<GlobalTheme>,
  },
  setup(props, { slots }) {
    const prefix = 'sa-config'

    props.theme && provide('sa-config-provider', props.theme)

    return () => (
      <div class={`${prefix}`}>
        {slots.default?.()}
      </div>
    )
  },
})
