import { Default } from '../theme'

export interface ButtonTheme {
  smallHeight: string
  mediumHeight: string
  largeHeight: string
  smallPadding: string
  mediumPadding: string
  largePadding: string
  defaultColor: string
  ghostColor: string
  dashedColor: string
  border: string
  borderRadius: string
  smallFontSize: string
  mediumFontSize: string
  largeFontSize: string
  defaultTextColor: string
  ghostTextColor: string
  dashedTextColor: string
}

export const defaultButtonTheme: ButtonTheme = {
  smallHeight: '28px',
  mediumHeight: '34px',
  largeHeight: '40px',
  smallPadding: '0 10px',
  mediumPadding: '0 14px',
  largePadding: '0 18px',
  defaultColor: Default.COLOR,
  ghostColor: Default.COLOR,
  dashedColor: Default.COLOR,
  border: '1px solid var(--sa-color)',
  borderRadius: '4px',
  smallFontSize: '14px',
  mediumFontSize: '14px',
  largeFontSize: '15px',
  defaultTextColor: '#fff',
  ghostTextColor: Default.COLOR,
  dashedTextColor: Default.COLOR,
}
