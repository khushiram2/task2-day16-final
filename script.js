document.body.innerHTML=` <div class="inputContainer container">
<form id="form" class="row g-3">
 <div class="col-md-6">
   <Label for="fname" class="form-label">First name</Label>
   <input type="text" name="firstName" id="fname" class="form-control">
 </div>
 <div class="col-md-6">
   <label for="lname" class="form-label">Last name</label>
   <input type="text" name="lastName" id="lname" class="form-control">
 </div>
   <div class="gender-food" style="display:grid; grid-template-columns: 80px 80px auto;">
     <div class="form-check">     
      <label for="male" class="form-check-label">male</label>
      <input type="radio" name="gender" class="form-check-input" id="male" value="male">
     </div>
     <div class="form-check">
      <label for="female" class="form-check-label">female</label>
      <input type="radio" name="gender" class="form-check-input" id="female" value="female">
     </div>

     <div class="form-check-inline" style="text-align: center;">
        <h4>Favourite food</h4>
        <label for="cake" class="form-check-label food">cake</label>
        <input type="checkbox" class="form-check-input" name="" id="cake" value="cake">
        <label for="cookie" class="form-check-label food">cookie</label>
         <input type="checkbox" class="form-check-input" name="" id="cookie" value="cookie">
        <label for="pizza" class="form-check-label food">pizza</label>
        <input type="checkbox" class="form-check-input" name="" id="pizza" value="pizza">
        <label for="Burger" class="form-check-label food">Burger</label>
        <input type="checkbox" class="form-check-input" name="" id="Burger" value="Burger">
        <label for="sandwich"  class="form-check-label food">sandwich</label>
        <input type="checkbox" class="form-check-input" name="" id="sandwich" value="sandwich">
      </div>
   </div>

 
 
 <div class="col-md-12">
   <label for="adrs" class="form-label">address</label>
   <input type="text" class="form-control" name="address" id="adrs">
  </div>
  <div class="col-md-3">
   <label for="pncode" class="form-label">pincode</label>
   <input type="text" class="form-control" name="pincode" id="pncode">
  </div>
  <div class="col-md-4">
   <label for="state" class="form-label">state</label>
   <input type="text" class="form-control" name="state" id="state">
  </div>
  <div class="col-md-5">
   <label for="country" class="form-label">country</label>
   <input type="text" class="form-control" name="country" id="country">
 </div>

  





 </form>
 <div class="btn col-md-12">
  <button style="margin-left: 50px;" type="submit" class="btn btn-light col-md-9" id="submit123">submit</button>
</div>
</div>
<div class="tableContainer">
<table class="table" id="tableo">
  <thead>
      <tr>
         <th >#</th>
         <th >first-name</th>
         <th >last-name</th>
         <th >address</th>
         <th >pincode</th>
         <th >gender</th>
         <th >food</th>
         <th >state</th>
         <th >country</th>
       </tr>
    </thead>
    <tbody id="tablebody">

    </tbody>
</table>
</div>`






let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let adrs=document.getElementById("adrs")
let pncode=document.getElementById("pncode")
let male=document.getElementById("male")
let female=document.getElementById("female")
let state=document.getElementById("state")
let country=document.getElementById("country")
let submit123=document.getElementById("submit123")
let ADDrow=document.getElementById("tablebody")
let form=document.getElementById("form")
let cake=document.getElementById("cake")
let cookie=document.getElementById("cookie")
let burger=document.getElementById("Burger")
let pizza=document.getElementById("pizza")
let sandwich=document.getElementById("sandwich")
   
let column1 = []
let column2 = []
let column3 = []
let column4 = []
let column5 = []
let column6 = []
let column7 = []
let column8 = []



let n=1
let m=0
submit123.addEventListener("click",()=>{
    let newrow=ADDrow.insertRow(m)
 if(fname.value==""){alert("fill the first name");submit123.preventDefault()}

 if(lname.value==""){alert("fill your last name");submit123.preventDefault()}
 if(adrs.value==""){alert("fill your address");submit123.preventDefault()}
if(pncode.value==""){alert("fill your 6 digit area pincode");submit123.preventDefault()}
if(state.value==""){alert("please enter your state");submit123.preventDefault()}
if(country.value==""){alert("please enter your country");submit123.preventDefault()}
  column1[m]=fname.value
   column2[m]=lname.value
   column3[m]=adrs.value
   column4[m]=pncode.value
   if(male.checked==true){
    column5[m]= "male"
   }else if(female.checked==true){
    column5[m]="female"   }
    else{
        alert("you have to choose your gender");
        submit123.preventDefault()
    }
   column6[m]=state.value
   column7[m]=country.value
   if(cookie.checked==true)column8.push(cookie.value)
   if(burger.checked==true)column8.push(burger.value)
   if(cake.checked==true)column8.push(cake.value)
   if(pizza.checked==true)column8.push(pizza.value)
   if(sandwich.checked==true)column8.push(sandwich.value)
   if(cookie.checked==true && burger.checked==true && cake.checked==true && pizza.checked==true || sandwich.checked==true){
    alert("you can only choose 3 foods")
    submit123.preventDefault()
   }

var cel1=newrow.insertCell(0)
var cel2=newrow.insertCell(1)
var cel3=newrow.insertCell(2)
var cel4=newrow.insertCell(3)
var cel5=newrow.insertCell(4)
var cel6=newrow.insertCell(5)
var cel9=newrow.insertCell(6)
var cel7=newrow.insertCell(7)
var cel8=newrow.insertCell(8)


cel1.innerHTML=n
cel2.innerHTML=column1[m]
cel3.innerHTML=column2[m]
cel4.innerHTML=column3[m]
cel5.innerHTML=column4[m]
cel6.innerHTML=column5[m]
cel7.innerHTML=column6[m]
cel8.innerHTML=column7[m]
cel9.innerHTML=`<ul> 
                 <li>${column8[m*n]}</li>
                 <li>${column8[m*n+1]}</li> 
                 <li>${column8[m*n+2]}</li>
                 </ul>`

n++
m++
fname.value=""
lname.value=""
adrs.value=""
pncode.value=""
pizza.checked=false
cake.checked=false
cookie.checked=false
sandwich.ckecked=false
burger.checked=false
male.checked=false
female.checked=false
state.value=""
country.value=""


}) 
