import { Default } from '../theme'

export interface CardTheme {
  smallPadding: string
  mediumPadding: string
  largePadding: string
  color: string
  darkBgColor: string
  borderColor: string
  darkBorderColor: string
  smallBorderRadius: string
  mediumBorderRadius: string
  largeBorderRadius: string
  textColor: string
  darkTextColor: string
  titleTextColor: string
  darkTitleTextColor: string
  smallFontSize: string
  mediumFontSize: string
  largeFontSize: string
  smallTitleFontSize: string
  mediumTitleFontSize: string
  largeTitleFontSize: string
  titleFontWeight: string
  lineHeight: string
  boxShadow: string
  darkBoxShadow: string
}

export const defaultCardTheme: CardTheme = {
  smallPadding: '12px 16px',
  mediumPadding: '20px 24px',
  largePadding: '24px 32px',
  color: '#fff',
  darkBgColor: Default.DARK_BG_COLOR,
  borderColor: '#efeff5',
  darkBorderColor: '#3e4c5a',
  smallBorderRadius: '6px',
  mediumBorderRadius: '9px',
  largeBorderRadius: '12px',
  textColor: '#333639',
  darkTextColor: 'rgba(255, 255, 255, 0.8)',
  titleTextColor: '#1f2225',
  darkTitleTextColor: 'rgba(255, 255, 255, 0.9)',
  smallFontSize: '14px',
  mediumFontSize: '14px',
  largeFontSize: '14px',
  smallTitleFontSize: '16px',
  mediumTitleFontSize: '18px',
  largeTitleFontSize: '18px',
  titleFontWeight: '500',
  lineHeight: '1.5',
  boxShadow: '0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)',
  darkBoxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.24), 0 3px 6px 0 rgba(0, 0, 0, 0.18), 0 5px 12px 4px rgba(0, 0, 0, 0.12)',
}
