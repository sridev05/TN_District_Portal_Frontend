// Assume 'districts' array is loaded by d.js.
// Example: let districts = [{ name_en, name_ta, image }];

/* Helper for ARIA live updates */
function announce(message) {
  let live = document.getElementById('aria-live-region');
  if (!live) {
    live = document.createElement('div');
    live.id = 'aria-live-region';
    live.setAttribute('role', 'status');
    live.setAttribute('aria-live', 'polite');
    live.style.position = 'absolute'; live.style.left = '-9999px';
    document.body.appendChild(live);
  }
  live.textContent = message;
}

document.addEventListener('DOMContentLoaded', function() {
  // Hamburger/drawer nav
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('navbar-links');
  navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
  });

  // Hero button navigation (basic JS)
  document.getElementById('explore-districts-btn').onclick = () =>
    document.querySelector('.districts-section').scrollIntoView({ behavior: "smooth" });
  document.getElementById('schemes-btn').onclick = () => window.location.href = "#";

  // Districts grid logic: loading, search, render, skeleton/empty
  const grid = document.getElementById('districts-grid');
  const loader = document.getElementById('districts-loader');
  const emptyMsg = document.getElementById('districts-empty');
  grid.innerHTML = "";
  loader.hidden = false;
  grid.setAttribute('aria-busy', 'true');

  // Simulating async fetch (replace with real fetch if needed)
  setTimeout(() => {
    grid.setAttribute('aria-busy', 'false');
    loader.hidden = true;

    renderDistricts(districts);
  }, 600);

  function renderDistricts(data) {
    grid.innerHTML = "";
    emptyMsg.hidden = true;
    if (!data || !data.length) {
      emptyMsg.hidden = false;
      announce("No districts found.");
      return;
    }
    data.forEach(dist => {
      const card = document.createElement('div');
      card.className = 'district-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${dist.name_en}. Click for more info.`);
      card.innerHTML = `
        <div class="district-image-wrap">
          <img src="${dist.image}" alt="${dist.name_en}" class="district-image"/>
          <span class="district-title">${dist.name_en}</span>
        </div>
      `;
      card.onclick = () => {
        localStorage.setItem('selectedDistrict', dist.name_en);
        window.location.href = '../html/district_page.html';
      };
      card.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") card.click();
      };
      grid.appendChild(card);
    });
    announce(`${data.length} districts listed.`);
  }

  // Live search (case-insensitive, both en and ta)
  document.getElementById('district-search').addEventListener('input', function(e){
    const term = e.target.value.trim().toLowerCase();
    if (!term) return renderDistricts(districts);
    const filtered = districts.filter(
      d => (d.name_en + " " + d.name_ta).toLowerCase().includes(term)
    );
    renderDistricts(filtered);
  });
});
