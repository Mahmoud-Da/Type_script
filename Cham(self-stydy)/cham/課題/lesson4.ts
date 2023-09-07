// まとめ

/*- Alias type 型エイリアスを使用すると、型に名前をつけられる。
        カスタム型を作成するために型エイリアスをよく使用する。*/
// プリミティブ型
type Str = string;
// リテラル型
type OK = 200;
// 配列型
type Numbers = number[];
// オブジェクト型
type UserObject = { id: number; name: string };
// ユニオン型
type NumberOrNull = number | null;
// 関数型
type CallbackFunction = (value: string) => boolean;

// Example
const Example = () => {
  // type文でUserの内容に型を付与している
  type User = {
    name: string;
    age: number;
  };

  // userにUserの型を付与している
  const user: User = { name: "Teru", age: 20 };

  // 単一の値にも型を付与できる
  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "others";

  type UserProfile = {
    name: UserName;
    age: UserAge;
    gender: UserGender;
  };

  const userProfile: UserProfile = {
    name: "Yuko",
    age: 20,
    gender: "woman",
  };
};

export default Example;

/* - Union Type ユニオン型を使用すると、変数を許可できる。
      多くのタイプ (例: 数値 | 文字列) のうちの 1 つを受け取ります。*/

type List = number | string[];

const maybeUserId: string | null = localStorage.getItem("userId");

const userId: string = maybeUserId; // nullかもしれないので、代入できない。

if (typeof maybeUserId === "string") {
  const userId: string = maybeUserId; // この分岐内では文字列型に絞り込まれるため、代入できる。
}

/* - Intersection type インターセクション型を使用すると、複数のタイプを 1 つに組み合わせることができます
       (例: ドラッグ可能およびサイズ変更可能)。*/
type TwoDimensionalPoint = {
  x: number;
  y: number;
};

type Z = {
  z: number;
};

type ThreeDimensionalPoint = TwoDimensionalPoint & Z;

const p: ThreeDimensionalPoint = {
  x: 0,
  y: 1,
  z: 2,
};

/* - オプショナルチェーンを使用する (?.)
       コードを簡素化し、null チェックの必要性を取り除くことができる。*/
const book1s = undefined;
const title1 = book1s?.[0];
console.log(title1);

const book2s = ["サバイバルTypeScript"];
const title2 = book2s?.[0];
console.log(title2);

const book1 = undefined;
const authorEmail1 = book1?.author1?.email;
console.log(authorEmail1);
// undefined

const book2 = { author2: { email: "alice@example.com" } };
const authorEmail2 = book2?.author2?.email;
console.log(authorEmail2);
// "alice@example.com"

// - Nullish Coalescing Operator を使用すると、
// null/未定義オブジェクトを扱う場合のデフォルト値。

// - 変数の型については、TypeScript コンパイラよりも詳しい場合があります。
//   このような状況では、 as キーワードを使用して、コンパイラによって推論された型とは異なる型を指定できます。
//    これを型アサーションと呼びます。

// - 不明な型は、any のタイプセーフ バージョンです。 どれも同様ですが、
//   任意の値を表すことができますが、未知の型に対しては操作を実行できません。
//    最初により具体的なタイプに絞り込まずに

// - Never タイプは、決して発生しない値を表します。
//   私たちはよくこれらを使用して、決して返さない関数や常にエラーをスローする関数に注釈を付けます。
