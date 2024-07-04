import { map }  from './entityCodes.js';

class EntityParser {
    private map: Map<string, string>;
    
    constructor() {
        this.map = new Map();
    }

    loadMap(map: Map<string, string>) {
        this.map = map;
    }
    
    public parseEntityCode(code: string) {
        return this.map.get(code);
    }
    
}

const entityParser = new EntityParser();
entityParser.loadMap(map);

console.time('parseEntityCode');

for (let [key] of map) {
    console.log(entityParser.parseEntityCode(key))
}

console.timeEnd('parseEntityCode');