import type { PropType, StyleValue } from 'vue'
import { computed, defineComponent, inject, ref } from 'vue'
import { Check } from '../_internal/Icon'
import type { GlobalTheme } from '../theme'
import { defaultCheckboxTheme } from './theme'
import type { CheckboxGroupProvide } from './CheckboxGroup'

export default defineComponent({
  name: 'SaCheckbox',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    value: String,
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emit: ['update:checked'],
  setup(props, { slots, emit }) {
    const prefix = 'sa-checkbox'

    const group = inject('sa-checkbox-group') as CheckboxGroupProvide | undefined

    const checked = computed({
      get: () => {
        if (group && props.value) {
          return group.get().includes(props.value)
        }
        return props.checked
      },
      set: (value: boolean) => {
        if (group && props.value) {
          if (value) {
            group.add(props.value)
          } else {
            group.remove(props.value)
          }
        }
        emit('update:checked', value)
      },
    })

    const cssVars = computed(() => {
      type Key = keyof typeof defaultCheckboxTheme
      const checkboxTheme = (inject('sa-config-provider', {}) as GlobalTheme).Checkbox
      for (const key in checkboxTheme) {
        defaultCheckboxTheme[key as Key] = checkboxTheme[key as Key] as string
      }
      return {
        '--sa-size': defaultCheckboxTheme[`${props.size}Size`],
        '--sa-label-padding': defaultCheckboxTheme.labelPadding,
        '--sa-border': defaultCheckboxTheme.border,
        '--sa-dark-border-color': defaultCheckboxTheme.darkBorderColor,
        '--sa-border-radius': defaultCheckboxTheme.borderRadius,
        '--sa-font-size': defaultCheckboxTheme[`${props.size}FontSize`],
        '--sa-color': defaultCheckboxTheme.color,
        '--sa-checked-color': defaultCheckboxTheme.checkedColor,
        '--sa-line-height': defaultCheckboxTheme.lineHeight,
        '--sa-focus-box-shadow': defaultCheckboxTheme.focusBoxShadow,
        '--sa-easing': defaultCheckboxTheme.easing,
      } as StyleValue
    })

    const onCheckboxClick = () => {
      if (!props.disabled) {
        checked.value = !checked.value
      }
    }

    const focus = ref(false)

    const onCheckboxFocus = () => {
      if (!props.disabled) {
        focus.value = true
      }
    }

    const onCheckboxBlur = () => {
      if (!props.disabled) {
        focus.value = false
      }
    }

    return () => (
      <div
        class={[
          `${prefix}`,
          checked.value && `${prefix}__checked`,
          focus.value && `${prefix}__focus`,
          props.disabled && `${prefix}__disabled`,
        ]}
        style={cssVars.value}
        onClick={onCheckboxClick}
        onFocus={onCheckboxFocus}
        onBlur={onCheckboxBlur}
        tabindex={0}
      >
        <div class={`${prefix}-box-wrapper`}>
          <div class={`${prefix}-box`}>
            <div class={`${prefix}-box-icon`}>
              <Check />
            </div>
            <div class={`${prefix}-box-border`} />
          </div>
        </div>
        <span class={`${prefix}-label`}>
          {slots.default?.()}
        </span>
      </div>
    )
  },
})
