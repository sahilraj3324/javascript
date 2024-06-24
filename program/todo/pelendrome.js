 let num=-121
 let reverseNum = 0;
 let temp = num;

 // Reverse the digits of the number
 while (temp != 0) {
     let digit = temp % 10;
     reverseNum = reverseNum * 10 + digit;
     temp = Math.floor(temp / 10);

     console.log(reverseNum)
 }
 console.log(reverseNum)
console.log(temp)
    if (num==reverseNum){
        console.log("true")

    }
    else {
        console.log("false")
    }