console.log('create employee from script loaded')
const createEmployeeForm=document.getElementById('create_employee_form');
const warningDiv=document.getElementById('warnings-by-server');
/*
 create employee from submit listener using ajax
 if form submission is successful, then we alter usre to login
 else we will alert user by giving error message given by server

*/
createEmployeeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

const formData=new FormData(createEmployeeForm)
const data=Object.fromEntries(formData.entries());
const jsonData=JSON.stringify(data);
const response=await fetch('/create-employee',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: jsonData
})
const result=await response.json();
console.log(result);
console.log(result);

if(result.status == 'successful'){
    createEmployeeForm.reset();
    warningDiv.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
         User created Successfully <br/>
         <a href="/signin" class="btn btn-primary my-3">SignIn Now</a>
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    
    </div>`;
} else {
    warningDiv.innerHTML =  `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    ${result.message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
}
});




