<script setup>
import Section from "@/components/Organisms/Section.vue";
import { computed, onMounted, ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore()
const {userAuthName} = storeToRefs(authStore)

const userName = ref('')

const checkAuth = () => {
  if (!userAuthName.value) return
  userName.value = userAuthName.value
}

onMounted(() => {
  checkAuth()
})

const welcomeText = computed((name) => {
  if (userAuthName.value)  `Hello, ${userAuthName.value}!`
  
  const array = ["dude", "mate", "pal", "buddy", "bro", "amigo", "comrade", "buddy", "friend"]
  const userName = array[Math.floor(Math.random() * array.length)]
  
  return `Hello, ${userName}!`
})

</script>

<template>
  <Section center>
      <span
        class="title1"
        style="word-break: break-word;"
      >
        {{ welcomeText }}
      </span>
  </Section>
</template>
