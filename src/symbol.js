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
  
  get link(){
    try{
      return new URL(this.symbol)
    }catch(e){
      if(e instanceof TypeError) return false
      throw e
    }
  }
}
