export class Dish {
  public name: string;
  public price: number;
  public cost: number;
  public ingredients: string[];
  public timeToCook: number;

  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    this.name = name;
    this.price = price;
    this.cost = cost;
    this.ingredients = ingredients;
    this.timeToCook = timeToCook;
  }

  public getProfit(): number {
    return this.price - this.cost;
  }

  public getPrice(){
    return this.price
  }

  public setPrice(price: number){
    this.price = price
  }
}
