import type { ComponentPublicInstance, PropType, StyleValue, VNode } from 'vue'
import { KeepAlive, computed, defineComponent, inject, ref, watchEffect } from 'vue'
import { useHorizontalScroll } from '../../composables'
import { SaShrink } from '../shrink'
import type { GlobalTheme } from '../theme'
import { defaultTabsTheme } from './theme'

export default defineComponent({
  name: 'SaTabs',
  props: {
    active: {
      type: Number,
      default: 0,
    },
    type: {
      type: String as PropType<'bar' | 'shrink'>,
      default: 'bar',
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
  },
  emits: ['update:active'],
  setup(props, { slots, emit }) {
    const prefix = 'sa-tabs'

    const active = computed({
      get: () => props.active,
      set: (value: number) => emit('update:active', value),
    })

    const cssVars = computed(() => {
      type Key = keyof typeof defaultTabsTheme
      const tabsTheme = (inject('sa-config-provider', {}) as GlobalTheme).Tabs
      for (const key in tabsTheme) {
        defaultTabsTheme[key as Key] = tabsTheme[key as Key] as string
      }
      const isShrink = props.type === 'shrink'
      return {
        '--sa-panel-padding': defaultTabsTheme[`${props.size}PanelPadding`],
        '--sa-tab-padding': !isShrink ? defaultTabsTheme[`${props.size}TabPadding`] : undefined,
        '--sa-tab-gap': defaultTabsTheme[`${props.size}TabGap`],
        '--sa-shrink-padding': isShrink ? defaultTabsTheme.shrinkPadding : undefined,
        '--sa-border': !isShrink ? defaultTabsTheme.border : undefined,
        '--sa-color': defaultTabsTheme.color,
        '--sa-shrink-color': isShrink ? defaultTabsTheme.shrinkColor : undefined,
        '--sa-tab-font-size': defaultTabsTheme[`${props.size}TabFontSize`],
        '--sa-tab-font-weight': defaultTabsTheme.tabFontWeight,
        '--sa-shrink-text-color': isShrink ? defaultTabsTheme.shrinkTextColor : undefined,
      } as StyleValue
    })

    const { el: navEl } = useHorizontalScroll()
    const tabEl = ref<HTMLElement>()
    const indicatorEl = ref<HTMLElement>()

    watchEffect(() => {
      if (tabEl.value && navEl.value && indicatorEl.value) {
        const rect = tabEl.value.getBoundingClientRect()
        const left = navEl.value.getBoundingClientRect().left
        const scrollLeft = navEl.value.scrollLeft
        indicatorEl.value.style.width = `${rect.width}px`
        indicatorEl.value.style.left = `${rect.left - left + scrollLeft}px`
      }
    })

    const indicatorChange = (el: Element | ComponentPublicInstance | null, node: VNode) => {
      const current = slots.default?.()[active.value]
      if (current && current.props?.name === node.props?.name) {
        tabEl.value = el as HTMLElement
      }
    }

    const onTabTabClick = (index: number) => {
      active.value = index
    }

    return () => (
      <div
        class={`${prefix}`}
        style={cssVars.value}
      >
        <div ref={navEl} class={`${prefix}-nav`}>
          {slots.prefix && slots.prefix()}
          {
            <div class={`${prefix}-nav-content`}>
              {
                slots.default && slots.default().map((item, index) => {
                  return (
                    <div
                      key={index}
                      class={[
                        `${prefix}-label`,
                        props.active === index && `${prefix}-label__active`,
                        (item.props?.disabled || item.props?.disabled === '') && `${prefix}-label__disabled`,
                      ]}
                      ref={el => indicatorChange(el, item)}
                      onClick={() => onTabTabClick(index)}
                    >
                      {
                        props.type === 'bar'
                          ? <span>{item.props?.name}</span>
                          : <SaShrink
                            keepActive={props.active === index}
                            padding={'var(--sa-shrink-padding)'}
                            color={'var(--sa-shrink-color)'}
                            textColor={'var(--sa-shrink-text-color)'}
                          >
                            {item.props?.name}
                          </SaShrink>
                      }
                    </div>
                  )
                })
              }
            </div>
          }
          {slots.suffix && slots.suffix()}
          {props.type === 'bar' && <div ref={indicatorEl} class={`${prefix}-indicator`} />}
        </div>
        <div class={`${prefix}-panel`}>
          <KeepAlive>
            {slots.default?.()[active.value]}
          </KeepAlive>
        </div>
      </div>
    )
  },
})
