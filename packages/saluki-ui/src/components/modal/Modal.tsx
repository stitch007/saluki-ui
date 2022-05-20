import type { StyleValue } from 'vue'
import { Transition, computed, defineComponent, inject, watchEffect } from 'vue'
import { useMousePosition } from '../../composables'
import type { GlobalTheme } from '../theme'
import { defaultModalTheme } from './theme'

export default defineComponent({
  name: 'SaModal',
  props: {
    show: Boolean,
    maskClosable: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 999,
    },
  },
  emits: ['update:show'],
  setup(props, { slots, emit }) {
    const prefix = 'sa-modal'

    const { x, y } = useMousePosition()

    const show = computed({
      get: () => props.show,
      set: (value: boolean) => emit('update:show', value),
    })

    const cssVars = computed(() => {
      type Key = keyof typeof defaultModalTheme
      const modalTheme = (inject('sa-config-provider', {}) as GlobalTheme).Modal
      for (const key in modalTheme) {
        defaultModalTheme[key as Key] = modalTheme[key as Key] as string
      }
      return {
        '--sa-mask-color': defaultModalTheme.maskColor,
        '--sa-x': `${x.value - (document.documentElement.clientWidth / 2)}px`,
        '--sa-y': `${y.value - (document.documentElement.clientHeight / 2)}px`,
        'z-index': props.zIndex,
      } as StyleValue
    })

    const onMaskClick = () => {
      if (props.maskClosable) {
        show.value = false
      }
    }

    const preventDefault = (e: Event) => {
      e.preventDefault()
    }

    watchEffect(() => {
      const style = 'overflow: hidden; height: 100%;'
      if (show.value) {
        document.body.style.cssText += style
      } else {
        document.body.style.cssText = document.body.style.cssText.replace(style, '')
      }
    })

    const stopPropagation = (e: Event) => {
      e.stopPropagation()
    }

    return () => (
      <Transition name={'sa-modal'}>
        {
          show.value && (
            <div
              class={[`${prefix}`]}
              style={cssVars.value}
              onClick={onMaskClick}
              onTouchmove={preventDefault}
            >
              <div onClick={stopPropagation}>
                {slots.default?.()}
              </div>
            </div>
          )
        }
      </Transition>
    )
  },
})
