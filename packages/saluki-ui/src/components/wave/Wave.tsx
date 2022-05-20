import type { PropType } from 'vue'
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import { Default } from '../theme'

export default defineComponent({
  name: 'SaWave',
  props: {
    type: {
      type: String as PropType<'single' | 'keep' | 'infinite'>,
      default: 'single',
    },
    color: {
      type: String,
      default: Default.COLOR,
    },
    opacity: {
      type: Number,
      default: 0.6,
    },
    easing: {
      type: String,
      default: 'cubic-bezier(0, 0, 0.2, 1)',
    },
    duration: {
      type: Number,
      default: 600,
    },
  },
  setup(props) {
    const waveEl = ref<HTMLDivElement>()
    let animate: Animation | null = null

    onMounted(() => {
      if (waveEl.value) {
        animate = waveEl.value.animate([
          {
            opacity: props.opacity,
            boxShadow: `0 0 0.5px 0 ${props.color}`,
          },
          {
            opacity: 0,
            boxShadow: `0 0 0.5px 5px ${props.color}`,
          },
        ], {
          duration: props.duration,
          easing: props.easing,
        })
        animate?.pause()
      }
    })

    onBeforeUnmount(() => {
      animate = null
    })

    const play = () => {
      if (animate) {
        animate.cancel()
        animate.play()
        animate.onfinish = () => {
          if (props.type === 'infinite') {
            animate?.play()
          }
        }
      }
    }

    const cancel = () => {
      if (animate) {
        animate.cancel()
        animate.onfinish = () => {}
      }
    }

    return {
      waveEl,
      play,
      cancel,
    }
  },
  render() {
    const prefix = 'sa-wave'
    return <div ref="waveEl" class={[`${prefix}`]} />
  },
})
