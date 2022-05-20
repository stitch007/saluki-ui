import { Default } from '../theme'

export interface SwitchTheme {
  smallHeight: string
  mediumHeight: string
  largeHeight: string
  smallWidth: string
  mediumWidth: string
  largeWidth: string
  smallButtonWidth: string
  mediumButtonWidth: string
  largeButtonWidth: string
  borderRadius: string
  offset: string
  color: string
  activeColor: string
  buttonColor: string
  buttonBoxShadow: string
  focusBoxShadow: string
  easing: string
}

export const defaultSwitchTheme: SwitchTheme = {
  smallHeight: '18px',
  mediumHeight: '22px',
  largeHeight: '26px',
  smallWidth: '32px',
  mediumWidth: '40px',
  largeWidth: '48px',
  smallButtonWidth: '14px',
  mediumButtonWidth: '18px',
  largeButtonWidth: '22px',
  borderRadius: '3px',
  offset: '2px',
  color: 'rgba(0, 0, 0, 0.14)',
  activeColor: Default.COLOR,
  buttonColor: '#fff',
  buttonBoxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)',
  focusBoxShadow: `0 0 0 2px ${Default.COLOR}4E`,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
}
