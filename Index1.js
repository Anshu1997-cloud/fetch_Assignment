let userDataForm = document.getElementById("userDataForm");
let retrieveData = document.getElementById("retrieveData");
let userDataTable = document.getElementById("userDataTable");



userDataForm.addEventListener('submit' , function(e){

 e.preventDefault()

 let  userName = document.getElementById("name").value;
 let  userAge = document.getElementById("age").value;


 let userData = {
         userName,
         userAge
     }

 localStorage.setItem('userData',  JSON.stringify(userData));
userDataForm.reset();

})       
 
retrieveData.addEventListener('click' , function(){

 let userDataFormJSON = localStorage.getItem('userData');
 let userData = JSON.parse(userDataFormJSON)


 if(userData){
     let row = document.createElement('tr');
     row.innerHTML = `<td>${userData.userName}</td><td>${userData.userAge}</td>`;
     userDataTable.appendChild(row);
 }
})


