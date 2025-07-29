// Assumes d.js is loaded and window.districts is available

document.addEventListener('DOMContentLoaded', function() {
  const listContainer = document.getElementById('district-list');
  const detailContainer = document.getElementById('district-detail');

  function renderDistrictList() {
    listContainer.innerHTML = '';
    window.districts.forEach(district => {
      const item = document.createElement('div');
      item.className = 'district-item'; // Use your existing CSS class
      item.textContent = district.name_en;
      item.onclick = () => showDistrictDetail(district.name_en);
      listContainer.appendChild(item);
    });
  }

  function showDistrictDetail(districtName) {
    const district = window.districts.find(d => d.name_en === districtName);
    if (!district) {
      detailContainer.innerHTML = '<p>District not found.</p>';
      return;
    }
    detailContainer.innerHTML = `
      <div class="district-detail-card">
        <h2 class="district-name-en">${district.name_en}</h2>
        <h3 class="district-name-ta">${district.name_ta} மாவட்டம்</h3>
        <p class="district-tagline">${district.tagline}</p>
        <img src="${district.image}" alt="${district.name_en} image" class="district-image" />
        <div class="district-description">
          <p>${district.description}</p>
        </div>
        <div class="district-stats">
          <div class="stat-item"><span class="stat-label">Area:</span> <span class="stat-value">${district.area}</span></div>
          <div class="stat-item"><span class="stat-label">Population:</span> <span class="stat-value">${district.population}</span></div>
          <div class="stat-item"><span class="stat-label">Headquarters:</span> <span class="stat-value">${district.headquarters}</span></div>
          <div class="stat-item"><span class="stat-label">Literacy Rate:</span> <span class="stat-value">${district.literacy}</span></div>
        </div>
        <div class="district-details">
          <div class="detail-section"><h4>Major Towns</h4><p>${district.majorTowns}</p></div>
          <div class="detail-section"><h4>Languages Spoken</h4><p>${district.languages}</p></div>
          <div class="detail-section"><h4>Major Attractions</h4><p>${district.attractions}</p></div>
          <div class="detail-section"><h4>Economy</h4><p>${district.economy}</p></div>
        </div>
        ${district.collector ? `
        <div class="collector-info">
          <h4>District Collector</h4>
          <div class="collector-details">
            <p><strong>${district.collector.name}</strong></p>
            <p>${district.collector.designation}</p>
            <p>📞 ${district.collector.phone}</p>
            <p>📧 ${district.collector.email}</p>
            <p>📍 ${district.collector.address}</p>
          </div>
        </div>
        ` : ''}
        <div class="district-actions">
          <a href="${district.url}" target="_blank" class="official-website-btn">Visit Official Website</a>
        </div>
        ${district.schemes ? `
        <div class="district-schemes">
          <h4>Government Schemes (${district.schemes.length})</h4>
          <table class="schemes-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Scheme Name</th>
                <th>Department</th>
                <th>Beneficiaries</th>
                <th>Budget</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${district.schemes.map(scheme => `
                <tr>
                  <td>${scheme.sno}</td>
                  <td>${scheme.schemeName}</td>
                  <td>${scheme.department}</td>
                  <td>${scheme.beneficiaries}</td>
                  <td>${scheme.budget}</td>
                  <td><span class="status-${scheme.status.toLowerCase().replace(/\s+/g, '-')}">${scheme.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ` : ''}
      </div>
    `;
  }

  renderDistrictList();
  // Optionally, show the first district by default
  // if (window.districts.length > 0) showDistrictDetail(window.districts[0].name_en);
}); 