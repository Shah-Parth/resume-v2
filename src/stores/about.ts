import { Education } from "@/models/Education";
import { Job } from "@/models/Job";
import { defineStore } from "pinia";

// Cache expiry time in minutes
const CACHE_EXPIRY_TIME = 10;

export const aboutStore = defineStore({
  id: "about",
  state: () => ({
    jobs: [] as Job[],
    education: [] as Education[],
    jobLoading: false as boolean,
    educationLoading: false as boolean,
  }),
  getters: {
    isLoading(): boolean {
      return this.jobLoading || this.educationLoading;
    },
  },
  actions: {
    async fetchJobs(): Promise<void> {
      try {
        this.jobLoading = true;
        const cachedJobs = JSON.parse(
          localStorage.getItem("jobsCached") || "null"
        );
        const currentTime = new Date().getTime();
        if (
          cachedJobs &&
          cachedJobs.timestamp &&
          (currentTime - cachedJobs.timestamp) / 1000 / 60 < CACHE_EXPIRY_TIME
        ) {
          // Use cached data
          this.jobs = cachedJobs.data;
        } else {
          const response = await fetch(
            `https://us-central1-website-b674d.cloudfunctions.net/jobs`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                connection: "keep-alive",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to get jobs.");
          }
          const result = await response.json();
          this.jobs = result as Job[];
          this.jobs = this.jobs.sort((a, b) => {
            return a.id > b.id ? -1 : 1;
          });

          // Update cache
          localStorage.setItem(
            "jobsCached",
            JSON.stringify({
              data: this.jobs,
              timestamp: currentTime,
            })
          );
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        this.jobLoading = false;
      }
    },
    async fetchEducation(): Promise<void> {
      try {
        this.educationLoading = true;
        const cachedEducation = JSON.parse(
          localStorage.getItem("educationCached") || "null"
        );
        const currentTime = new Date().getTime();
        if (
          cachedEducation &&
          cachedEducation.timestamp &&
          (currentTime - cachedEducation.timestamp) / 1000 / 60 <
            CACHE_EXPIRY_TIME
        ) {
          // Use cached data
          this.education = cachedEducation.data;
        } else {
          const response = await fetch(
            `https://us-central1-website-b674d.cloudfunctions.net/education`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                connection: "keep-alive",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to get education.");
          }
          const result = await response.json();
          this.education = result as Education[];

          // Update cache
          localStorage.setItem(
            "educationCached",
            JSON.stringify({
              data: this.education,
              timestamp: currentTime,
            })
          );
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        this.educationLoading = false;
      }
    },
  },
});
