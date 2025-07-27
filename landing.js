document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('districts-list');
  if (!container || !window.TamilNaduDistricts) return;

  // Use the same workingImages mapping as in data.js
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

  const districts = window.TamilNaduDistricts.getAllDistrictNames();
  const allDistricts = window.TamilNaduDistricts.exportData ? JSON.parse(window.TamilNaduDistricts.exportData()) : [];

  allDistricts.forEach(district => {
    const card = document.createElement('div');
    card.className = 'district-card';
    card.style.cursor = 'pointer';
    const imageUrl = workingImages[district.name_en] || district.image;
    card.innerHTML = `
      <img src="${imageUrl}" alt="${district.name_en}" class="district-image" />
      <p class="district-name">${district.name_en}</p>
    `;
    card.onclick = function() {
      window.location.href = `district_page.html?district=${encodeURIComponent(district.name_en)}`;
    };
    container.appendChild(card);
  });
}); 