import { onBeforeUnmount, ref } from 'vue'

export const useMousePosition = () => {
  const x = ref(0)
  const y = ref(0)

  const handleClick = (e: MouseEvent) => {
    x.value = e.screenX
    y.value = e.screenY
  }

  document.addEventListener('click', handleClick)

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClick)
  })

  return { x, y }
}
