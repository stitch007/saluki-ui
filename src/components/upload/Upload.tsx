import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'
import { Close, Link } from '../_internal/Icon'

export default defineComponent({
  name: 'SaUpload',
  props: {
    type: {
      type: String as PropType<'file' | 'image'>,
      default: 'file',
    },
    max: Number,
    multiple: {
      type: Boolean,
      default: false,
    },
    showFileList: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['change', 'error'],
  setup(props, { slots, emit }) {
    const prefix = 'sa-upload'
    const fileEl = ref<HTMLInputElement>()
    const imageEl = ref<HTMLImageElement>()
    const files = ref<File[]>([])

    const onFileChange = () => {
      if (fileEl.value) {
        const original = fileEl.value.files
        if (original) {
          if (props.type === 'image') {
            if (!original[0].type.startsWith('image/')) {
              emit('error', '只能上传图片')
              return
            }
            files.value = [original[0]]
            const url = window.URL.createObjectURL(files.value[0])
            if (imageEl.value) {
              imageEl.value.src = url
            }
          } else {
            const len = Math.min(original.length, props.max || original.length)
            for (let i = 0; i < len; i++) {
              files.value.push(original[i])
            }
          }
          emit('change', files.value)
        }
      }
    }

    const onTriggerClick = () => {
      if (props.max && files.value.length >= props.max) {
        emit('error', `最多只能上传${props.max}个文件`)
        return
      }
      fileEl.value?.click()
    }

    const removeFile = (index: number) => {
      files.value.splice(index, 1)
      fileEl.value && (fileEl.value.value = '')
      emit('change', files.value)
    }

    return () => (
      <div class={`${prefix}`}>
        <input
          type="file"
          ref={fileEl}
          multiple={props.multiple}
          onChange={onFileChange}
        />
        <div
          class={`${prefix}-trigger`}
          onClick={onTriggerClick}
        >
          {
            slots.default
              ? slots.default?.()
              : <div class={[`${prefix}-image`, files.value.length && `${prefix}-image__show`]}>
                <div>+</div>
                <img ref={imageEl} src="#" alt="" />
              </div>
          }
        </div>
        {
          props.type === 'file'
          && props.showFileList
          && <div class={`${prefix}-file-list`}>
            {
              files.value.map((file, index) => {
                return (
                  <div key={index} class={`${prefix}-file-list-item`}>
                    <Link />
                    <div>{file.name}</div>
                    <div onClick={() => removeFile(index)}>
                      <Close />
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    )
  },
})
