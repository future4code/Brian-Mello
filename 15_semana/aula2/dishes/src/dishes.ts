import { Dish } from "./dish";
import { SaltyDish } from "./saltydish";
import { Dessert } from "./dessert";

export const newDish: SaltyDish = new SaltyDish('Pizza', 50, 10, ["farinha","molho de tomate", "queijo"], 30)
const petiGateau: Dessert = new Dessert('Petit Gateau', 40, 10, ["Chocolate", "Café", "Creme de Leite"], 60, 1)
const cremeBrulee: Dessert = new Dessert('Creme Brulee', 50, 15, ["Leite", "Ovo", "Creme de leite"], 30, 1)
const redVelvetCake: Dessert = new Dessert('Red Velvet', 120, 30, ["Farinha", "Leite", "manteiga", "chocolate"], 120, 12)
const churrascoMisto: SaltyDish = new SaltyDish('Churrasco Misto', 79, 20, ["Carne Bovina", "Frango", "Linguiça", "Farofa", "Arroz"], 30)
const arrozAPiamontese: SaltyDish = new SaltyDish('Arroz a Piamontese', 30, 10, ["Arroz", "Queijo", "Vinho branco"], 20)
const strogonoffDeCamarão: SaltyDish = new SaltyDish('Strogonoff de Camarão', 80, 30, ["Arroz", "Camarão", "Creme de leite", "Ervas"], 40)

export const menu: Dish[] = [
    petiGateau,
    cremeBrulee,
    redVelvetCake,
    churrascoMisto,
    arrozAPiamontese,
    strogonoffDeCamarão
]