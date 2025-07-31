// homepage.js
window.addEventListener('DOMContentLoaded', () => {
  // Initialize the district portal
  initializeDistrictPortal();
});

function initializeDistrictPortal() {
  // Render district list and first district
  renderDistrictList();
  
  // Get unique districts for initial rendering
  const uniqueDistricts = districts.filter((district, index, self) => 
    index === self.findIndex(d => d.name_en === district.name_en)
  );
  
  renderDistrict(0, uniqueDistricts);
  
  // Set first district as active
  const list = document.getElementById('districtList');
  if (list && list.children.length > 0) {
    list.children[0].classList.add('active');
  }
  
  // Add loading animation
  addLoadingAnimation();
  
  // Add keyboard shortcuts info
  addKeyboardShortcuts();
}

function addLoadingAnimation() {
  const mainContent = document.getElementById('mainContent');
  if (mainContent) {
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';
    mainContent.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
      mainContent.style.opacity = '1';
      mainContent.style.transform = 'translateY(0)';
    }, 300);
  }
}

function addKeyboardShortcuts() {
  const shortcutsDiv = document.createElement('div');
  shortcutsDiv.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(45, 90, 160, 0.9);
    color: white;
    padding: 15px;
    border-radius: 8px;
    font-size: 12px;
    z-index: 1000;
    max-width: 200px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
    transition: opacity 0.3s ease;
  `;
  shortcutsDiv.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 8px;">⌨️ Keyboard Shortcuts</div>
    <div>↑↓ - Navigate districts</div>
    <div>Click - Select district</div>
  `;
  
  shortcutsDiv.addEventListener('mouseenter', () => {
    shortcutsDiv.style.opacity = '1';
  });
  
  shortcutsDiv.addEventListener('mouseleave', () => {
    shortcutsDiv.style.opacity = '0.8';
  });
  
  document.body.appendChild(shortcutsDiv);
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    shortcutsDiv.style.opacity = '0.3';
  }, 5000);
}

// Add arrow key navigation for districts
document.addEventListener('keydown', (e) => {
  const activeTab = document.querySelector('.district-tab.active');
  if (!activeTab) return;
  
  const allTabs = Array.from(document.querySelectorAll('.district-tab'));
  const currentIndex = allTabs.indexOf(activeTab);
  
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    const nextIndex = (currentIndex + 1) % allTabs.length;
    allTabs[nextIndex].click();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    const prevIndex = currentIndex === 0 ? allTabs.length - 1 : currentIndex - 1;
    allTabs[prevIndex].click();
  }
});
