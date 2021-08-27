export const css = `.box {
  @apply
    py-8 px-8 inline-flex mx-auto
    bg-white dark:bg-gray-400 dark:bg-opacity-10
    rounded-xl shadow-md space-y-2;
}
.btn {
  @apply
    px-4 py-1 text-sm text-purple-600 font-semibold
    rounded-full border border-purple-200 dark:border-purple-800
    hover:text-white hover:bg-purple-600 hover:border-transparent
    focus:outline-none focus:ring-2 ring-purple-600 ring-opacity-40;
}
`

export const html = `<div class="flex">
  <div class="box">
    <div class="text-center space-y-2">
      <div class="space-y-0.5">
        <p class="text-lg text-black dark:text-white font-semibold mb-2">
          Erin Lindford
        </p>
        <p class="text-gray-500 dark:text-gray-300 font-medium pb-3">
          Product Engineer
        </p>
      </div>
      <button class="btn">
        Message
      </button>
    </div>
  </div>
</div>`
