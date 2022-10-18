

function submit(){
    let a= document.getElementById("text")
    let b= document.getElementById("gender")
    let c= document.getElementById("date")
    let d= document.getElementById("marital")
    let e= document.getElementById("level")
    let f= document.getElementById("address")
    let g= document.getElementById("phone")
    let h= document.getElementById("country")
    let i= document.getElementById("city")
    let j= document.getElementById("email")
    let k= document.getElementById("password")


    document.getElementById("result").innerHTML = "Welcome " +a.value +" "+"a "+b.value +" "+ "born on "+c.value
    document.getElementById("results").innerHTML = d.value + " "+ "with a "+ e.value +" "+ "qualification"+ " "+ "address and phone number are " +f.value+ " " + g.value
    document.getElementById("mresults").innerHTML = "From " +h.vale + " "+ i.value+ " " + "and your email and password are" + " " +j.value +" "+ k.value



}