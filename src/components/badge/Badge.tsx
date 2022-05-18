import type { PropType, StyleValue } from 'vue'
import { computed, defineComponent, inject } from 'vue'
import type { GlobalTheme } from '../theme'
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
      type Key = keyof typeof defaultBadgeTheme
      const badgeTheme = (inject('sa-config-provider', {}) as GlobalTheme).Badge
      for (const key in badgeTheme) {
        defaultBadgeTheme[key as Key] = badgeTheme[key as Key] as string
      }
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
