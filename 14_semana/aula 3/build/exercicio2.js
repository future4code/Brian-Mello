"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const URL = "https://jsonplaceholder.typicode.com/posts/";
const id1 = URL + (process.argv[2]);
const id2 = URL + (process.argv[3]);
const id3 = URL + (process.argv[4]);
axios_1.default.get(id1).then((resp) => {
    console.log(resp.data.title);
}).catch((error) => {
    console.log(error);
});
axios_1.default.get(id2).then((resp) => {
    console.log(resp.data.title);
}).catch((error) => {
    console.log(error);
});
axios_1.default.get(id3).then((resp) => {
    console.log(resp.data.title);
}).catch((error) => {
    console.log(error);
});
//# sourceMappingURL=exercicio2.js.map