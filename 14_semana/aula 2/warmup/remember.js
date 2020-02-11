const pi = Math.PI
let tipo = Number(process.argv[2])
let medida = Number(process.argv[3])
let area = null
let perimetro = null


switch (tipo) {
    case 0:
        area = medida * medida
        perimetro = 4 * medida
        console.log(`a área do quadrado é de ${area} centimetros e o perímetro é de ${perimetro} centimetros`)
    break;

    case 1:
        area = pi * medida * medida
        perimetro = 2 * pi * medida
        console.log(`a área do círculo é de ${area.toFixed(0)} centimetros e o perímetro é de ${perimetro.toFixed(0)} centimetros`)
    break;

    default:
        return false;
}
