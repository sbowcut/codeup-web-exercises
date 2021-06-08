// {
//     "stringProp": "stringValue",
//     "numberProp": 1,
//     "objectProp": {
//     "prop": "value"
// },
//     "arrayProp" : ["item1", "item2"],
//     "arrayOfObjectsProp" : [
//     {
//         "prop": "value"
//     },
//     {
//         "prop": "value"
//     }
// ],
//     "boolProp"  : true,
//     "nullProp"  : null
// }


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))