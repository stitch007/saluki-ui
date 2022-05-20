import type { PropType, StyleValue } from 'vue'
import { computed, defineComponent, inject, ref } from 'vue'
import type { GlobalTheme } from '../theme'
import { defaultSwitchTheme } from './theme'

export default defineComponent({
  name: 'SaSwitch',
  props: {
    value: Boolean,
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    disabled: Boolean,
    round: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const prefix = 'sa-switch'

    const value = computed({
      get: () => props.value,
      set: (value: boolean) => emit('update:value', value),
    })

    const cssVars = computed(() => {
      type Key = keyof typeof defaultSwitchTheme
      const switchTheme = (inject('sa-config-provider', {}) as GlobalTheme).Switch
      for (const key in switchTheme) {
        defaultSwitchTheme[key as Key] = switchTheme[key as Key] as string
      }
      return {
        '--sa-height': defaultSwitchTheme[`${props.size}Height`],
        '--sa-width': defaultSwitchTheme[`${props.size}Width`],
        '--sa-button-width': defaultSwitchTheme[`${props.size}ButtonWidth`],
        '--sa-border-radius': defaultSwitchTheme.borderRadius,
        '--sa-offset': defaultSwitchTheme.offset,
        '--sa-color': defaultSwitchTheme.color,
        '--sa-active-color': defaultSwitchTheme.activeColor,
        '--sa-button-color': defaultSwitchTheme.buttonColor,
        '--sa-button-box-shadow': defaultSwitchTheme.buttonBoxShadow,
        '--sa-focus-box-shadow': defaultSwitchTheme.focusBoxShadow,
        '--sa-easing': defaultSwitchTheme.easing,
      } as StyleValue
    })

    const onSwitchClick = () => {
      if (!props.disabled) {
        value.value = !value.value
      }
    }

    const focus = ref(false)

    const onSwitchFocus = () => {
      if (!props.disabled) {
        focus.value = true
      }
    }

    const onSwitchBlur = () => {
      if (!props.disabled) {
        focus.value = false
      }
    }

    return () => (
      <div
        class={[
          `${prefix}`,
          value.value && `${prefix}__active`,
          props.disabled && `${prefix}__disabled`,
          props.round && `${prefix}__round`,
          focus.value && `${prefix}__focus`,
        ]}
        style={cssVars.value}
        onClick={onSwitchClick}
        onFocus={onSwitchFocus}
        onBlur={onSwitchBlur}
        tabindex={0}
      >
        <div class={`${prefix}-wrapper`}>
          <div class={`${prefix}-button`}></div>
        </div>
      </div>
    )
  },
})
