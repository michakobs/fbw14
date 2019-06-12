var points = [40, 1, 100, 5];

// points.sort();
points.sort(
    function (a, b) {
        //console.log(a);
        //console.log(b);
        //console.log(b-a);
        console.log(points);
        return b - a;
    }
    // return 39 (false), -99 (true), -99 (true), -60 (true), 35 (false), -4 (true)
)
console.log(points);

let pets = ['Mooxie', 'Pickle', 'Hootchie'];

pets.forEach(function (element) { // forEach Schleife, extra für Arrays ohne index
    console.log(element);
});

let myObject = {
    name: 'Martina', 
    age: 35,
    city: 'Berlin'
};

for (let eigenschaft in myObject) { // for...in Schleife
    console.log(myObject[eigenschaft]);
}