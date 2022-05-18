import { defineComponent, onMounted, ref } from 'vue'
import { throttle } from '../../utils'
import { ArrowLeft, ArrowRight } from '../_internal/Icon'

export default defineComponent({
  name: 'SaCarousel',
  props: {
    showDots: {
      type: Boolean,
      default: true,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 5000,
    },
    duration: {
      type: Number,
      default: 300,
    },
  },
  setup(props, { slots }) {
    const prefix = 'sa-carousel'
    const carouselEl = ref<HTMLElement>()
    const slidesLength = slots.default?.().length || 0
    const currentSlide = ref(1)
    const allowAnimation = ref(true)

    const switchSlides = (value: number) => {
      allowAnimation.value = true
      currentSlide.value = value
      if (currentSlide.value === slidesLength + 1 || currentSlide.value === 0) {
        setTimeout(() => {
          allowAnimation.value = false
          currentSlide.value = currentSlide.value === 0 ? slidesLength : 1
        }, props.duration)
      }
    }

    onMounted(() => {
      if (props.autoplay) {
        setInterval(() => {
          switchSlides(currentSlide.value + 1)
        }, props.interval)
      }
    })

    const isDotActive = (index: number) => {
      if (currentSlide.value === 0 && index === slidesLength) {
        return true
      } else if (currentSlide.value === slidesLength + 1) {
        return index === 0
      } else {
        return currentSlide.value === index + 1
      }
    }

    const onDotClick = (index: number) => {
      allowAnimation.value = true
      currentSlide.value = index + 1
    }

    const onArrowClick = throttle((direction: 'left' | 'right') => {
      if (direction === 'left') {
        switchSlides(currentSlide.value - 1)
      } else {
        switchSlides(currentSlide.value + 1)
      }
    }, 100)

    return () => (
      <div class={`${prefix}`}>
        <div
          ref={carouselEl}
          class={`${prefix}-slides`}
          style={{
            transition: allowAnimation.value ? `transform ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1)` : undefined,
            transform: `translateX(-${currentSlide.value * 100}%)`,
          }}
        >
          <div>{slots.default?.()[slidesLength - 1]}</div>
          {
            slots.default?.().map((item, index) => {
              return <div key={index}>{item}</div>
            })
          }
          <div>{slots.default?.()[0]}</div>
        </div>
        {
          props.showDots
          && <div class={`${prefix}-dots`}>
            {
              Array.from({ length: slidesLength }).map((_, index) => {
                return <div
                  key={index}
                  class={[
                    `${prefix}-dot`,
                    isDotActive(index) && `${prefix}-dot__active`,
                  ]}
                  onClick={() => onDotClick(index)}
                />
              })
            }
          </div>
        }
        {
          props.showArrow
          && <div class={`${prefix}-arrow`}>
            <div onClick={() => onArrowClick('left')}>
              <ArrowLeft />
            </div>
            <div onClick={() => onArrowClick('right')}>
              <ArrowRight />
            </div>
          </div>
        }
      </div>
    )
  },
})
