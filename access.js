function checkAccess()
{
let role = document.getElementById("role").value;
let device = document.getElementById("device").value;
let location = document.getElementById("location").value;
let risk = document.getElementById("risk").value;

let result = "";
let suggestion = "";

if(role == "Admin")
{
result = "Access Granted: Admin privileges";

suggestion = `
<ul>
<li>Admin users should monitor system activity regularly.</li>
<li>Ensure high-risk applications are used securely.</li>
<li>Maintain strong authentication practices.</li>
</ul>
`;
}

else if(device == "Mobile" && risk == "High")
{
result = "Access Denied: High risk app on mobile device";

suggestion = `
<ul>
<li>Avoid accessing high-risk applications on mobile devices.</li>
<li>Use a secure desktop environment for sensitive operations.</li>
<li>Ensure device security policies are followed.</li>
</ul>
`;
}

else if(location == "Foreign")
{
result = "Access Denied: Unauthorized location";

suggestion = `
<ul>
<li>Access from foreign locations may be restricted.</li>
<li>Use a trusted network or VPN for secure access.</li>
<li>Contact system administrator if access is required.</li>
</ul>
`;
}

else
{
result = "Access Granted: Limited user access";

suggestion = `
<ul>
<li>Use trusted devices when accessing applications.</li>
<li>Avoid using public networks for sensitive data.</li>
<li>Follow security guidelines provided by the system.</li>
</ul>
`;
}

let output = document.getElementById("result");
output.innerHTML = result;

if(result.includes("Granted"))
{
output.style.color = "green";
}
else
{
output.style.color = "red";
}

document.getElementById("suggestions").innerHTML = suggestion;

}