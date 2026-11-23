import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "A");

// Verify: read back and assert exactly 1 byte containing only "A".
const back = readFileSync("/output/entry.txt");
if (back.length !== 1 || back[0] !== 0x41) {
  console.error(`verification failed: /output/entry.txt is ${back.length} bytes, expected exactly 1 byte "A"`);
  process.exit(1);
}
