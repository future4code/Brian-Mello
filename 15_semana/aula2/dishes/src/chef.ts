import { Employee } from "./employee";
import { menu } from "./dishes";
import { Dish } from "./dish";
import { SaltyDish } from "./saltydish";

// const newDish: SaltyDish = new SaltyDish(process.argv[2], Number(process.argv[3]), Number(process.argv[4]), process.argv[5], Number(process.argv[6]))
export class Chef extends Employee{

    sayJob(){
        return "(o/a) Chef"
    }

    // public addDishToMenu(newDish: SaltyDish){
    //     menu.push(
    //         newDish
    //     )
    // }
}