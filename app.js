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
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js');
      await registration.update();
    } catch (e) {
      console.log('Service Worker konnte nicht aktualisiert werden.', e);
    }
  });
}
