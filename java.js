
// Validating Empty Fields and clearing form after valid submission
function check_empty() 
{
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('comments').value == "" || 
document.getElementById('experience').value == "")
{
alert("Please Fill In All Fields!");
} 
else 
{
alert("Feedback Submitted Successfully");
form.reset();
}
}






