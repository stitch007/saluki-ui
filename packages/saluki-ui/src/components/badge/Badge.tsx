import type { PropType, StyleValue } from 'vue'
import { computed, defineComponent } from 'vue'
import { useTheme } from '../../hooks'
import { defaultTabsTheme } from '../tabs'
import { defaultBadgeTheme } from './theme'

export default defineComponent({
  name: 'SaBadge',
  props: {
    value: [String, Number] as PropType<string | number>,
    color: String,
    max: {
      type: Number,
      default: 9,
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const prefix = 'sa-badge'

    const cssVars = computed(() => {
      const theme = useTheme('Badge')
      theme && Object.assign(defaultTabsTheme, theme)
      return {
        '--sa-color': props.color ?? defaultBadgeTheme.color,
        '--sa-text-color': defaultBadgeTheme.textColor,
        '--sa-font-size': defaultBadgeTheme.fontSize,
      } as StyleValue
    })

    const supValue = computed(() => {
      if (!Number.isFinite(props.value)) {
        return props.value as string
      }
      return (props.value as number) > props.max ? `${props.max}+` : props.value as string
    })

    return () => (
      <div
        class={[`${prefix}`, props.dot && `${prefix}__dot`]}
        style={cssVars.value}
      >
        {slots.default?.()}
        <sup class={[`${prefix}-sup`]}>
          {!props.dot && supValue.value}
        </sup>
      </div>
    )
  },
})
