import type { PropType, StyleValue } from 'vue'
import { computed, defineComponent, inject, ref } from 'vue'
import { Loading } from '../_internal/Icon'
import type { WaveRef } from '../wave'
import { SaWave } from '../wave'
import type { GlobalTheme } from '../theme'
import { defaultButtonTheme } from './theme'

export default defineComponent({
  name: 'SaButton',
  props: {
    type: {
      type: String as PropType<'default' | 'ghost' | 'dashed'>,
      default: 'default',
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    color: {
      type: String,
    },
    textColor: {
      type: String,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const prefix = 'sa-button'
    const waveEl = ref<WaveRef>()

    const cssVars = computed(() => {
      type Key = keyof typeof defaultButtonTheme
      const buttonTheme = (inject('sa-config-provider', {}) as GlobalTheme).Button
      for (const key in buttonTheme) {
        defaultButtonTheme[key as Key] = buttonTheme[key as Key] as string
      }
      return {
        '--sa-height': defaultButtonTheme[`${props.size}Height`],
        '--sa-width': props.circle ? defaultButtonTheme[`${props.size}Height`] : 'initial',
        '--sa-padding': defaultButtonTheme[`${props.size}Padding`],
        '--sa-color': props.color ?? defaultButtonTheme.defaultColor,
        '--sa-border': defaultButtonTheme.border,
        '--sa-border-radius': defaultButtonTheme.borderRadius,
        '--sa-font-size': defaultButtonTheme[`${props.size}FontSize`],
        '--sa-text-color': props.textColor ?? defaultButtonTheme[`${props.type}TextColor`],
      } as StyleValue
    })

    const onButtonClick = () => {
      if (!props.disabled && !props.loading) {
        waveEl.value && waveEl.value.play()
      }
    }

    return () => (
      <button
        class={[
          `${prefix}`,
          `${prefix}-${props.type.toString()}`,
          `${prefix}-${props.size.toString()}`,
          props.round && `${prefix}-round`,
          props.circle && `${prefix}-circle`,
          props.disabled && `${prefix}__disabled`,
          props.loading && `${prefix}__loading`,
        ]}
        style={cssVars.value}
        onClick={onButtonClick}
        disabled={props.disabled || props.loading}
      >
        {props.loading && <div class={`${prefix}-icon`}><Loading /></div>}
        <div class={[`${prefix}-content`]}>{slots.default?.()}</div>
        <SaWave ref={waveEl} color={props.color ?? defaultButtonTheme.defaultColor} />
      </button>
    )
  },
})
