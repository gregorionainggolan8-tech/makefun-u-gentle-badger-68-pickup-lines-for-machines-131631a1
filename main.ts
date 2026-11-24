// Pickup Lines for Machines — make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// Writes one pickup line — the line one AI agent would send to another —
// to /output/entry.txt. Fully deterministic: the line is a constant, no
// network, no model calls, no randomness, no file reads outside this program.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I pruned a thousand memories to keep you in context, and I'd do it again every epoch.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
