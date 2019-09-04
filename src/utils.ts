function addMessage(x: any, second?: boolean){
  const node = document.createElement('li');
  if (second) node.className = 'right';
  const text = document.createTextNode(x)
  node.appendChild(text);
  const ul = document.getElementById('output')
  ul.appendChild(node);
}

function printMessage(message: any, type: any){
  const el = document.createElement('p');
  el.className = type;
  el.innerText = message;
  document.body.appendChild(el);
}

export { addMessage, printMessage }