function copyText(HtmlElement) {
  var text = HtmlElement.innerText;
  var input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand('copy');
  document.body.removeChild(input);
  return result;
 
}
document.querySelector('#btnCopy1').onclick = function() {
  copyText(document.querySelector('#text1'));
  alert("text copied to clipboard");
}
document.querySelector('#btnCopy2').onclick = function() {
    copyText(document.querySelector('#text2'));
    alert("text copied to clipboard");
}
