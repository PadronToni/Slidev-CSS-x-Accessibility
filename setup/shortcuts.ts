import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  console.log(base);
  
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'arrowdown',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'arrowup',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
