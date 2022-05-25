const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => 
{
    if(request.status === 200)
    {
        let x = JSON.parse(request.response);
        document.getElementById("requestStatus").innerHTML = x[0].name;
        console.log(JSON.parse(request.response));
    }
    else
    {
        console.log(`errors ${request.status}`)
    }
}