// Js

class JavaScirpt {
  // @ts-ignore
  constructor(file_name, path) {
    // @ts-ignore
    this.file_name = file_name;
    // @ts-ignore
    this.path = path;
  }

  greet() {
    // @ts-ignore
    console.log(`file name is ${this.file_name}, it is in ${this.path}`);
  }
  info() {
    console.log("JavaScript");
  }
}

const js1 = new JavaScirpt("lili", "3");
js1.greet();
js1.info();

// TypeScript
class TypeScript {
  private readonly id: number;

  private _file_name: string;
  // classの外でアクセスしただめ　（class内）だけ
  public path: string;
  // デフォルト　（public書かなくても良い「自動的」）
  // classの外でもアクセスしていいよ　（class内と外）

  type?: number;
  // public デフォルト
  // optional property (あってもなくても良い)

  constructor(id: number, file_name: string, path: string, type?: number) {
    this.id = id;
    this._file_name = file_name;
    this.path = path;
    this.type = type;
  }

  greet(): string | number {
    const message = `${this.id}file name is ${this._file_name}, it is in ${this.path}, ${this.type}`;
    // greet()　いつstringを返してくれる
    if (typeof this._info === "string") {
      console.log(message);
      return message;
    } else {
      // greet()　いつnumberを返してくれる
      return 404;
    }
  }
  private _info() {
    console.log("TypeScript");
  }
}

const ts1 = new TypeScript(1, "index1", "download");
const ts2 = new TypeScript(2, "index2", "desktop");
ts1.greet();
//  privateだからクラスの外側読めない。
// ts1._info();

// 概念
// class {プログラミング言語}　=> 「JS、TS、Python、Ruby」
// instance {JS}だけ。

// class {TypeScript} => 全体のグループ　「ts1, ts2, ts3」
// instance {ts1} => 一個だけ{}

// class.method
// instance.method

// Override
class Person {
  constructor(
    public readonly id: number,
    public firstName: string,
    public lastName: string //
  ) {}

  // Getter for fullName
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  // Setter for fullName
  set fullName(value) {
    const parts = value.split(" ");
    if (parts.length === 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      console.error("Invalid full name format. Use 'First Last'.");
    }
  }
}
class Student extends Person {
  override get fullName() {
    return "Student " + super.fullName;
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

const person = new Person(1, "John", "Doe");

console.log(person.fullName); // Output: "John Doe"
