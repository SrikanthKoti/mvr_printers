"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSiteData = loadSiteData;
const fs_1 = require("fs");
const path_1 = require("path");
function loadSiteData() {
    const inDist = (0, path_1.join)(__dirname, 'site-data.json');
    const inSrc = (0, path_1.join)(process.cwd(), 'src', 'data', 'site-data.json');
    const path = (0, fs_1.existsSync)(inDist) ? inDist : inSrc;
    const raw = (0, fs_1.readFileSync)(path, 'utf-8');
    return JSON.parse(raw);
}
//# sourceMappingURL=data.service.js.map