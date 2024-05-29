function hmget(geturl)
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', geturl + document.querySelector("#hmsid").value, true);

    return;
}