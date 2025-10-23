(function () {
  const el = document.getElementById('last-updated');
  if (!el) return;
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0'); // months are zero indexed
  const yyyy = now.getFullYear();
  el.textContent = `Last Updated on ${dd}/${mm}/${yyyy}`;
})();

