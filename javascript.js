function Number(text) {
  let textTop = document.getElementById("text-top").innerText;
  if (
    text == "/" ||
    text == "*" ||
    text == "-" ||
    text == "+" ||
    text == "%" ||
    text == "."
  ) {
    if (
      textTop[textTop.length - 1] == "/" ||
      textTop[textTop.length - 1] == "*" ||
      textTop[textTop.length - 1] == "-" ||
      textTop[textTop.length - 1] == "+" ||
      textTop[textTop.length - 1] == "%" ||
      textTop[textTop.length - 1] == "." ||
      textTop == ""
    ) {
    } else {
      document.getElementById("text-top").innerHTML += text;
    }
  } else {
    document.getElementById("text-top").innerHTML += text;
  }
}
function Delete() {
  document.getElementById("text-top").innerHTML = "";
  document.getElementById("text-bottom").innerHTML = "";
}
function Equal() {
  const equal = document.getElementById("text-top").innerText;
  try {
    document.getElementById("text-bottom").innerHTML = stringMath(equal);
  } catch (error) {}
}
function BackSpace() {
  let textTop = document.getElementById("text-top").innerText;
  document.getElementById("text-top").innerHTML = textTop.slice(0, -1);
}
