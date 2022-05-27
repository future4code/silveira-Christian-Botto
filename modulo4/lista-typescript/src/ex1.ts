function person(name: string, date: string): string {
    let day: string = date.slice(0, 2)
    let month: string = date.slice(3, 5)
    let year: string = date.slice(6, 10)
    let sentence: string = (`Olá. Me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`)
    return sentence
}

console.log(person("Christian", "07/04/1992"))
// Olá. Me chamo Christian, nasci no dia 07 do mês de 04 do ano de 1992