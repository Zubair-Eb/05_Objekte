
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");



/***** Objekte 1 Daten/Funktionen *******/
let person = {
        firstName: "Rocky",
        familyName: "Eberl",
        salary: [120000,160000],
        permission: true,
        sayHello: 
        function () {
                return "Hello, " + this.firstName;
        }

};



// output(person.sayHello());
// output(person.firstName);
// output(person.permission);

// const txt = "Ich bin " + person.firstName + " " +
//         person.familyName + " und verdiene "+ person.salary[0] +" Euro per p.a"+".";
//         output(txt);


/***** Objekte 2 - Hierarchie *******/
const baikal = {
        value: "10m",
        deep: {
                        deeper: {
                                deepest: "Das Licht - auf 1642m!"
                        }
        }

};
        
output(baikal.value);
output(baikal.deep.deeper.deepest);




/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}