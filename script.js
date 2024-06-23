let movie="avatar"
let guess = prompt("guess the movie")
while(guess != movie && guess!="quit"){
    guess= prompt("wrong guess try again")
}

if (guess == movie){
    console.log("good guess")
}
else{
    console.log("you quited")
}