import { inject } from 'vue'
import type { GlobalTheme } from '../components'

type Key = keyof GlobalTheme

export const useTheme = (key: Key) => {
  const config = inject('sa-config-provider')
  if (config) {
    const tabsTheme = (config as GlobalTheme)[key]
    if (tabsTheme) {
      return tabsTheme
    }
  }
}
