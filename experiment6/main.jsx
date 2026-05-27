let fontSize = 20;

function changeHeading()
{
    let text = document.getElementById("textInput").value;
    document.getElementById("heading").innerText = text;
}

function changeBackground()
{
    document.body.style.backgroundColor = "lightgreen";
}

function increaseFont()
{
    fontSize = fontSize + 2;
    document.getElementById("heading").style.fontSize = fontSize + "px";
}

function toggleParagraph()
{
    let para = document.getElementById("paragraph");

    if(para.style.display === "none")
    {
        para.style.display = "block";
    }
    else
    {
        para.style.display = "none";
    }
}

function resetAll()
{
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#d9f3f3";
    document.getElementById("heading").style.fontSize = "20px";
    document.getElementById("paragraph").style.display = "block";
}