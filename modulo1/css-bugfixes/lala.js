function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    let gradeEx = 1*ex
    let gradeP1 = 2*p1
    let gradeP2 = 3*p2
    let gradeFinal = (gradeEx+gradeP1+gradeP2)/6

    let grade    
 
    if (gradeFinal >= 9) {
        grade = "A"
    } else if (gradeFinal >= 7.5) {
        grade = "B"
    } else if (gradeFinal >= 6) {
        grade = "C"
    }else {
        grade = "D"
    }

    return grade
  }