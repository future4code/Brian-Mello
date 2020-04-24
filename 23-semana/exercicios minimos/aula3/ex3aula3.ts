export const printArrayElements = (array: string[], element: number = array.length - 1) => {
  if (element >= 0) {
    printArrayElements(array, element - 1);
    console.log(`Elemento ${element}: `, array[element]);
  }
};

console.log(printArrayElements(["biscoito", "manga", "batata", "sopa", "feijão", "espinafre", "bananinha"]))