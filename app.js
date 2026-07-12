
document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const text=btn.getAttribute('data-copy');
    try{
      await navigator.clipboard.writeText(text);
      const old=btn.textContent;
      btn.textContent='Kopiert ✓';
      setTimeout(()=>btn.textContent=old,1600);
    }catch(e){
      prompt('Bitte kopieren:',text);
    }
  });
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
