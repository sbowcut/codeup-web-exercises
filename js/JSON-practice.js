
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
$.ajax("https://jsonplaceholder.typicode.com/comments", {
    type: "POST",
    data: {
        name: "Child of Darkness",
        email: "edgelord@hotmail",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
});

console.log($.ajax('https://jsonplaceholder.typicode.com/comments'))