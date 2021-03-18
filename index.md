---
home: true

title: ''

heroText: Windi CSS

actionText: Get Started
actionLink: /guide/

altActionText: Learn More
altActionLink: /guide/features/

heroImage: /assets/logo.svg
heroAlt: Windi CSS logo

features:
  - title: ⚡️ Speed
    details: Windi only loads the CSS you use
  - title: 😎 Auto-Utilities
    details: Infers number, sizes, and colors from your classes
  - title: ✅ Cross-Browser Support
    details: All utilities have cross-browser support
footer: MIT Licensed | Copyright © 2020-2021 Windi CSS Contributors
---


<InlinePlayground 
  :input="`bg-gradient-to-r from-green-400 h-50 to-blue-500
m-4 p-4 text-white italic rounded cursor-default 
transition-all duration-400
hover:rounded-2xl
dark:\(from-teal-400 to-yellow-500)`"
  :showCSS="true"
  :showMode="true"
  :showTabs="true"
  :showConfig="false"
  :enableConfig="true"
  :config="{
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9'
      }
    }
  }
}"
/> 

<p class="flex justify-center opacity-75 mt-12">
  <a href="https://www.netlify.com" target="_blank">
    <img src="/assets/netlify.svg" alt="Deploys by Netlify">
  </a>
</p>
