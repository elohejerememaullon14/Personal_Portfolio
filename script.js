// Theme toggle with localStorage and custom icons
(function(){
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const PREF_KEY = 'theme';
  const saved = localStorage.getItem(PREF_KEY);
  if(saved === 'dark'){ root.classList.add('dark'); }
  updateIcons();

  btn.addEventListener('click', ()=>{
    root.classList.toggle('dark');
    localStorage.setItem(PREF_KEY, root.classList.contains('dark') ? 'dark' : 'light');
    updateIcons();
  });

  function updateIcons(){
    const isDark = root.classList.contains('dark');
    btn.querySelector('.sun').style.opacity = isDark ? '0' : '1';
    btn.querySelector('.moon').style.opacity = isDark ? '1' : '0';
  }
})();

// Mobile burger toggle
(function(){
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
})();

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();
