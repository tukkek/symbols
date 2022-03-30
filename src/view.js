import * as symbol from './symbol.js'
import * as preview from './preview.js'

const TERM=document.querySelector('#search')
const SYMBOLS=document.querySelector('#symbols')
const SYMBOL=document.querySelector('template.symbol').content.children[0]

function search(){
  let t=TERM.value.toLowerCase()
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
    element.querySelector('.copy').onclick=e=>copy(s.symbol,e.target)
    element.querySelector('.remove').onclick=()=>s.remove()
    let v=element.querySelector('.value')
    if(s.link){
      let a=document.createElement('a')
      a.href=s.link
      a.innerHTML=s.description
      a.target='_blank'
      preview.hook(a,s)
      v.appendChild(a)
    } else v.innerHTML=s.symbol
    SYMBOLS.appendChild(element)
  }
}

TERM.onkeyup=refresh
TERM.focus()
