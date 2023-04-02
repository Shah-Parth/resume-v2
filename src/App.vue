<template>
  <Header></Header>
  <main
    class="min-h-screen text-xl bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-slate-200"
    role="main"
    tabindex="-1"
  >
    <div class="container px-8 py-10 mx-auto grid gap-8">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import "@/assets/css/main.css";
import { RouterView } from "vue-router";
import Header from "@/components/HeaderComponent.vue";
</script>

<style scoped></style>
