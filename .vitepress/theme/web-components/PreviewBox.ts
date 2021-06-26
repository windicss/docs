const template = document.createElement('template')
template.innerHTML = `
  <style>
    /** scrollbar style **/
    *::-webkit-scrollbar {
      background: transparent;
      width: 6px;
      height: 6px;
    }

    *::-webkit-scrollbar-thumb {
      transition: background .2s ease-in-out;
      background: transparent;
      border-radius: 9999px;
    }

    *::-webkit-scrollbar-corner {
      background: transparent;
    }

    *:hover::-webkit-scrollbar-thumb {
      background-color: #e4e4e7;
    }
    .dark *:hover::-webkit-scrollbar-thumb {
      background-color: #333;
    }

    :host {
      width: 100%;
      height: 100%;
    }
    #dark-wrap {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    #container {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      overflow: auto;
    }
  </style>
  <div id="dark-wrap">
    <div id="container">
    </div>
  </div>
`

class Play extends HTMLElement {
  private styleEl: HTMLStyleElement | null
  private fixedStyleEl: HTMLStyleElement | null
  private container: HTMLElement
  private darkWrap: HTMLElement
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    if (this.shadowRoot)
      this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.styleEl = null
    this.fixedStyleEl = null
    this.container = this.shadowRoot!.getElementById('container')!
    this.darkWrap = this.shadowRoot!.getElementById('dark-wrap')!

    this.setContent({
      css: this.getAttribute('css') || '',
      html: this.getAttribute('html') || 'Preview',
      classes: this.getAttribute('classes') || '',
      fixedCss: this.getAttribute('fixed-css') || '',
    })

    if (this.getAttribute('dark') === 'true')
      this.container.classList.add('dark')
  }

  static get observedAttributes() {
    return ['dark', 'css', 'html', 'classes', 'fixed-css', 'fixedcss']
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'dark') {
      if (newValue === 'true')
        this.darkWrap.classList.add('dark')
      else
        this.darkWrap.classList.remove('dark')

      return
    }

    if (name === 'fixed-css' || name === 'fixedcss')
      name = 'fixedCss'

    this.setContent({
      [name]: newValue,
    })
  }

  setContent(data: Record<string, string>) {
    if (!this.shadowRoot) return

    const {
      css,
      fixedCss,
      classes,
      html,
    } = data

    // console.log({
    //   css,
    //   fixedCss,
    //   classes,
    //   html,
    // })

    if (css) {
      if (this.styleEl)
        this.shadowRoot.removeChild(this.styleEl)
      this.styleEl = document.createElement('style')
      this.styleEl.innerHTML = css
      this.shadowRoot.appendChild(this.styleEl)
    }

    if (fixedCss) {
      if (this.fixedStyleEl)
        this.shadowRoot.removeChild(this.fixedStyleEl)
      this.fixedStyleEl = document.createElement('style')
      this.fixedStyleEl.innerHTML = fixedCss
      this.shadowRoot.appendChild(this.fixedStyleEl)
    }
    if (classes)
      this.container.className = classes
    if (html)
      this.container.innerHTML = html
  }
}

window.customElements.define('preview-box', Play)
