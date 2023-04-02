import { Education } from "@/models/Education";
import { Job } from "@/models/Job";
import { defineStore } from "pinia";

export const aboutStore = defineStore({
  id: "about",
  state: () => ({
    jobs: [] as Job[],
    education: [] as Education[],
    jobLoading: false as boolean,
    educationLoading: false as boolean,
  }),
  actions: {
    async fetchJobs(): Promise<void> {
      try {
        this.jobLoading = true;
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
      } catch (error) {
        console.error("Error:", error);
      } finally {
        this.jobLoading = false;
      }
    },
    async fetchEducation(): Promise<void> {
      try {
        this.educationLoading = true;
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
      } catch (error) {
        console.error("Error:", error);
      } finally {
        this.educationLoading = false;
      }
    },
  },
});
