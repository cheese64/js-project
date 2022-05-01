function avgGrade(grades){
//var grades = ['A+', 'B+', 'A', 'F', 'B+', 'C', 'B+'];
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
    //console.log(avgLetter);
    return avgLetter;


}