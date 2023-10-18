"use strict";
function marks(number) {
    let A = "Grade A";
    let B = "Grade B";
    let C = "Grade C";
    let F = "FAIL";
    if (number < 0 || number > 100) {
        return "Please enter correct marks!";
    }
    else {
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
marks(-3);
marks(70);
marks(120);
marks(50);
marks(39);
