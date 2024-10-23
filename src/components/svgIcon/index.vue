<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId"></use>
  </svg>
</template>

<script setup>
const props = defineProps({
  name: String,
  prefix: {
    default: 'icon'
  }
})
console.log('props', props)
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
