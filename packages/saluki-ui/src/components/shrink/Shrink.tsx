import type { StyleValue } from 'vue'
import { computed, defineComponent } from 'vue'
import { Default } from '../theme'

export default defineComponent({
  name: 'SaShrink',
  props: {
    keepActive: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: String,
      default: '4px 12px',
    },
    color: {
      type: String,
      default: Default.COLOR,
    },
    textColor: {
      type: String,
      default: '#fff',
    },
    duration: {
      type: Number,
      default: 300,
    },
    borderRadiusFrom: {
      type: String,
      default: '2px',
    },
    borderRadiusTo: {
      type: String,
      default: '12px',
    },
    easing: {
      type: String,
      default: 'ease-in-out',
    },
  },
  setup(props, { slots }) {
    const prefix = 'sa-shrink'

    const cssVars = computed(() => {
      return {
        '--sa-padding': props.padding,
        '--sa-color': props.color,
        '--sa-text-color': props.textColor,
        '--sa-border-radius-from': props.borderRadiusFrom,
        '--sa-border-radius-to': props.borderRadiusTo,
        '--sa-duration': `${props.duration}ms`,
        '--sa-easing': props.easing,
      } as StyleValue
    })

    return () => (
      <div class={[`${prefix}`, props.keepActive && `${prefix}__keep`]} style={cssVars.value}>
        {slots.default?.()}
      </div>
    )
  },
})
