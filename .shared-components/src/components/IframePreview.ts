import { ref, toRefs, watchEffect, onMounted, defineComponent, h } from 'vue'
import srcdoc from '../srcdoc.html?raw'

export default defineComponent({
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    css: {
      type: String,
      default: '',
    },
    fixedCss: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    html: {
      type: String,
      default: 'Preview',
    },
  },
  setup(props) {
    onMounted(createSandBox)

    const container = ref<HTMLElement | null>(null)
    let sandbox: HTMLIFrameElement

    function createSandBox() {
      if (sandbox)
        container.value?.removeChild(sandbox)

      sandbox = document.createElement('iframe')
      sandbox.setAttribute('sandbox', [
        'allow-forms',
        'allow-modals',
        'allow-pointer-lock',
        'allow-popups',
        'allow-same-origin',
        'allow-scripts',
        'allow-top-navigation-by-user-activation',
      ].join(' '))
      sandbox.srcdoc = srcdoc
      sandbox.style.backgroundColor = 'transparent'
      container.value?.appendChild(sandbox)
      sandbox.addEventListener('load', () => {
        isReady.value = true
      })
    }

    const isReady = ref(false)
    const propRefs = toRefs(props)

    for (const key of Object.keys(propRefs) as (keyof typeof propRefs)[]) {
      watchEffect(() => {
        if (!isReady.value)
          return
        sandbox?.contentWindow?.postMessage(
          JSON.stringify({
            [key]: propRefs[key].value,
          }),
          location.origin,
        )
      })
    }

    watchEffect(() => {
      if (!isReady.value)
        return
      sandbox.contentWindow?.document?.querySelector('html')?.classList?.toggle('dark', props.dark)
    })

    return () => h('div', {
      ref: container,
      class: 'preview-container',
    })
  },
})
