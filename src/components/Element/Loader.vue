<script setup>

</script>

<template>
  <div class="loader-wrap">
    <span class="loader"></span>
    <span class="loader"></span>
    <span class="loader"></span>
  </div>
</template>

<style scoped lang="scss">
.loader-wrap {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
}

.loader {
  --size: 10px;
  
  position: relative;
  bottom: var(--size);
  width: var(--size);
  height: var(--size);
  
  border-radius: 50%;
  color: var(--color-text);
  animation: flashing 2s infinite ease-in-out both;
  
  &:not(:last-child) {
    margin-right: 4px;
  }
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
}

@keyframes flashing {
  0%, 80%, 100% {
    box-shadow: 0 var(--size) 0 calc(-1 * var(--size))
  }
  40% {
    box-shadow: 0 var(--size) 0 0
  }
}

</style>
