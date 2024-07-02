function Generator(){
    let name = prompt("Enter Student's name:");
    let adm = prompt("Enter Admission number:");
    let grade = (prompt("Enter grade:"));

    
    // while( 0 > grade > 100){
    //     alert("Invalid input")
        
    // }
    let result;
    if (grade > 79 && grade <= 100) {
        result = "A"
        alert(`Student ${name}, of Admission ${adm}, your grade is ${result}`)
    } else if (grade < 79 && grade >= 60) {
        result = "B"
        alert(`Student ${name}, of Admission ${adm}, your grade is ${result}`)
    } else if (grade > 49 && grade <= 59) {
        result = "C"
        alert(`Student ${name}, of Admission ${adm}, your grade is ${result}`)
    } else if (grade > 40 && grade <= 49) {
        result = "D"
        alert(`Student ${name}, of Admission ${adm}, your grade is ${result}`)
    } 
    else if(grade < 39){
        result = "E"
        alert(`Student ${name}, of Admission ${adm}, your grade is ${result}`)
    }
    else{
        alert("Invalid input")

    }

    // alert(`Student ${name}, o÷f Admission ${adm}, your grade is ${result}`);
}
