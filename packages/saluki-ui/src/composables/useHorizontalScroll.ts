import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useHorizontalScroll = () => {
  const el = ref<HTMLElement>()

  const handle = (e: Event) => {
    e.preventDefault()
    el.value!.scrollLeft += (e as WheelEvent).deltaY / 2
  }

  onMounted(() => {
    el.value?.addEventListener('mousewheel', handle)
  })

  onBeforeUnmount(() => {
    el.value?.removeEventListener('mousewheel', handle)
  })

  return { el }
}
