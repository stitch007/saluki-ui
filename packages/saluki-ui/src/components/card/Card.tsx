import type { PropType, StyleValue } from 'vue'
import { computed, defineComponent } from 'vue'
import { useTheme } from '../../hooks'
import { defaultTabsTheme } from '../tabs'
import { defaultCardTheme } from './theme'

export default defineComponent({
  name: 'SaCard',
  props: {
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    shadow: {
      type: String as PropType<'none' | 'hover' | 'always'>,
      default: 'none',
    },
    bordered: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const prefix = 'sa-card'

    const cssVars = computed(() => {
      const theme = useTheme('Card')
      theme && Object.assign(defaultTabsTheme, theme)
      return {
        '--sa-padding': defaultCardTheme[`${props.size}Padding`],
        '--sa-color': defaultCardTheme.color,
        '--sa-dark-bg-color': defaultCardTheme.darkBgColor,
        '--sa-border-color': defaultCardTheme.borderColor,
        '--sa-dark-border-color': defaultCardTheme.darkBorderColor,
        '--sa-border-radius': defaultCardTheme[`${props.size}BorderRadius`],
        '--sa-text-color': defaultCardTheme.textColor,
        '--sa-dark-text-color': defaultCardTheme.darkTextColor,
        '--sa-title-color': defaultCardTheme.titleTextColor,
        '--sa-dark-title-color': defaultCardTheme.darkTitleTextColor,
        '--sa-font-size': defaultCardTheme[`${props.size}FontSize`],
        '--sa-title-font-size': defaultCardTheme[`${props.size}TitleFontSize`],
        '--sa-title-font-weight': defaultCardTheme.titleFontWeight,
        '--sa-line-height': defaultCardTheme.lineHeight,
        '--sa-box-shadow': defaultCardTheme.boxShadow,
        '--sa-dark-box-shadow': defaultCardTheme.darkBoxShadow,
      } as StyleValue
    })

    return () => (
      <div
        class={[
          `${prefix}`,
          `${prefix}-${props.size}`,
          props.shadow !== 'none' && `${prefix}-shadow-${props.shadow}`,
          !props.bordered && `${prefix}__bordered`,
        ]}
        style={cssVars.value}
      >
        {
          (slots.header || slots['header-extra'])
          && <div class={[`${prefix}-header`]}>
            {slots.header && <div class={[`${prefix}-header-main`]}>{slots.header?.()}</div>}
            {slots['header-extra'] && <div class={[`${prefix}-header-extra`]}>{slots['header-extra']?.()}</div>}
          </div>
        }
        <div class={[`${prefix}-content`]}>
          {slots.default?.()}
        </div>
        {slots.footer && <div class={[`${prefix}-footer`]}>{slots.footer?.()}</div>}
      </div>
    )
  },
})
