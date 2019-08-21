$_$wp(1);
const years = ($_$w(1, 0), [
    1990,
    1965,
    1982,
    1937
]);
let ages5 = ($_$w(1, 1), years.map(function (el) {
    $_$wf(1);
    return $_$w(1, 2), 2018 - el;
}));
let ages6a = ($_$w(1, 3), years.map(el => {
    $_$wf(1);
    return $_$w(1, 4), 2018 - el;
}));
let ages6b = ($_$w(1, 5), years.map(el => {
    $_$wf(1);
    return $_$w(1, 6), 2018 - el;
}));
let ages6c = ($_$w(1, 7), years.map((el, index) => {
    $_$wf(1);
    return $_$w(1, 8), 'index: ' + index + ', age: ' + (2018 - el);
}));
let ages6d = ($_$w(1, 9), years.map((el, index) => {
    $_$wf(1);
    return $_$w(1, 10), 'index: ' + index + ', age: ' + (2018 - el);
}));
let box5 = ($_$w(1, 11), {
    color: 'green',
    position: 1,
    clickMe: function () {
        $_$wf(1);
        $_$w(1, 12), document.querySelector('.green').addEventListener('click', function () {
            $_$wf(1);
        });
    }
});
$_$wpe(1);