import { Default } from '../theme'

export interface InputTheme {
  smallHeight: string
  mediumHeight: string
  largeHeight: string
  padding: string
  color: string
  border: string
  darkBorderColor: string
  borderRadius: string
  textColor: string
  darkTextColor: string
  placeholderColor: string
  smallFontSize: string
  mediumFontSize: string
  largeFontSize: string
  lineHeight: string
  focusBoxShadow: string
  easing: string
}

export const defaultInputTheme: InputTheme = {
  smallHeight: '28px',
  mediumHeight: '34px',
  largeHeight: '40px',
  padding: '0 12px',
  color: Default.COLOR,
  border: '1px solid #e0e0e6',
  darkBorderColor: 'rgba(255, 255, 255, 0.24)',
  borderRadius: '3px',
  textColor: '#333639',
  darkTextColor: 'rgba(255, 255, 255, 0.8)',
  placeholderColor: '#c2c2c2',
  smallFontSize: '14px',
  mediumFontSize: '14px',
  largeFontSize: '15px',
  lineHeight: '1.5',
  focusBoxShadow: `0 0 0 2px ${Default.COLOR}4E`,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
}
