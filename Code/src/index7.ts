// Cheat Sheet
// Class decorators
function Component(constructor: Function) {
  // Here we have a chance to modify members of // the target class.
  constructor.prototype.uniqueId = Date.now();
}

@Component
class ProfileComponent1 {}

// Parameterized decorators
function Component1(value: number) {
  return (constructor: Function) => {
    // Here we have a chance to modify members of
    // the target class.
    constructor.prototype.uniqueId = Date.now();
    value;
  };
}
@Component1(1)
class ProfileComponent3 {}

// Decorator composition
// Multiple decorators are applied in reverse order.
// Pipe followed by Component.
// idea of math f(g(x))
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}
@Component
@Pipe
class ProfileComponent2 {}

// Method decorators
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // We get a reference to the original method
  const original = descriptor.value as Function; // Then, we redefine the method descriptor.value = function(...args: any) {
  // We have a chance to do something first
  // we have to use function keywoed coz arrow function don't define thire own this keyword so we can use this as method in class
  descriptor.value = function (...args: any) {
    console.log("Before");
    // Then, we call the original method original.call(this, ...args);
    original.call(this, ...args);
    // And we have a chance to do something after console.log('After');
  };
}
class Person3 {
  @Log
  say(message: string) {
    console.log("Person says" + message);
  }
}

// Accessor decorators
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  // we didin't add ..args for getter coz getters can't have any arguments
  descriptor.get = function () {
    // original? coz original is any \ undefined we can add original! to tell the compiler that we sure that it will not be undefined
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}
class Person2 {
  constructor(public firstName: string, public lastName: string) {}
  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let person = new Person2("moody", "lili");
console.log(person.fullName);

// Property decorators
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    // We use this variable to hold the value behind the
    // target property.
    let value: string;
    // We create a descriptor for the target property.
    const descriptor: PropertyDescriptor = {
      // We're defining the setter for the target property. set(newValue: string) {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} charactors long`
          );
        value = newValue;
      },
    };
    // And finally, we redefine the property.
    Object.defineProperty(target, propertyName, descriptor);
  };
}
class User {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

console.log(new User("1234").password);
