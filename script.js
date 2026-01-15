// Highlight active nav link by pathname
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a[data-page]').forEach(a=>{
    if(a.getAttribute('data-page') === path){ a.classList.add('active'); }
  });
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
})();