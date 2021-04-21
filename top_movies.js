const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Here are my favorite movies: ', function() {
        let movies = ['Saving Private Ryan', 'Ace Venture: Pet Detective', 'Angels in the Outfield', 'Underworld', 'The Empire Strikes Back'];
        for (let i = 0; i < movies.length; i++)
        console.log(movies[i])
        
    rl.question('\nHere are the movies at even numbers: ', function() { 
        movies.push('The Secret Life of Pets')
      for (let i = 0; i < movies.length; i++) { 
      if (i % 2 === 1) {
         console.log(movies[i])
      }
    }

      rl.question('\nWhat is one of your favorite movies: ', function(favMovies) { 
        rl.question('Here is the new movie list: ', function(newMovie){
          let today = new Date();
          let currentMonth = today.getMonth() + 1;
          let currentDay = today.getDate();
           if (currentMonth == birthMonth && currentDay == birthDay) {
             console.log('Happy Birthday!') 
           } else {
             console.log(`Hi ${name}. Your birthday is ${birthMonth}-${birthDay}-${birthYear}`)
           }
            rl.close();
        }); 
      })
    });
});

rl.on("close", function() {
    // console.log("\nBYE BYE !!!");
    process.exit(0);
});







// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question('Here are my favorite movies: ', function(favMovies) {
//     let movies = ['Saving Private Ryan', 'Ace Venture: Pet Detective', 'Angels in the Outfield', 'Underworld', 'The Empire Strikes Back'];
//         movies.forEach(favMovies => {
//         console.log(favMovies)
//         })
//     rl.question('\nHere are the movies at even numbers: ', function(getEvenMovies) {  
//       movies.push('The Secret Life of Pets')
//      let evenMovies = movies.filter(movie => movie % 2 === 0) 
//           console.log(evenMovies)
//           rl.close();
       
    

// })     
//     })    

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });