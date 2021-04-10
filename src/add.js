import * as symbol from './symbol.js'
import * as db from './db.js'

const NAME=document.querySelector('#name')
const VALUE=document.querySelector('#value')
const CONFIRM=document.querySelector('#confirm')

function add(){
  let n=NAME.value
  let v=VALUE.value
  if(!n||!v){
    window.alert('Name or value left blank!')
    return
  }
  new symbol.Symbol(n,v)
  db.save()
}

CONFIRM.onclick=add
VALUE.onkeypress=e=>{if(e.key=='Enter') add()}
NAME.onkeypress=e=>{if(e.key=='Enter') add()}
