sign=()=>
{
var pass=document.getElementById("pwd").value;
var cpass=document.getElementById("cpwd").value;
if(pass!=cpass)
document.getElementById("mas").textContent=("Please Check your password");
else if(pass=="")
{
    document.getElementById("mas").textContent=("Please fill the password");
}
else
{
document.getElementById("mas").textContent=("Password is saved");
window.open("./success.html","_blank");
}
}