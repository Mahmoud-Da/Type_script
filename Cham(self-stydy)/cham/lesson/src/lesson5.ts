// classの作成

// Js
// @ts-ignore
class hairSalon {
  // @ts-ignore : 1行づつチェックしない
  constructor(staff_name, old, style) {
    // @ts-ignore
    this.staff_name = staff_name;
    // @ts-ignore
    this.old = old;
    // @ts-ignore
    this.style = style;
  }

  greet() {
    console.log(
      // @ts-ignore
      `Hair salon's staff is ${this.staff_name}, ${this.old} years old, specializes in ${this.style} hair`
    );
  }
  info() {
    console.log("hairSalon");
  }
}

const staff1 = new hairSalon("Mikey", 26, "short");
staff1.greet();
staff1.info();
const staff2 = new hairSalon("James", 30, "long");
staff2.greet();
staff2.info();

// TypeScript
class HairSalon {
  // 定義しないと、実施できない。
  private readonly id: number;

  private staff_name: string;
  // classの外でアクセスしただめ　（class内）だけ
  public old: number;
  // デフォルト　（public書かなくても良い「自動的」）
  // classの外でもアクセスしていいよ　（class内と外）

  style: string;
  // public デフォルト
  constructor(id: number, staff_name: string, old: number, style: string) {
    this.id = id;
    this.staff_name = staff_name;
    this.old = old;
    this.style = style;
  }

  greet(): string | number {
    const info = `${this.id}Hair salon's staff is ${this.staff_name}, ${this.old} years old, specializes in ${this.style} hair`;
    // greet()　いつstringか？いつnumberか？
    if (typeof this.info === "string") {
      console.log(info);
      return info;
    } else {
      return 404;
    }
  }
  private info() {
    console.log("TypeScript");
  }
}

const sta1 = new HairSalon(1, "Mikey", 26, "short");
sta1.greet();
const sta2 = new HairSalon(2, "James", 30, "long");
sta2.greet();
// ts1._info(); info は privateだからクラスの外側が読めない。

// class {プログラミング言語}　=> 「JS、TS、Python、Ruby」
// instance {JS}だけ。➡　instance は　class の一部です。

// class.method：全体に影響する
// instance.method：一つに影響する。
