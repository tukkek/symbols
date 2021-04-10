import * as search from './search.js'
import * as db from './db.js'

export const SYMBOLS=[]

export class Symbol{
  constructor(d,s){
    this.description=d
    this.symbol=s
    SYMBOLS.push(this)
  }
  
  remove(){
    if(!window.confirm('Remove '+this.description+'?')) return
    SYMBOLS.splice(SYMBOLS.indexOf(this),1)
    db.save()
  }
}
