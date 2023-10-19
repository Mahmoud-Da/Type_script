// 課題16
// ユーザーが入力したマークに応じて、A、B、C、FAIL の評価を表示するプログラムを作成します。
// マーク60以上:Grade A

// 50-59:Grade B

// 40-49:Grade C

// 使用例:
// Input: 70 // Grade A
// Input: 59 // Grade B
// Input: 40 // Grade C

// Write a program which shows the grades A,B,C and FAIL according to the marks entered by the user.

// Marks 60 and above:Grade A

// 50-59:Grade B

// 40-49:Grade C

function marks(number: number): string {
  if (number < 0 || number > 100) {
    return "Please enter correct marks!";
  }
  switch (true) {
    case number >= 60:
      return "Grade A";
    case number >= 50:
      return "Grade B";
    case number >= 40:
      return "Grade C";
    default:
      return "FAIL";
  }
}

// test
marks(-3);
marks(70);
marks(120);
marks(50);
marks(39);
