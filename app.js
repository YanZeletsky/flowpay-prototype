// Simple screen switcher: each [data-go] element opens the screen with that id
const screens=[...document.querySelectorAll('.screen')];
const links=[...document.querySelectorAll('aside a')];
function show(id){
  screens.forEach(s=>s.classList.toggle('on',s.id===id));
  links.forEach(a=>a.classList.toggle('on',a.dataset.go===id));
  history.replaceState(null,'','#'+id);
}
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-go]');
  if(t){e.preventDefault();show(t.dataset.go);}
});
show(location.hash.slice(1)||'s1');
