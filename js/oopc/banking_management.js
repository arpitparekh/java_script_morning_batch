class Bank{

  constructor(name,branch,intialBalance,type){
    this.name = name;
    this.branch = branch;
    this.intialBalance = intialBalance;
    this.type = type;
  }

  deposit(amount) {
    this.intialBalance = this.intialBalance + amount;
  }

  withdraw(amount) {
    this.intialBalance = this.intialBalance - amount;
  }

  display() {
    console.log(this.name);
    console.log(this.branch);
    console.log(this.intialBalance);
    console.log(this.type);
  }

}

let bank = new Bank("SBI", "Pune", 10000, "Savings");
bank.deposit(2000);
bank.withdraw(5000);
bank.display();
bank.withdraw(5000);
bank.display();

let bank2 = new Bank("HDFC", "Pune", 10000, "Savings");
bank2.deposit(5000);
bank2.withdraw(4000);
bank2.display();
