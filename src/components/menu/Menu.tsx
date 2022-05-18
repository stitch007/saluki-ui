import type { PropType, StyleValue, VNodeChild } from 'vue'
import { Transition, computed, defineComponent, inject, ref } from 'vue'
import { ArrowRight } from '../_internal/Icon'
import type { GlobalTheme } from '../theme'
import { defaultMenuTheme } from './theme'

export interface MenuOptions {
  key: number
  render: () => VNodeChild
  children?: MenuOptions[]
}

const Menu = defineComponent({
  name: 'SaMenu',
  props: {
    options: {
      type: Object as PropType<MenuOptions[]>,
      require: true,
    },
    indent: Number,
    showArrow: {
      type: Boolean,
      default: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const prefix = 'sa-menu'
    const openOptionsKey = ref<number[]>([])

    const cssVars = computed(() => {
      type Key = keyof typeof defaultMenuTheme
      const menuTheme = (inject('sa-config-provider', {}) as GlobalTheme).Menu
      for (const key in menuTheme) {
        defaultMenuTheme[key as Key] = menuTheme[key as Key] as string
      }
      return {
        '--sa-indent': props.indent
          ? `${props.depth * props.indent}px`
          : `calc(${props.depth}*${defaultMenuTheme.indent})`,
        '--sa-arrow-size': defaultMenuTheme.arrowSize,
        '--sa-arrow-color': defaultMenuTheme.arrowColor,
        '--sa-dark-arrow-color': defaultMenuTheme.darkArrowColor,
      } as StyleValue
    })

    const isOpen = (key: number) => {
      return openOptionsKey.value.includes(key)
    }

    const onItemClick = (options: MenuOptions) => {
      if (options.children && options.children.length) {
        const index = openOptionsKey.value.indexOf(options.key)
        if (index > -1) {
          openOptionsKey.value.splice(index, 1)
        } else {
          openOptionsKey.value.push(options.key)
        }
      }
    }

    const onSubmenuEnter = (el: HTMLElement) => {
      el.style.height = 'auto'
      const finalHeight = window.getComputedStyle(el).height
      el.style.height = '0px'
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight // 触发重排
      el.style.height = finalHeight
    }

    const onSubmenuAfterEnter = (el: HTMLElement) => {
      el.style.height = 'auto'
    }

    const onSubmenuLeave = (el: HTMLElement) => {
      el.style.height = window.getComputedStyle(el).height
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight
      el.style.height = '0px'
    }

    return () => (
      <div
        class={`${prefix}`}
        style={cssVars.value}
      >
        {
          props.options?.map((option) => {
            return <div key={option.key} class={`${prefix}-submenu`}>
              <div
                class={`${prefix}-item`}
                onClick={() => onItemClick(option)}
              >
                {<div>{option?.render()}</div>}
                {
                  props.showArrow
                  && option.children
                  && <div class={[`${prefix}-arrow`, isOpen(option.key) && `${prefix}-arrow__open`]}>
                    <ArrowRight />
                  </div>
                }
              </div>
              {
                <Transition
                  onEnter={(el) => { onSubmenuEnter(el as HTMLElement) }}
                  onAfterEnter={(el) => { onSubmenuAfterEnter(el as HTMLElement) }}
                  onLeave={(el) => { onSubmenuLeave(el as HTMLElement) }}
                >
                  {
                    option.children
                    && isOpen(option.key)
                    && <div class={`${prefix}-submenu`}>
                      <Menu
                        key={option.key}
                        options={option.children}
                        showArrow={props.showArrow}
                        depth={props.depth + 1}
                      />
                    </div>
                  }
                </Transition>
              }
            </div>
          })
        }
      </div>
    )
  },
})

export default Menu
