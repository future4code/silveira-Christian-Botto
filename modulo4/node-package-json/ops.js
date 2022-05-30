switch (oprocess.argv[3]) {
    case "add":
        var add = function (a, b) {
            return a + b
        }
        console.log(add(Number(process.argv[2]), Number(process.argv[3])))
        module.exports = add
        break;
    case "sub":
        var sub = function (a, b) {
            return a - b
        }
        console.log(sub(Number(process.argv[2]), Number(process.argv[3])))
        module.exports = sub
        break;
    case "mult":
        var mult = function (a, b) {
            return a * b
        }
        console.log(mult(Number(process.argv[2]), Number(process.argv[3])))
        module.exports = mult
        break;
    case "div":
        var div = function (a, b) {
            return a / b
        }
        console.log(div(Number(process.argv[2]), Number(process.argv[3])))
        module.exports = div
        break;
}