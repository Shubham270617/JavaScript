const accoundId = 1445556
// accountId = 2 //not allowed
console.log(accoundId)

let accountEmail = "shubham@gmail.com"
accountEmail = "hc@hc.mail"
// console.log(accountEmail)

var accountPassword = "123456"
accountPassword = "212121"

accountCity = "Jaipur"
accountCity = "Patna"

console.table([accoundId,accountEmail,accountPassword,accountCity])


// output
// ┌─────────┬──────────────┐
// │ (index) │ Values       │
// ├─────────┼──────────────┤
// │ 0       │ 1445556      │
// │ 1       │ 'hc@hc.mail' │
// │ 2       │ '212121'     │
// │ 3       │ 'Patna'      │
// We can say that the data of every variable has been printed but even when var let are declare different value is being assigned and in account city.
// Var are not used mainly because of issue in block scope and functional scope.

