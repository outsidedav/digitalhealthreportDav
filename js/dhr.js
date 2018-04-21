//javascript page


//Terms of service didnt't read

function Get(yourUrl){
    var HTTpreq = new XMLHttpRequest();
    HTTpreq.open('GET', yourUrl,false);
    HTTpreq.send(null);
    return HTTpreq.responseText;
}

yourUrl = 'https://tosdr.org/api/1/service/facebook.json';
var json_obj = JSON.parse(Get(yourUrl));
console.log(json_obj);


//Pwned

var pwnjson_obj = JSON.parse(get());
