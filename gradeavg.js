//Red Paleski
//This version of the code is for testing purposes, to show that the function can receive and
//output a value as intended, so you just need to use node gradeavg.js to run it. We tried
//not having the pre-built array (Since its name was the same as the parameter for the function)
//and just taking in the grades received from the HTML/EJS docs, but this proved to be an issue.
//It ended up getting cut due to it not being able to display on the HTML/EJS doc.
//The code for finding the mode was also cut due to time, however it was not functioning as 
//intended when it was cut, so it's not included in the final project.

var grades = ['A+', 'B+', 'A', 'F', 'B+', 'B+', 'C', 'B+'];

function avgGrade(grades){

var avgArray = [];
var mean;
var avgLetter ="";


    for (var i = 0; i < grades.length; i++){
        var letter = grades[i];
        switch (letter) {
            case 'A+':
                avgArray.push(12)
              break;
            case "A":
                avgArray.push(11)
              break;
            case "A-":
                avgArray.push(10)
              break;
            case "B+":
                avgArray.push(9)
              break;
            case "B":
                avgArray.push(8)
              break;
            case "B-":
                avgArray.push(7)
              break;
            case "C+":
                avgArray.push(6)
              break;
            case "C":
                avgArray.push(5)
              break;
            case "C-":
                avgArray.push(4)
              break;
            case "D+":
                avgArray.push(3)
              break;
            case "D":
                avgArray.push(2)
              break;
            case "D-":
                avgArray.push(1)
              break;
            case "F":
            case "W":
                avgArray.push(0)
              break;
            default:
              console.log("Error: No Grades Available")
              break;
         }
       }
        
 
    

   
    //based on code from https://poopcode.com/calculate-the-average-of-an-array-of-numbers-in-javascript/#:~:text=To%20calculate%20the%20average%20of,reduce()%20for%20this%20purpose.
    // for next two lines of code
    
    const average = avgArray => avgArray.reduce((a,b) => a + b, 0) / avgArray.length;

    mean = average(avgArray).toFixed(0);

    switch (mean) {
        case '12':
            avgLetter = "A+"
          break;
        case '11':
            avgLetter = "A"
          break;
        case '10':
            avgLetter = "A-"
          break;
        case '9':
            avgLetter = "B+"
          break;
        case '8':
            avgLetter = "B"
          break;
        case '7':
            avgLetter = "B-"
          break;
        case '6':
            avgLetter = "C+"
          break;
        case '5':
            avgLetter = "C"
          break;
        case '4':
            avgLetter = "C-"
          break;
        case '3':
            avgLetter = "D+"
          break;
        case '2':
            avgLetter = "D"
          break;
        case '1':
            avgLetter = "D-"
          break;
        case '0':
            avgLetter = "F or W"
          break;
        default:
          console.log("Error! Out of Bounds")
          break;
     }

    
    //console.log(avgArray);
    //console.log(mean);
    console.log(avgLetter);
    return avgLetter;


}
avgGrade(grades);