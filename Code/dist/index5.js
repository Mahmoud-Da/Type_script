"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposte(amount) {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        this.balance += amount;
    }
}
let account = new Account(1, "moody", 0);
account.deposte(100);
console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=index5.js.map