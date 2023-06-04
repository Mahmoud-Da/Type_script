// Creating Classes
class Account {
  readonly id: number;
  owner: string;
  balance: number;
  //   optional property
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposte(amount: number): void {
    if (amount <= 0) {
      throw new Error("invalid amount");
    }
    this.balance += amount;
  }
}

// Creating an Object
let account = new Account(1, "moody", 0);
account.deposte(100);

console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);

// Read-only_and_Optional_Properties

// the id can be access and changed later in this id: number;
// to prevent that we can pass readonly keyword => we can only set it in the constructer

// we can create an optional property using ? => nickname?: string
