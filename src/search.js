import * as symbol from './symbol.js'

const TERM=document.querySelector('#search')
const SYMBOLS=document.querySelector('#symbols')
const SYMBOL=document.querySelector('template.symbol').content.children[0]

function search(){//TODO
  let t=TERM.value.toLowerCase()
  console.log(t)
  return !t?symbol.SYMBOLS:symbol.SYMBOLS.filter(s=>
    s.description.toLowerCase().indexOf(t)>=0||
    s.symbol.toLowerCase().indexOf(t)>=0)
}

async function copy(symbol,button){
  await navigator.clipboard.writeText(symbol)
  button.innerHTML='Copied!'
}

export function refresh(){
  SYMBOLS.innerHTML=''
  for(let s of search().sort((a,b)=>a.description.localeCompare(b.description))){
    let element=SYMBOL.cloneNode(true)
    element.querySelector('.name').innerHTML=s.description
    element.querySelector('.value').innerHTML=s.symbol
    element.querySelector('.copy').onclick=e=>copy(s.symbol,e.target)
    element.querySelector('.remove').onclick=()=>s.remove()
    SYMBOLS.appendChild(element)
  }
}

TERM.onkeyup=refresh
TERM.focus()
