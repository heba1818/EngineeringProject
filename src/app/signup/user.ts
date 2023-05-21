export class User {
    email: string;
    name: string;
    surname: string;
    phonenumber: string;
    coregisterno: string;
    date: Date;
    password: string;
    selectedoption: string;
  
    constructor(
      email: string,
      name: string,
      surname: string,
      phonenumber: string,
      coregisterno: string,
      date: Date,
      password: string,
      selectedoption: string
    ) {
      this.email = email;
      this.name = name;
      this.surname = surname;
      this.phonenumber = phonenumber;
      this.coregisterno = coregisterno;
      this.date = date;
      this.password = password;
      this.selectedoption = selectedoption;
    }
  }
  

