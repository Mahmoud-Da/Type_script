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
  let A: string = "Grade A";
  let B: string = "Grade B";
  let C: string = "Grade C";
  let F: string = "FAIL";
  if (number < 0 || number > 100) {
    return "Please enter correct marks!";
  } else {
    if (number >= 60) {
      return A;
    }
    if (number >= 50 && number < 59) {
      return B;
    }
    if (number >= 40 && number < 49) {
      return C;
    }
    return F;
  }
}

// test
marks(-3);
marks(70);
marks(120);
marks(50);
marks(39);
