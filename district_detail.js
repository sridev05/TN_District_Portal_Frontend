function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', function() {
  // Add a consistent navbar at the top
  const navbar = document.createElement('header');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <div class="navbar-left">
      <img src="https://aed.tn.gov.in/media/filer_public_thumbnails/filer_public/ea/c9/eac9c84e-a02c-4733-8a10-331dc8d1e1c3/tn_logo__eng.png__1200.0x1317.0_subsampling-2.png" alt="Tamil Nadu Logo" class="logo" style="height:48px;width:auto;vertical-align:middle;" />
      <span class="title">Tamil Nadu District Portal</span>
    </div>
    <nav class="navbar-center">
      <a href="home.html">Home</a>
      <a href="#">District Info</a>
      <a href="#">Tourism</a>
      <a href="#">Schemes</a>
      <a href="#">Contact</a>
    </nav>
    <div class="navbar-right"></div>
  `;
  document.body.prepend(navbar);

  const container = document.getElementById('district-detail');
  if (!container || !window.TamilNaduDistricts) return;

  const workingImages = {
    "Coimbatore": "https://www.saharalogistics.in/assets/img/project/COIMBATORE.jpg",
    "Madurai": "https://tse2.mm.bing.net/th/id/OIP.jcwU9eG3bisvgLs0T_o3iQHaE5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "Kanyakumari": "https://tse1.mm.bing.net/th/id/OIP.hDnIsF4dnUUatVKD5f2_nAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "Thanjavur": "https://wallpaperaccess.com/full/3865846.jpg",
    "Tiruchirappalli": "https://tse1.explicit.bing.net/th/id/OIP.0126PaCCNXOdt5pXRnYD7AHaEu?r=0&w=870&h=555&rs=1&pid=ImgDetMain&o=7&rm=3",
    "Chennai": "https://tse2.mm.bing.net/th/id/OIP.tNmNNW8BAQkflxbUvLirQQHaFC?r=0&w=600&h=408&rs=1&pid=ImgDetMain&o=7&rm=3",
    "Tirunelveli": "https://mediaim.expedia.com/destination/1/0d5f02078ac5e82d21510b06f4fa3e05.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
    "Salem": "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/salem-1656012703_782da197f4a9fd13319b.webp",
    "Namakkal": "https://tse1.mm.bing.net/th/id/OIP.ZUWsAV-3c29svsq5fpx3jwHaEn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "Theni": "https://tse4.mm.bing.net/th/id/OIP.aZU3nkhtM9jHscmWXMdcugHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "Erode": "https://www.hlimg.com/images/places2see/738X538/erode1_1519624418m.jpg",
    "Villupuram": "https://tse1.mm.bing.net/th/id/OIP.avffIxp4jA7Pq_iCMxRfjwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "Cuddalore": "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/cuddalore-1673075322_007060c46155bfd24391.webp",
    "Vellore": "https://i.pinimg.com/originals/66/23/27/662327dfbf7d6414394ef8bfd0dfc33c.jpg",
    "Dharmapuri": "https://tse3.mm.bing.net/th/id/OIP.iPNouLAPQ8Mol0DHyE7E1gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  };

  const districtName = getQueryParam('district');
  if (!districtName) {
    container.innerHTML = '<p>District not specified.</p>';
    return;
  }
  const district = window.TamilNaduDistricts.getDistrictByName(districtName);
  if (!district) {
    container.innerHTML = `<p>District "${districtName}" not found.</p>`;
    return;
  }
  const imageUrl = workingImages[district.name_en] || district.image;
  container.innerHTML = `
    <div class="district-detail-card">
      <button class="back-btn" onclick="window.location.href='home.html'">&larr; Back to Districts</button>
      <div class="district-header">
        <img src="${imageUrl}" alt="${district.name_en}" class="district-image" style="display:block;width:100%;max-height:320px;object-fit:cover;border-radius:1rem;" />
        <div class="district-overlay" style="position:absolute;left:0;right:0;bottom:0;background:linear-gradient(0deg,rgba(44,62,80,0.75) 0%,rgba(44,62,80,0.0) 100%);color:#fff;padding:1.2rem 1.5rem 0.7rem 1.5rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;">
          <h2 class="district-name-en" style="font-size:2rem;font-weight:700;margin:0;">${district.name_en}</h2>
          <h3 class="district-name-ta" style="font-size:1.1rem;font-weight:500;margin:0.2rem 0 0.5rem 0;letter-spacing:0.5px;">${district.name_ta} மாவட்டம்</h3>
          <p class="district-tagline" style="font-size:1rem;font-style:italic;margin:0 0 0.2rem 0;color:#e0e0e0;">${district.tagline}</p>
        </div>
      </div>
      <div class="district-content">
        <div class="district-description">
          <p>${district.description}</p>
        </div>
        <div class="district-stats">
          <div class="stat-grid">
            <div class="stat-item">
              <span class="stat-label">Area</span>
              <span class="stat-value">${district.area}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Population</span>
              <span class="stat-value">${district.population}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Headquarters</span>
              <span class="stat-value">${district.headquarters}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Literacy Rate</span>
              <span class="stat-value">${district.literacy}</span>
            </div>
          </div>
        </div>
        <div class="district-details">
          <div class="detail-section">
            <h4>Major Towns</h4>
            <p>${district.majorTowns}</p>
          </div>
          <div class="detail-section">
            <h4>Languages Spoken</h4>
            <p>${district.languages}</p>
          </div>
          <div class="detail-section">
            <h4>Major Attractions</h4>
            <p>${district.attractions}</p>
          </div>
          <div class="detail-section">
            <h4>Economy</h4>
            <p>${district.economy}</p>
          </div>
        </div>
        <div class="district-actions">
          <a href="${district.url}" target="_blank" class="official-website-btn">
            <i class="icon-external-link"></i>
            Visit Official Website
          </a>
        </div>
        <div class="district-more-info">
          <div class="more-info-content">
            <div class="info-row">
              <span class="info-label">Taluks:</span>
              <span class="info-value">${district.taluks}</span>
            </div>
            <div class="info-row">
              <span class="info-label">State:</span>
              <span class="info-value">Tamil Nadu</span>
            </div>
            <div class="info-row">
              <span class="info-label">Country:</span>
              <span class="info-value">India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}); 