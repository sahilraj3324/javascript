let number = 122

let temp = number
let rev =0

while (temp !=0){
    let dig = temp %10
    rev = rev*10 +dig
    temp = Math.floor(temp/10)
}

if (number == rev){
    console.log("true")
}
else {
    console.log("false")
}