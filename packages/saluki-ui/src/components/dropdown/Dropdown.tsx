import type { PropType, StyleValue } from 'vue'
import { Transition, computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import { useTheme } from '../../hooks'
import { defaultTabsTheme } from '../tabs'
import { defaultDropdownTheme } from './theme'

export default defineComponent({
  name: 'SaDropdown',
  props: {
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
    top: {
      type: Number,
      default: 8,
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const prefix = 'sa-dropdown'
    const showOptions = ref(false)
    const labelEl = ref<HTMLElement>()
    const optionsEl = ref<HTMLElement>()
    const labelRect = ref<DOMRect>()
    const optionsRect = ref<DOMRect>()

    const cssVars = computed(() => {
      const theme = useTheme('Dropdown')
      theme && Object.assign(defaultTabsTheme, theme)
      return {
        '--sa-top': `${props.top}px`,
        '--sa-color': defaultDropdownTheme.color,
        '--sa-easing': defaultDropdownTheme.easing,
      } as StyleValue
    })

    onMounted(() => {
      if (labelEl.value) {
        labelRect.value = labelEl.value.getBoundingClientRect()
      }
    })

    const inRect = (rect: DOMRect, x: number, y: number) => {
      const { x: rx, y: ry, width: w, height: h } = rect
      return x > rx && x < rx + w && y > ry && y < ry + h
    }

    const onClick = () => {
      showOptions.value = false
    }

    const onMousemove = (e: MouseEvent) => {
      if (labelRect.value) {
        const { x, y } = e
        if (inRect(labelRect.value, x, y)) {
          showOptions.value = true
        } else {
          if (optionsEl.value) {
            optionsRect.value = optionsEl.value.getBoundingClientRect()
          }
          if (optionsRect.value && !inRect(optionsRect.value, x, y + props.top + 1)) {
            showOptions.value = false
          }
        }
      }
    }

    onMounted(() => {
      props.trigger === 'click' && document.addEventListener('click', onClick)
      props.trigger === 'hover' && document.addEventListener('mousemove', onMousemove)
    })

    onBeforeUnmount(() => {
      props.trigger === 'click' && document.removeEventListener('click', onClick)
      props.trigger === 'hover' && document.removeEventListener('mousemove', onMousemove)
    })

    const onLabelClick = (e: MouseEvent) => {
      if (props.trigger === 'click') {
        e.stopPropagation()
        showOptions.value = !showOptions.value
      }
    }

    const onLabelMouseover = () => {
      if (props.trigger === 'hover') {
        showOptions.value = true
      }
    }

    return () => (
      <div
        class={`${prefix}`}
        style={cssVars.value}
      >
        <div
          ref={labelEl}
          class={`${prefix}-label`}
          onClick={onLabelClick}
          onMouseover={onLabelMouseover}
        >
          {slots.default?.()}
        </div>
        <Transition name={'sa-dropdown-options'}>
          {
            showOptions.value && <div ref={optionsEl} class={`${prefix}-options`}>
              {slots.options?.()}
              {props.showArrow && <div class={`${prefix}-triangle`} />}
            </div>
          }
        </Transition>
      </div>
    )
  },
})
