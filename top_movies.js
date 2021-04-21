const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Here are my favorite movies: ", function () {
  let movies = [
    "Saving Private Ryan",
    "Ace Venture: Pet Detective",
    "Angels in the Outfield",
    "Underworld",
    "The Empire Strikes Back",
  ];
  for (let i = 0; i < movies.length; i++) console.log(movies[i]);

  rl.question("\nHere are the movies at even numbers: ", function () {
    movies.push("The Secret Life of Pets");
    for (let i = 0; i < movies.length; i++) {
      if (i % 2 === 1) {
        console.log(movies[i]);
      }
    }
    rl.question("\nWhat is one of your favorite movies: ", function (favMovie) {
      rl.question("\nHere is the new movie list: ", function () {
        movies.push(favMovie);
        for (let i = 0; i < movies.length; i++) console.log(movies[i]);
        rl.close();
      });
    });
  });
});

rl.on("close", function () {
  // console.log("\nBYE BYE !!!");
  process.exit(0);
});
