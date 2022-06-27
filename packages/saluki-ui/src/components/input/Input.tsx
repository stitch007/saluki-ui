import type { PropType, StyleValue } from 'vue'
import { computed, defineComponent, ref } from 'vue'
import { useTheme } from '../../hooks'
import { EyeClose, EyeOpen } from '../_internal/Icon'
import { defaultTabsTheme } from '../tabs'
import { defaultInputTheme } from './theme'

export default defineComponent({
  name: 'SaInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'text' | 'password'>,
      default: 'text',
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    showPasswordOn: String as PropType<'click' | 'mousedown'>,
    maxLength: Number,
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emit: ['update:value'],
  setup(props, { emit }) {
    const prefix = 'sa-input'
    const showPassword = ref(false)

    const value = computed({
      get: () => props.value,
      set: (value: string) => emit('update:value', value),
    })

    const cssVars = computed(() => {
      const theme = useTheme('Input')
      theme && Object.assign(defaultTabsTheme, theme)
      return {
        '--sa-height': defaultInputTheme[`${props.size}Height`],
        '--sa-padding': defaultInputTheme.padding,
        '--sa-color': defaultInputTheme.color,
        '--sa-placeholder-color': defaultInputTheme.placeholderColor,
        '--sa-border': defaultInputTheme.border,
        '--sa-dark-border-color': defaultInputTheme.darkBorderColor,
        '--sa-border-radius': defaultInputTheme.borderRadius,
        '--sa-text-color': defaultInputTheme.textColor,
        '--sa-dark-text-color': defaultInputTheme.darkTextColor,
        '--sa-font-size': defaultInputTheme[`${props.size}FontSize`],
        '--sa-line-height': defaultInputTheme.lineHeight,
        '--sa-focus-box-shadow': defaultInputTheme.focusBoxShadow,
        '--sa-easing': defaultInputTheme.easing,
      } as StyleValue
    })

    const focus = ref(false)

    const onInputFocus = () => {
      if (!props.disabled) {
        focus.value = true
      }
    }

    const onInputBlur = () => {
      if (!props.disabled) {
        focus.value = false
      }
    }

    const onEyeClick = () => {
      if (props.showPasswordOn === 'click') {
        showPassword.value = !showPassword.value
      }
    }

    const onEyeMouseDown = () => {
      if (props.showPasswordOn === 'mousedown') {
        showPassword.value = true
      }
    }

    const onEyeMouseup = () => {
      if (props.showPasswordOn === 'mousedown') {
        showPassword.value = false
      }
    }

    return () => (
      <div
        class={[
          `${prefix}`,
          focus.value && `${prefix}__focus`,
          props.round && `${prefix}__round`,
          props.disabled && `${prefix}__disabled`,
        ]}
        style={cssVars.value}
      >
        <div class={`${prefix}-border`} />
        <div class={`${prefix}-wrapper`}>
          <div class={`${prefix}-content`}>
            <input
              type={props.type === 'text' ? 'text' : showPassword.value ? 'text' : 'password'}
              v-model={value.value}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              maxlength={props.maxLength}
              disabled={props.disabled}
            />
            {
              !value.value?.length
              && <div class={`${prefix}-placeholder`}>
                <sapn>{props.placeholder}</sapn>
              </div>
            }
            {
              props.type === 'password'
              && props.showPasswordOn
              && <div
                class={`${prefix}-eye`}
                onClick={onEyeClick}
                onMousedown={onEyeMouseDown}
                onMouseup={onEyeMouseup}
              >
                {showPassword.value ? <EyeOpen /> : <EyeClose />}
              </div>
            }
          </div>
        </div>
      </div>
    )
  },
})
