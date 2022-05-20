import { Default } from '../theme'

export interface CheckboxTheme {
  smallSize: string
  mediumSize: string
  largeSize: string
  labelPadding: string
  border: string
  darkBorderColor: string
  borderRadius: string
  color: string
  checkedColor: string
  smallFontSize: string
  mediumFontSize: string
  largeFontSize: string
  lineHeight: string
  focusBoxShadow: string
  easing: string
}

export const defaultCheckboxTheme: CheckboxTheme = {
  smallSize: '14px',
  mediumSize: '16px',
  largeSize: '18px',
  labelPadding: '0 8px',
  border: '1px solid #e0e0e6',
  darkBorderColor: 'rgba(255, 255, 255, 0.24)',
  borderRadius: '2px',
  color: '#fff',
  checkedColor: Default.COLOR,
  smallFontSize: '14px',
  mediumFontSize: '14px',
  largeFontSize: '15px',
  lineHeight: '1.5',
  focusBoxShadow: `0 0 0 2px ${Default.COLOR}4E`,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
}
