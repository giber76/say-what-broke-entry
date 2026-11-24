import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of error copy: the brutal truth, with a laugh.
// Names the real failure (expired card), says what to do next (update it),
// and the joke lands as a callback: the product was too polite to speak up,
// then promises to speak up sooner next time.
const LINE =
  "Your card expired three months ago and we were too polite to mention it. Update the card and try again — next time, we promise to speak up sooner.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
