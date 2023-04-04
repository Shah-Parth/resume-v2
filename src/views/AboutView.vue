<template>
  <div v-show="isLoading" class="flex justify-center items-center">
    <p class="animate-pulse delay-100">Loading...</p>
  </div>
  <div v-show="!isLoading" class="flex flex-col lg:flex-row justify-evenly">
    <section class="justify-center space-y-8">
      <h1 class="relative text-6xl font-extralight">Experience</h1>
      <ol
        v-for="(job, id) in jobs"
        :key="id"
        class="relative border-l border-pink-900 dark:border-yellow-500"
      >
        <li class="mb-10 ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 bg-pink-900 dark:bg-yellow-500 ring-slate-200 dark:ring-gray-900"
          >
            <CalendarIcon class="w-4 h-4 fill-slate-200 dark:fill-gray-900" />
          </span>
          <h2 class="flex items-center mb-1 text-2xl font-semibold">
            {{ job.jobTitle }}&nbsp;
            <span class="text-pink-900 dark:text-yellow-500">
              @&nbsp;{{ job.name }}</span
            >
          </h2>
          <h3 class="flex items-center mb-1 text-lg font-extralight">
            {{ job.jobCity + "," }} &nbsp;{{ job.jobState }}
          </h3>
          <time class="flex items-center mb-1 text-lg font-extralight">
            {{ job.startMonth + "," }}&nbsp;{{ job.startYear }}
            &nbsp;-&nbsp;
            {{ job.endMonth ? job.endMonth + "," : "Present" }}&nbsp;
            {{ job.endYear }}
          </time>
        </li>
      </ol>
    </section>
    <section class="justify-center space-y-8">
      <h1 class="relative text-6xl font-extralight">Education</h1>
      <ol
        v-for="(edu, id) in education"
        :key="id"
        class="relative border-l border-pink-900 dark:border-yellow-500"
      >
        <li class="mb-10 ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 bg-pink-900 dark:bg-yellow-500 ring-slate-200 dark:ring-gray-900"
          >
            <AcademicCapIcon
              class="w-4 h-4 fill-slate-200 dark:fill-gray-900"
            />
          </span>
          <h2
            class="flex items-center mb-1 text-2xl font-semibold text-pink-900 dark:text-yellow-500"
          >
            {{ edu.university }}
          </h2>
          <time class="flex items-center mb-1 text-lg font-extralight">
            {{ edu.graduationMonth + "," }}&nbsp;{{ edu.graduationYear }}
          </time>
          <p class="flex items-center mb-1 text-lg font-extralight">
            {{ edu.degree + "," }} {{ edu.field }}
          </p>
        </li>
      </ol>
    </section>
  </div>
</template>
<script setup lang="ts">
import { CalendarIcon, AcademicCapIcon } from "@heroicons/vue/24/solid";
import { aboutStore } from "@/stores/about";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const about = aboutStore();
const { jobs, education, isLoading } = storeToRefs(aboutStore());

onMounted(() => {
  about.fetchJobs();

  about.fetchEducation();
});
</script>
