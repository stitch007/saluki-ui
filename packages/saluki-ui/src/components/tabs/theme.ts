import { Default } from '../theme'

export interface TabsTheme {
  smallPanelPadding: string
  mediumPanelPadding: string
  largePanelPadding: string
  smallTabPadding: string
  mediumTabPadding: string
  largeTabPadding: string
  shrinkPadding: string
  smallTabGap: string
  mediumTabGap: string
  largeTabGap: string
  border: string
  color: string
  shrinkColor: string
  smallTabFontSize: string
  mediumTabFontSize: string
  largeTabFontSize: string
  shrinkTextColor: string
  tabFontWeight: string
}

export const defaultTabsTheme: TabsTheme = {
  smallPanelPadding: '8px 0 0',
  mediumPanelPadding: '12px 0 0',
  largePanelPadding: '16px 0 0',
  smallTabPadding: '4px 0',
  mediumTabPadding: '6px 0',
  largeTabPadding: '10px 0',
  shrinkPadding: '4px 12px',
  smallTabGap: '12px',
  mediumTabGap: '24px',
  largeTabGap: '36px',
  border: '1px solid #efeff5',
  color: Default.COLOR,
  shrinkColor: Default.COLOR,
  smallTabFontSize: '14px',
  mediumTabFontSize: '14px',
  largeTabFontSize: '16px',
  shrinkTextColor: '#fff',
  tabFontWeight: '400',
}
