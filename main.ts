// Fortune Cookie Funnies for Engineers — make.fun entry
// Writes one fortune-cookie line for a software engineer (1–120 chars)
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The 'temporary workaround' you merge Friday becomes the legacy architecture you inherit Monday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the entry must be 1–120 characters and not only whitespace.
// Both checks run before any file is written, so a rejected entry leaves
// no partial output behind.
function guardEntry(line: string): void {
  if (line.length < 1 || line.length > 120) {
    throw new Error(`entry must be 1-120 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

guardEntry(LINE);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
