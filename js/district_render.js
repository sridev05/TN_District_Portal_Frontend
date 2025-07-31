// district_render.js

function formatSchemeRow(scheme) {
  return `<tr>
    <td>${scheme.sno}</td>
    <td>${scheme.schemeName}</td>
    <td>${scheme.department}</td>
    <td>${scheme.beneficiaries}</td>
    <td>${scheme.budget}</td>
    <td><span class="${scheme.status === "ACTIVE" ? "status-active" : "status-progress"}">${scheme.status}</span></td>
  </tr>`;
}

function renderDistrictList() {
  const list = document.getElementById('districtList');
  const countDisplay = document.getElementById('districtCount');
  
  if (!list || !Array.isArray(districts)) return;
  
  // Filter out duplicates and ensure unique districts
  const uniqueDistricts = districts.filter((district, index, self) => 
    index === self.findIndex(d => d.name_en === district.name_en)
  );
  
  // Update district count
  if (countDisplay) {
    countDisplay.innerHTML = `📊 Showing ${uniqueDistricts.length} districts of Tamil Nadu`;
  }
  
  // Render district buttons
  list.innerHTML = uniqueDistricts.map((d, idx) => `
    <button class="district-tab" data-idx="${idx}" data-name="${d.name_en.toLowerCase()}">
      <img src="${d.image}" alt="${d.name_en}" onerror="this.src='https://via.placeholder.com/32x32/2d5aa0/ffffff?text=${d.name_en.charAt(0)}'">
      <span>${d.name_en}</span>
    </button>
  `).join('');
  
  // Add click handlers
  Array.from(list.querySelectorAll('.district-tab')).forEach(btn => {
    btn.onclick = () => {
      const selectedIndex = parseInt(btn.dataset.idx);
      renderDistrict(selectedIndex, uniqueDistricts);
      Array.from(list.children).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Smooth scroll to main content
      document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
    };
  });
}

function renderDistrict(idx = 0, districtArray = null) {
  // Use the provided array or fall back to the global districts array
  const districtsToUse = districtArray || districts;
  
  // Filter out duplicates if using global array
  const uniqueDistricts = districtArray || districts.filter((district, index, self) => 
    index === self.findIndex(d => d.name_en === district.name_en)
  );
  
  const d = uniqueDistricts[idx];
  const mainContent = document.getElementById('mainContent');
  const contentRight = document.querySelector('.content-right');
  
  if (!d) {
    mainContent.innerHTML = "<div style='text-align: center; padding: 50px; color: #666;'>No data available for this district.</div>";
    return;
  }
  
  // Main Content - Left Column
  const out = [];
  
  // District Title
  out.push(`
    <h2>${d.name_en} Information</h2>
  `);
  
  // District Collector Information
  out.push(`
    <div class="collector-info">
      <div class="collector-header">
        <img class="collector-image" src="${d.image}" alt="${d.name_en}" onerror="this.src='https://via.placeholder.com/120x120/2d5aa0/ffffff?text=${d.name_en.charAt(0)}'">
        <div class="collector-details">
          <h3>${d.collector.name}</h3>
          <p>${d.collector.designation}</p>
          <p>📞 <a href="tel:${d.collector.phone}">${d.collector.phone}</a></p>
          <p>✉️ <a href="mailto:${d.collector.email}">${d.collector.email}</a></p>
          <p>📍 ${d.collector.address}</p>
        </div>
      </div>
      <div class="content-text">
        <p>The District Collector is the head of the district administration and is responsible for maintaining law and order, implementing government schemes, and ensuring the overall development of the district.</p>
      </div>
    </div>
  `);
  
  // About District
  out.push(`
    <div class="content-text">
      <h3>About ${d.name_en}</h3>
      <p>${d.description}</p>
    </div>
  `);
  
  // District Map Section
  out.push(`
    <div class="map-section-full">
      <h3>${d.name_en} District Map</h3>
      <div class="map-container-full">
        <iframe class="google-map-full" 
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${d.name_en},Tamil+Nadu,India"
          allowfullscreen>
        </iframe>
        <div class="map-info-overlay">
          <div class="district-stats">
            <h4>District Information</h4>
            <div class="stat-item">
              <span class="stat-label">Area:</span>
              <span class="stat-value">${d.area}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Population:</span>
              <span class="stat-value">${d.population}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Zones:</span>
              <span class="stat-value">${d.administration.zones}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Wards:</span>
              <span class="stat-value">${d.administration.wards}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  
  // District Info Cards
  out.push(`
    <div class="district-info-cards">
      <div class="info-card">
        <h3 class="card-title">District Admin Units</h3>
        <div class="card-content">
          <div class="admin-section">
            <div class="section-name">Revenue</div>
            <div class="detail-item">
              <span class="detail-label">Division:</span>
              <span class="detail-value">${d.administration.revenueDivisions}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Taluk:</span>
              <span class="detail-value">${d.taluks.split(',').length}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Villages:</span>
              <span class="detail-value">${d.administration.villages}</span>
            </div>
          </div>
          <div class="admin-section">
            <div class="section-name">Local Bodies</div>
            <div class="detail-item">
              <span class="detail-label">Corporation:</span>
              <span class="detail-value">1</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Zones:</span>
              <span class="detail-value">${d.administration.zones}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Wards:</span>
              <span class="detail-value">${d.administration.wards}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="info-card">
        <h3 class="card-title">District At a Glance</h3>
        <div class="card-content">
          <div class="admin-section">
            <div class="section-name">General</div>
            <div class="detail-item">
              <span class="detail-label">District:</span>
              <span class="detail-value">${d.name_en}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Headquarters:</span>
              <span class="detail-value">${d.headquarters}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">State:</span>
              <span class="detail-value">Tamil Nadu</span>
            </div>
          </div>
          <div class="admin-section">
            <div class="section-name">Area</div>
            <div class="detail-item">
              <span class="detail-label">Total:</span>
              <span class="detail-value">${d.area}</span>
            </div>
          </div>
          <div class="admin-section">
            <div class="section-name">Population</div>
            <div class="detail-item">
              <span class="detail-label">Total:</span>
              <span class="detail-value">${d.population}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Literacy Rate:</span>
              <span class="detail-value">${d.literacy}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="info-card">
        <h3 class="card-title">Departments</h3>
        <div class="department-list">
          <div class="department-item">
            <a href="#">Adi Dravidar and Tribal Welfare</a>
          </div>
          <div class="department-item">
            <a href="#">Backward Classes and Minorities Welfare</a>
          </div>
          <div class="department-item">
            <a href="#">Differently Abled Welfare Office</a>
          </div>
          <div class="department-item">
            <a href="#">Social Welfare</a>
          </div>
          <div class="department-item">
            <a href="#">TAHDCO</a>
          </div>
        </div>
        <button class="more-btn">More Departments</button>
      </div>
    </div>
  `);
  
  // Government Schemes Section
  out.push(`
    <div class="schemes-section">
      <div class="schemes-header">
        <div class="schemes-title">Government Schemes</div>
        <div class="schemes-controls">
          <input type="text" class="table-search" placeholder="Search schemes...">
          <button class="control-btn">Export to Excel</button>
          <button class="control-btn">Print</button>
        </div>
      </div>
      <div style="overflow-x: auto;">
        <table class="schemes-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>SCHEME NAME</th>
              <th>DEPARTMENT</th>
              <th>BENEFICIARIES</th>
              <th>BUDGET (₹ CRORES)</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            ${d.schemes.map(formatSchemeRow).join('')}
          </tbody>
        </table>
      </div>
      <div style="margin-top: 20px; text-align: center;">
        <a class="view-all-btn" href="${d.url}" target="_blank" rel="noopener">
          View All Schemes & Apply Online →
        </a>
      </div>
    </div>
  `);
  
  mainContent.innerHTML = out.join('\n');
  
  // Right Column Content - Simple static content without carousels
  contentRight.innerHTML = `
    <div class="section-title">Quick Links</div>
    <div class="info-card">
      <h3 class="card-title">Important Links</h3>
      <div class="department-list">
        <div class="department-item">
          <a href="${d.url}" target="_blank">Official District Portal</a>
        </div>
        <div class="department-item">
          <a href="#">District Collector Office</a>
        </div>
        <div class="department-item">
          <a href="#">Government Schemes</a>
        </div>
        <div class="department-item">
          <a href="#">Contact Information</a>
        </div>
        <div class="department-item">
          <a href="#">Emergency Numbers</a>
        </div>
      </div>
    </div>
    
    <div class="info-card">
      <h3 class="card-title">District Statistics</h3>
      <div class="stat-item">
        <span class="stat-label">Total Schemes:</span>
        <span class="stat-value">${d.schemes.length}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Active Schemes:</span>
        <span class="stat-value">${d.schemes.filter(s => s.status === 'ACTIVE').length}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Total Budget:</span>
        <span class="stat-value">₹${(d.schemes.reduce((sum, scheme) => sum + parseInt(scheme.budget.replace(/[^\d]/g, '') || 0), 0)/100).toFixed(0)} Cr</span>
      </div>
    </div>
  `;
  
  // Add smooth animations
  setTimeout(() => {
    const cards = mainContent.querySelectorAll('.info-card, .schemes-section, .collector-info, .map-section-full');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 100);
}

// Function to get district data by name
function getDistrictData(districtName) {
    return districts.find(district => district.name_en === districtName);
}

// Function to update page content with district data
function updateDistrictContent(districtData) {
    if (!districtData) {
        console.error('District data not found');
        return;
    }

    // Update page title
    document.title = `${districtData.name_en} District Portal`;

    // Update main heading
    const mainHeading = document.querySelector('.content-left h2');
    if (mainHeading) {
        mainHeading.textContent = `${districtData.name_en} Information`;
    }

    // Update collector information
    const collectorInfo = document.querySelector('.collector-info');
    if (collectorInfo && districtData.collector) {
        collectorInfo.innerHTML = `
            <div class="collector-header">
                <img
                    src="../image/che_dis_col.jpeg"
                    alt="District Collector"
                    class="collector-image"
                />
                <div class="collector-details">
                    <h3>${districtData.collector.name}</h3>
                    <p><strong>${districtData.collector.designation}</strong></p>
                    <p>Phone: ${districtData.collector.phone}</p>
                    <p>Email: ${districtData.collector.email}</p>
                </div>
            </div>
            <p>
                The District Collector is the chief administrative officer of the
                district and is responsible for the overall administration, revenue
                collection, law and order maintenance, and implementation of
                government schemes and programs.
            </p>
        `;
    }

    // Update content text
    const contentText = document.querySelector('.content-text');
    if (contentText) {
        contentText.innerHTML = `
            <p>${districtData.description}</p>
        `;
    }

    // Update map section title
    const mapTitle = document.querySelector('.map-section-full h3');
    if (mapTitle) {
        mapTitle.textContent = `${districtData.name_en} District Map`;
    }

    // Update map info overlay
    const mapInfo = document.querySelector('.map-info-overlay .district-stats');
    if (mapInfo && districtData.administration) {
        mapInfo.innerHTML = `
            <h4>District Information</h4>
            <div class="stat-item">
                <span class="stat-label">Area:</span>
                <span class="stat-value">${districtData.area}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Population:</span>
                <span class="stat-value">${districtData.population}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Zones:</span>
                <span class="stat-value">${districtData.administration.zones}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Villages:</span>
                <span class="stat-value">${districtData.administration.villages}</span>
            </div>
        `;
    }

    // Update district info cards
    updateDistrictInfoCards(districtData);

    // Update schemes table
    updateSchemesTable(districtData);

    // Update banner background (if district has specific image)
    if (districtData.image) {
        const banner = document.querySelector('.banner');
        if (banner) {
            banner.style.backgroundImage = `url("${districtData.image}")`;
        }
    }
}

// Function to update district info cards
function updateDistrictInfoCards(districtData) {
    const infoCards = document.querySelectorAll('.info-card');
    
    if (infoCards.length >= 3) {
        // First card - District Admin Units
        const adminCard = infoCards[0];
        if (adminCard) {
            adminCard.innerHTML = `
                <h3 class="card-title">District Admin Units</h3>
                <div class="card-content">
                    <div class="admin-section">
                        <h4 class="section-name">Revenue</h4>
                        <div class="detail-item">
                            <span class="detail-label">Division:</span>
                            <span class="detail-value">${districtData.administration.revenueDivisions}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Taluks:</span>
                            <span class="detail-value">${districtData.taluks.split(',').length}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Villages:</span>
                            <span class="detail-value">${districtData.administration.villages}</span>
                        </div>
                    </div>

                    <div class="admin-section">
                        <h4 class="section-name">Local Bodies</h4>
                        <div class="detail-item">
                            <span class="detail-label">Corporation:</span>
                            <span class="detail-value">1</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Zones:</span>
                            <span class="detail-value">${districtData.administration.zones}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Wards:</span>
                            <span class="detail-value">${districtData.administration.wards}</span>
                        </div>
                    </div>

                    <div class="admin-section">
                        <h4 class="section-name">Constituencies</h4>
                        <div class="detail-item">
                            <span class="detail-label">Assembly:</span>
                            <span class="detail-value">16</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Lok Sabha:</span>
                            <span class="detail-value">3</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Second card - District At a Glance
        const glanceCard = infoCards[1];
        if (glanceCard) {
            glanceCard.innerHTML = `
                <h3 class="card-title">District At a Glance</h3>
                <div class="card-content">
                    <div class="admin-section">
                        <h4 class="section-name">General:</h4>
                        <div class="detail-item">
                            <span class="detail-label">District:</span>
                            <span class="detail-value">${districtData.name_en}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">HeadQuarters:</span>
                            <span class="detail-value">${districtData.headquarters}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">State:</span>
                            <span class="detail-value">TamilNadu</span>
                        </div>
                    </div>

                    <div class="admin-section">
                        <h4 class="section-name">Area:</h4>
                        <div class="detail-item">
                            <span class="detail-label">Total:</span>
                            <span class="detail-value">${districtData.area}</span>
                        </div>
                    </div>

                    <div class="admin-section">
                        <h4 class="section-name">Population:</h4>
                        <div class="detail-item">
                            <span class="detail-label">Total:</span>
                            <span class="detail-value">${districtData.population}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Literacy:</span>
                            <span class="detail-value">${districtData.literacy}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Third card - Departments (keeping generic for now)
        const deptCard = infoCards[2];
        if (deptCard) {
            deptCard.innerHTML = `
                <h3 class="card-title">Departments</h3>
                <div class="card-content">
                    <div class="department-list">
                        <div class="department-item">
                            <a href="#">Adi Dravidar and Tribal Welfare</a>
                        </div>
                        <div class="department-item">
                            <a href="#">Backward Classes and Minorities Welfare</a>
                        </div>
                        <div class="department-item">
                            <a href="#">Differently Abled Welfare Office</a>
                        </div>
                        <div class="department-item"><a href="#">Social Welfare</a></div>
                        <div class="department-item"><a href="#">TAHDCO</a></div>
                    </div>
                </div>
            `;
        }
    }
}

// Function to update schemes table
function updateSchemesTable(districtData) {
    const tableBody = document.querySelector('#schemesTable tbody');
    if (tableBody && districtData.schemes) {
        tableBody.innerHTML = '';
        
        districtData.schemes.forEach(scheme => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${scheme.sno}</td>
                <td>${scheme.schemeName}</td>
                <td>${scheme.department}</td>
                <td>${scheme.beneficiaries}</td>
                <td>${scheme.budget}</td>
                <td><span class="status-${scheme.status.toLowerCase().replace(' ', '-')}">${scheme.status}</span></td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get selected district from localStorage
    const selectedDistrict = localStorage.getItem('selectedDistrict');
    
    if (selectedDistrict) {
        // Get district data
        const districtData = getDistrictData(selectedDistrict);
        
        if (districtData) {
            // Update page content
            updateDistrictContent(districtData);
        } else {
            console.error('District data not found for:', selectedDistrict);
            // Fallback to default content or show error
        }
    } else {
        console.error('No district selected');
        // Fallback to default content or show error
    }
});
