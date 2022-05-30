
const list = []

const task = process.argv[2] // Primeiro elemento

var tasksList = function () {
    return list.includes(task)
}

tasksList(list)

