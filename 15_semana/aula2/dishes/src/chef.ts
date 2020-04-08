import { Employee } from "./employee";
import { menu } from "./dishes";
import { Dish } from "./dish";
import { SaltyDish } from "./saltydish";
import { newDish } from "./dishes"


export class Chef extends Employee{

    sayJob(){
        return "(o/a) Chef"
    }

    public addDishToMenu(newDish: SaltyDish ){
        menu.push(
            newDish
        )
    }
}