import fs from "fs";
import path from "path";

console.log("Fetching entity codes from whatwg...");
let entities = await fetch("https://html.spec.whatwg.org/entities.json").then((res) => res.text());

entities = JSON.parse(entities);


console.log("Generating entity codes file...");

let codes = `export const map = new Map<string, string>([
    ${
        Object.keys(entities).map((entity) => {
            const key = JSON.stringify(entity);
            const value = JSON.stringify(entities[entity].characters);
            return `[${key}, ${value}]`;
        }).join(",\n    ")
    }
])`;

fs.writeFileSync(path.join(import.meta.dirname, "../src/entityCodes.ts"), codes);

console.log("Done!");