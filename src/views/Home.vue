<script setup>
import Section from "@/components/Organisms/Section.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let auth
const userName = ref('')

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    userName.value = user?.displayName;
  })
})
</script>

<template>
  <Section center>
      <span
        class="title1"
        style="word-break: break-word;"
      >
        Hello, {{ userName || 'MF' }}!
      </span>
  </Section>
</template>
