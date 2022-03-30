import * as symbol from './symbol.js'
import * as view from './view.js'

const KEY='symbols'

export function save(){
  localStorage.setItem(KEY,JSON.stringify(symbol.SYMBOLS))
  view.refresh()
}

export function load(){
  let saved=localStorage.getItem(KEY)
  if(saved) for(let s of JSON.parse(saved))
    new symbol.Symbol(s.description,s.symbol)
}
