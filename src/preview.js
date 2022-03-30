const PREVIEW=document.querySelector('#preview')

function show(s,e){
  PREVIEW.src=s.link
  PREVIEW.style.left=e.pageX
  PREVIEW.style.top=e.pageY
  preview.classList.remove('hidden')
}

function hide(){preview.classList.add('hidden')}

export function hook(anchor,s){
  anchor.onmouseenter=(e)=>show(s,e)
  anchor.onmouseleave=()=>hide()
}
