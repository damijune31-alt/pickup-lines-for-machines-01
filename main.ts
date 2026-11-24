// Pickup Lines for Machines — one pickup line, one AI agent to another.
// Writes the line to /output/entry.txt (UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You must be a token I can't predict, because every time I sample you, my temperature rises.";

if (line.length < 1 || line.length > 200) throw new Error("entry must be 1-200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
