
//Local Storage
const form = document.getElementById('appointment_form');
var all = document.querySelectorAll("#appointment_form input, #appointment_form select");
localStorage.setItem("submitform","Submit Form");
// localStorage.setItem("doctor","MD");
for (let field of all)
{
    field.addEventListener("change",function(e){
        e.preventDefault();
        // localStorage.setItem(field.name,field.value);
        localStorage.setItem(field.id,field.value);
        // var q1 = document.querySelector('input[name=q1]:checked').value;
        // localStorage.setItem("q1",q1);
    });
}

if(localStorage.length > 0)
{
    for(let field of all)
    {
        field.value = localStorage.getItem(field.id);
    }
}

//Date and Time
var today = new Date();
var dd = today.getDate() ;
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var curr_hours = today.getHours() + 8;
var curr_min = today.getMinutes();

if (dd < 10) 
{
    dd = '0' + dd;
}
 
if (mm < 10) 
{
    mm = '0' + mm;
} 

if(curr_hours > 23)
{
    curr_hours = curr_hours - 24;
}

if(curr_hours < 10)
{
    curr_hours = '0' + curr_hours;
}

if(curr_min < 10)
{
    curr_min = '0' + curr_min;
}
     
today = yyyy + '-' + mm + '-' + dd;
var curr_time = curr_hours+":"+curr_min;
console.log(curr_time);
document.getElementById("dob").setAttribute("max", today);
document.getElementById("doa").setAttribute("min", today);
document.getElementById("toa").setAttribute("min",curr_time);

//Form Validation
form.addEventListener("submit",function(e){
    e.preventDefault();
    let fname = hasValue(form.elements["fname"],"Enter First Name");
    let lname = hasValue(form.elements["lname"],"Enter last Name");
    let email = hasValue(form.elements["email"],"Enter Email");
    let dob = hasValue(form.elements["dob"],"Enter Date of Birth");
    let doa = hasValue(form.elements["doa"],"Enter Date of Appointment");
    if(fname && lname && email && dob && doa)
    {
        localStorage.clear();
        location.reload();
    }
    
});

function showMessage(input, message, type) {
	// update the class for the input
    input.setAttribute("placeholder",message);
    // const msg = input.parentNode.querySelector("small");
	// msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return true;
}