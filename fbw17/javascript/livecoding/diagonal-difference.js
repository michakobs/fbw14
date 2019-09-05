$_$wp(1);
let myArray = ($_$w(1, 0), [
    [
        6,
        6,
        7,
        -10,
        9,
        -3,
        8,
        9,
        -1
    ],
    [
        9,
        7,
        -10,
        6,
        4,
        1,
        6,
        1,
        1
    ],
    [
        -1,
        -2,
        4,
        -6,
        1,
        -4,
        -6,
        3,
        9
    ],
    [
        -8,
        7,
        6,
        -1,
        -6,
        -6,
        6,
        -7,
        2
    ],
    [
        -10,
        -4,
        9,
        1,
        -7,
        8,
        -5,
        3,
        -5
    ],
    [
        -8,
        -3,
        -4,
        2,
        -3,
        7,
        -5,
        1,
        -5
    ],
    [
        -2,
        -7,
        -4,
        8,
        3,
        -1,
        8,
        2,
        3
    ],
    [
        -3,
        4,
        6,
        -7,
        -7,
        -8,
        -3,
        9,
        -6
    ]
]);
function diagonalDifference(arr) {
    $_$wf(1);
    let leftToRightSum = ($_$w(1, 1), 0);
    let rightToLeftSum = ($_$w(1, 2), 0);
    let j = ($_$w(1, 3), arr.length - 1);
    $_$w(1, 4), $_$tracer.log(arr, 'arr', 1, 4);
    for (let i = 0; $_$w(1, 5), i < arr.length; i++) {
        debugger;
        $_$w(1, 6), $_$tracer.log(leftToRightSum, 'leftToRightSum', 1, 6);
        $_$w(1, 7), leftToRightSum += arr[i][i];
        $_$w(1, 8), rightToLeftSum += arr[i][j];
        $_$w(1, 9), j--;
    }
    $_$w(1, 10), $_$tracer.log(leftToRightSum, 'leftToRightSum', 1, 10);
    $_$w(1, 11), $_$tracer.log(rightToLeftSum, 'rightToLeftSum', 1, 11);
    return $_$w(1, 12), Math.abs(leftToRightSum - rightToLeftSum);
}
$_$w(1, 13), $_$tracer.log(diagonalDifference(myArray), 'diagonalDifference(myArray)', 1, 13);
$_$wpe(1);