import type { BadgeTheme } from './badge'
import type { ButtonTheme } from './button'
import type { CardTheme } from './card'
import type { CheckboxTheme } from './checkbox'
import type { DropdownTheme } from './dropdown'
import type { InputTheme } from './input'
import type { MenuTheme } from './menu'
import type { ModalTheme } from './modal'
import type { SwitchTheme } from './switch'
import type { TabsTheme } from './tabs'

export interface GlobalTheme {
  Badge?: Partial<BadgeTheme>
  Button?: Partial<ButtonTheme>
  Card?: Partial<CardTheme>
  Checkbox?: Partial<CheckboxTheme>
  Dropdown?: Partial<DropdownTheme>
  Input?: Partial<InputTheme>
  Menu?: Partial<MenuTheme>
  Modal?: Partial<ModalTheme>
  Switch?: Partial<SwitchTheme>
  Tabs?: Partial<TabsTheme>
}

export const enum Default {
  COLOR = '#425aef',
  DARK_BG_COLOR = '#1d1b26',
}
