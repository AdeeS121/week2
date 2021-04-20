const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Here are my favorite movies: ', function(favMovies) {
    const movies = ['Saving Private Ryan', 'Ace Venture: Pet Detective', 'Angels in the Outfield', 'Underworld', 'The Empire Strikes Back'];
        movies.forEach(favMovies => {
        console.log(favMovies)
        })
    rl.question('\nHere are the movies at even numbers: ', function(favMovies) {
        movies.push('The Secret Life of Pets');
        // movies.forEach(evenMovies => {
                rl.close();   
        // })
    })
    });


rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});