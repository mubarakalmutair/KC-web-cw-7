
function BMI (w,h) {
       let result = w / (h*h);
    return result
}


console.log(BMI(10,10))


function status (bmi) {
   if (bmi < 18.5 ) {
       return "نقص بالوزن"
   }else if (bmi >= 18.5 && bmi < 25) {
     return "وزنك صحي"
   } else if (bmi >= 25) {
     return "لديك زيادة بالوزن"
}
 }
 


function calculate () {

let weight = document.getElementById(`weight`).value
let height = document.getElementById(`height`).value

let bmi = BMI(weight,height)
let desc = status(bmi)

let div = document.getElementById(`divTag`)

div.innerText = bmi +" == " + desc


}
