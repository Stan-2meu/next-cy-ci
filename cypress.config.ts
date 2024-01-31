import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:
      process.env.NODE_ENV === "test"
        ? "http://localhost:3000"
        : "http://localhost:8020",
  },
  projectId: "next-cy-ci",
  video: true,
});
