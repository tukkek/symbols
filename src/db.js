import * as symbol from './symbol.js'
import * as search from './search.js'

const KEY='symbols'

export function save(){
  localStorage.setItem(KEY,JSON.stringify(symbol.SYMBOLS))
  search.refresh()
}

export function load(){
  for(let s of JSON.parse(localStorage.getItem(KEY)))
    new symbol.Symbol(s.description,s.symbol)
}
