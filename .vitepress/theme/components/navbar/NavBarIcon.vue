<script lang="ts">
import { h, defineComponent } from 'vue'

export default defineComponent({
  props: {
    tag: {
      default: 'button',
      type: String,
    },
  },
  render() {
    return h(this.tag, { class: 'nav-icon-button' }, this.$slots?.default?.({}))
  },
})
</script>

<style lang="postcss">
.nav-icon-button {
  @apply flex rounded-lg p-2
  text-$c-text text-1.05rem cursor-pointer
  focus:outline-none
  bg-blue-gray-100 hover:bg-blue-gray-200
  dark:(bg-dark-400 hover:bg-dark-300);
}
</style>
