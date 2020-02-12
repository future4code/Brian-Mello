"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const pastaDeTextos = "../textos";
const promiseReddirAction = new Promise((resolve, reject) => {
    fs_1.readdir(pastaDeTextos, (err, files) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(files);
        }
    });
});
const archivesReader = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaArquivos = (yield promiseReddirAction);
        for (let i = 0; i < listaArquivos.length; i++) {
            let file = "";
            fs_1.readFile(`../textos/${listaArquivos[i]}`, (err, files) => {
                if (err) {
                    console.error(err);
                }
                else {
                    file = files.toString();
                    console.log(file);
                }
            });
        }
    }
    catch (error) {
        console.error("Promise Falhou", error);
    }
});
archivesReader();
//# sourceMappingURL=exercicio1.js.map