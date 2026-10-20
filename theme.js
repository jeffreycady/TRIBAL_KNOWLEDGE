/* Light / dark toggle. Dark is the default. The choice is saved on this device.
   The early script in each page <head> applies the saved choice before first paint. */
(function(){
  var KEY = 'tk-theme';
  var root = document.documentElement;
  function current(){ return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
  function apply(mode){
    root.setAttribute('data-theme', mode);
    var meta = document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content', mode === 'light' ? '#f6f4ee' : '#141614');
    document.querySelectorAll('[data-theme-toggle]').forEach(function(b){
      var next = mode === 'light' ? 'dark' : 'light';
      b.setAttribute('aria-label', 'Switch to ' + next + ' mode');
      b.setAttribute('title', 'Switch to ' + next + ' mode');
    });
  }
  function save(mode){ try { localStorage.setItem(KEY, mode); } catch(e) {} }
  document.addEventListener('click', function(ev){
    var btn = ev.target.closest && ev.target.closest('[data-theme-toggle]');
    if(!btn) return;
    var next = current() === 'light' ? 'dark' : 'light';
    apply(next); save(next);
  });
  apply(current());
})();
