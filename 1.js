var test = 'hello';
var number = 1;
var world = test + number;
alert(world);

var myfunc=function(){
  var value = document.getElementById('input').value;
  var node = document.createElement("LI");
var textnode = document.createTextNode(value);
node.appendChild(textnode);
 document.getElementById("test").appendChild(node);
}
