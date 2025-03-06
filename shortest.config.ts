import "dotenv/config";
import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: false,
  baseUrl: "https://github.com",
  testPattern: "**/*.test.ts",
  ai: {
    provider: "anthropic",
  }
} satisfies ShortestConfig;

