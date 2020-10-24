var weight = 100
var height = 170
var height_in_m =170/100
var bmi = weight/(height_in_m**2)

if(bmi< 18.5){
    console.log("you are in the under range")
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are in the healthy weight")
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("you are in the overweight range")
}
else if (bmi >= 30 && bmi <= 39.9) {
    console.log("you are in the obese range")
}