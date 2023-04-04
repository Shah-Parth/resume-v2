<template>
  <div class="flex flex-col lg:flex-row justify-evenly">
    <section class="flex flex-col w-full justify-center px-8 space-y-4">
      <img
        src="@/assets/parth.png"
        alt="Parth Shah"
        class="rounded-md grayscale -rotate-6 hover:grayscale-0"
      />
    </section>
    <section class="flex flex-col w-full justify-center px-8 space-y-4">
      <h1 class="font-extralight text-6xl">
        From Concept To Code, Scalable Solutions That Stand The Test
      </h1>
      <p class="font-extralight text-2xl leading-loose">
        My passion for backend development is fueled by a desire to create
        custom solutions that exceed your expectations and scale with your
        business. I specialize in building efficient, secure, and scalable
        backend systems that power web and mobile applications of all kinds.
        From API development to database management, I'll work with you to
        create a backend solution that meets your needs.
      </p>
      <div class="flex flex-row justify-between">
        <button
          type="button"
          class="inline-flex items-center bg-pink-900 hover:bg-pink-900/90 text-slate-200 dark:bg-yellow-500 dark:hover:bg-yellow-500/90 dark:text-gray-900 font-normal py-2 px-4 rounded"
        >
          <a
            target="_blank"
            href="https://firebasestorage.googleapis.com/v0/b/website-b674d.appspot.com/o/documents%2FParth_Resume.pdf?alt=media"
            class="inline-flex items-center"
          >
            Resume
            <ArrowTopRightOnSquareIcon
              class="w-4 h-4 ml-2 fill-slate-200 dark:fill-gray-900"
            />
          </a>
        </button>
        <button
          type="button"
          class="inline-flex items-center bg-pink-900 hover:bg-pink-900/90 text-slate-200 dark:bg-yellow-500 dark:hover:bg-yellow-500/90 dark:text-gray-900 font-normal py-2 px-4 rounded"
        >
          <a
            href="mailto:contact@shahparth.me"
            class="inline-flex items-center"
          >
            Contact
            <InboxIcon class="w-4 h-4 ml-2 fill-slate-200 dark:fill-gray-900" />
          </a>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon, InboxIcon } from "@heroicons/vue/24/solid";
</script>
