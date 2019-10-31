// Code
var codeTagNames = document.getElementsByTagName('code');
for (var i = 0; i < codeTagNames.length; i++) {

  var str = document.getElementsByTagName('code')[i].innerHTML;
  str = str.replace(/</g, "&lt");
  str = str.replace(/>/g,"&gt");
  document.getElementsByTagName('code')[i].innerHTML = str;

  //debug
  //console.log(document.getElementsByTagName('code')[i].innerHTML);
}
