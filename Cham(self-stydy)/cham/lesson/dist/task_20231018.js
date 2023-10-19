"use strict";
function marks(number) {
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
marks(-3);
marks(70);
marks(120);
marks(50);
marks(39);
