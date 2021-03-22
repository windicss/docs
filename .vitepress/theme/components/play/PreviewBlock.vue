<template>
  <div class="block-bg m-4 overflow-hidden relative">
    <div class="block-title">
      Preview
    </div>
    <div class="p-4 h-full">
      <slot />
    </div>
    <div class="absolute bottom-0 w-full">
      <div class="bg-blue-gray-100 dark:bg-dark-700 m-2 rounded-md p-2 flex items-center justify-center">
        <select id="devices" name="devices" class="bg-transparent appearance-none relative text-xs dark:text-gray-200 focus:outline-none">
          <option value="ipad_pro">
            iPad Pro
          </option>
        </select>
        <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        <div class="flex items-center text-xs mx-4">
          <input id="width" name="width" class="number-input" value="1366">
          <span class="mx-1">×</span>
          <input id="height" name="height" class="number-input" value="1024">
        </div>
        <select id="ratio" class="bg-transparent text-xs text-gray-800 dark:text-gray-100 appearance-none focus:outline-none">
          <option value="50">
            50%
          </option>
          <option value="75">
            75%
          </option>
          <option value="100">
            100%
          </option>
          <option value="125">
            125%
          </option>
          <option value="150">
            150%
          </option>
        </select>
        <svg class="fill-current w-4 h-4 -ml-1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        <button class="ml-3 focus:outline-none hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-current" version="1.1" viewBox="0 0 24 24"><path d="M7.5,21.5C4.25,19.94 1.91,16.76 1.55,13H0.05C0.56,19.16 5.71,24 12,24L12.66,23.97L8.85,20.16M14.83,21.19L2.81,9.17L9.17,2.81L21.19,14.83M10.23,1.75C9.64,1.16 8.69,1.16 8.11,1.75L1.75,8.11C1.16,8.7 1.16,9.65 1.75,10.23L13.77,22.25C14.36,22.84 15.31,22.84 15.89,22.25L22.25,15.89C22.84,15.3 22.84,14.35 22.25,13.77L10.23,1.75M16.5,2.5C19.75,4.07 22.09,7.24 22.45,11H23.95C23.44,4.84 18.29,0 12,0L11.34,0.03L15.15,3.84L16.5,2.5Z" /></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.number-input {
  @apply appearance-none bg-transparent w-12 text-center focus:outline-none border border-gray-300 rounded dark:border-dark-300;
}
</style>
