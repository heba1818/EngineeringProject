export class Product {
    name: string;
    description: string;
    amount:string;
    price: number;
    datePublished : Date;
    quality : string;
    image: string;
  
    constructor(name: string, description: string,amount:string, price: number, datePublished : Date,
      quality : string,
      image: string) {
      this.name = name;
      this.description = description;
      this.amount = amount;
      this.price = price;
      this.datePublished = datePublished;
      this.quality = quality;
      this.image = image;
    }
  }