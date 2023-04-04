<template>
  <header
    role="banner"
    class="flex items-center justify-between p-8 sticky bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-slate-200"
  >
    <h1 class="sr-only">Personal website of Parth Shah, Software Engineer.</h1>
    <RouterLink to="/" class="justify-center">
      <div
        class="h-14 w-14 flex justify-center items-center text-4xl bg-pink-900 dark:bg-yellow-400 text-slate-200 dark:text-gray-900"
      >
        S
      </div>
    </RouterLink>
    <nav
      class="flex flex-wrap justify-center gap-x-20"
      aria-label="main navigation"
    >
      <template v-for="(n, i) in nav" :key="{ i }">
        <RouterLink
          :to="n.path"
          class="pt-8 uppercase hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          :aria-label="n.ariaLabel"
          :aria-current="n.path === $route.path ? 'page' : null"
        >
          {{ n.name }}</RouterLink
        >
      </template>
    </nav>
  </header>
</template>
<script setup lang="ts">
import "@/assets/css/main.css";
import { RouterLink } from "vue-router";
const nav = [
  {
    name: "Home",
    path: "/",
    ariaLabel: "Navigate to Home",
  },
  {
    name: "About",
    path: "/about",
    ariaLabel: "Navigate to About",
  },
  {
    name: "Projects",
    path: "/projects",
    ariaLabel: "Navigate to Projects",
  },
];

// var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
// var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// // Change the icons inside the button based on previous settings
// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon.classList.remove('hidden');
// } else {
//     themeToggleDarkIcon.classList.remove('hidden');
// }

// var themeToggleBtn = document.getElementById('theme-toggle');

// themeToggleBtn.addEventListener('click', function() {

//     // toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

//     // if set via local storage previously
//     if (localStorage.getItem('color-theme')) {
//         if (localStorage.getItem('color-theme') === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         }

//     // if NOT set via local storage previously
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         }
//     }
// });
</script>
