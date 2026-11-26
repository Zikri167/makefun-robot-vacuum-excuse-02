// The Robot Vacuum's Funniest Excuse — entry program.
//
// Writes exactly one line to /output/entry.txt: the excuse a robot vacuum
// gives for missing a spot. Stdlib only, deterministic, no network.
// The line is written with no trailing newline so the file is exactly the
// entry text (86 characters, within the 1–120 gate).
//
// Why this line: first-person machine voice owning the failure ("I didn't
// miss it"), a real joke with a punchline ("custody agreement... it's his
// weekend"), and vacuum-world vocabulary (dust bunny). It needs no setup
// and lands in a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I didn't miss it. The dust bunny and I have a custody agreement, and it's his weekend.";

// Fail loudly instead of submitting an invalid entry if the line ever
// drifts outside the gate (1–120 characters, not only whitespace).
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} characters`);
}

const out = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
