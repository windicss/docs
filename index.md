---
home: true

heroText: Windi CSS

actionText: Get Started
actionLink: /guide/

altActionText: Learn More
altActionLink: /features/

heroImage: /assets/logo.svg
heroAlt: Windi CSS logo

newsTitle: 👉 Check out new features in Windi CSS v3.1
newsLink: /posts/v31.html

footer: MIT Licensed | Copyright © 2020-2021 Windi CSS Contributors
---

<Sponsors />

<InlinePlayground 
  :input="`bg-gradient-to-r from-green-400 to-blue-500
text-white text-center italic
px-4 py-2 rounded cursor-default
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
  <a href="https://www.netlify.com" rel="noreferrer" target="_blank">
    <img src="/assets/netlify.svg" alt="Deploys by Netlify">
  </a>
</p>
