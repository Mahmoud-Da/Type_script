// Cheat Sheet

// Before use generic classes
class KeyVlauePair1 {
  constructor(public key: number, public value: string) {}
}

let key1 = new KeyVlauePair1(1, "mosh");

// now if we want to make pass to key argument string value
class StringKeyVlauePair1 {
  constructor(public key: string, public value: string) {}
}

let key2 = new StringKeyVlauePair1("1", "mosh");
// but the problem that everytime we want change parameter value we need to create a new class

// Generic classes (Template Classes in C++)
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair = new KeyValuePair<number, string>(1, "a");
// The TypeScript compiler can sometimes infer
// generic type arguments so we don't need to specify them. let other = new KeyValuePair(1, 'a');
// Generic functions
// T generic type and we use T coz is coming from c++ which refer to tmplate class
function wrapInArray<T>(value: T) {
  return [value];
}
let numbers1 = wrapInArray(1);

// Generic interfaces
interface Result<T> {
  data: T | null;
}

// Generic constraints
function echo1<T extends number | string>(value: T) {
  value;
}
// Restrict using a shape object
function echo2<T extends { name: string }>(value: T) {
  value;
}
// Restrict using an interface or a class
function echo3<T extends Person>(value: T) {
  value;
}

// Extending generic classes
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}
// Passing on generic type parameters
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
// Constraining generic type parameters
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}
// Fixing generic type parameters
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    category;
    return [];
  }
}

// The keyof operator
interface Product {
  name: string;
  price: number;
}
let property1: keyof Product;
// Same as
let property: "name" | "price";
property = "name";
property = "price";
// property = 'otherValue';  // Invalid

// Type mapping
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Utility types
interface Product {
  id: number;
  name: string;
  price: number;
}
// A Product where all properties are optional
let product12: Partial<Product>;
// A Product where all properties are required
let product13: Required<Product>;
// A Product where all properties are read-only
let product14: Readonly<Product>;
// A Product with two properties only (id and price)
let product15: Pick<Product, "id" | "price">;
// A Product without a name
let product16: Omit<Product, "name">;
