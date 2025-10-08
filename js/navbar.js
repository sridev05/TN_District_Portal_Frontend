(function injectNavbar() {
  function getProjectRootPrefix() {
    var path = window.location.pathname.replace(/\\/g, '/');
    var parts = path.split('/').filter(Boolean);
    var idx = parts.lastIndexOf('TN_District_Portal_Frontend');
    if (idx === -1) return '';
    var after = parts.slice(idx + 1);
    var depth = after.length;
    if (depth > 0 && /\./.test(after[after.length - 1])) depth -= 1; // exclude filename
    var prefix = '';
    for (var i = 0; i < depth; i++) prefix += '../';
    return prefix;
  }

  var prefix = getProjectRootPrefix();
  var chennai = prefix + 'chennai/';

  var links = {
    home: chennai + 'menu.html',
    about_base: chennai + 'About District/collectors_lists.html',
    about: {
      history: chennai + 'About District/history.html',
      collectors: chennai + 'About District/collectors_lists.html',
      elected: chennai + 'About District/Elected_Representatives.html',
      who: chennai + 'About District/who_is_who.html',
      local: chennai + 'About District/local_bodies.html',
      egovern: chennai + 'About District/eGovernance.html'
    },
    dir_base: chennai + 'Directory/Contact_Directory.html',
    dir: {
      contact: chennai + 'Directory/Contact_Directory.html',
      taluk: chennai + 'Directory/Taluk_Officials_Contact.html',
      other: chennai + 'Directory/Other_Dept_Details.html',
      geo: chennai + 'Directory/AssDirector_of_Geo.html',
      dic: chennai + 'Directory/Dist_Industries_Centre.html',
      helpline: chennai + 'Directory/helpline.html'
    },
    dept_base: chennai + 'departments/Minorities_Welfare.html',
    dept: {
      minorities: chennai + 'departments/Minorities_Welfare.html',
      tribal: chennai + 'departments/Tribal_Welfare.html'
    },
    diff_base: chennai + 'DIFFERENTLY ABLED/Acts,Rules.html',
    diff: {
      acts: chennai + 'DIFFERENTLY ABLED/Acts,Rules.html',
      schemes: chennai + 'DIFFERENTLY ABLED/Diff__Welfare_Schemes.html',
      sites: chennai + 'DIFFERENTLY ABLED/Useful_Websites.html'
    },
    social_base: chennai + 'Social_Welfare/Details_of_Gov.html',
    social: {
      details: chennai + 'Social_Welfare/Details_of_Gov.html',
      notify: chennai + 'Social_Welfare/Notifi_for_Girl_Protection.html',
      harassment: chennai + 'Social_Welfare/Sexual_Harassments.html',
      schemes: chennai + 'Social_Welfare/Social_Welfare_Schemes.html'
    },
    tourism_base: chennai + 'Tourism/Places_of_Interest.html',
    tourism: {
      interest: chennai + 'Tourism/Places_of_Interest.html',
      places: chennai + 'Tourism/Tourist_Places.html'
    }
  };

  if (!document.getElementById('navbar-shared-styles')) {
    var style = document.createElement('style');
    style.id = 'navbar-shared-styles';
    style.textContent = `
      .navbar{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background:#fff;color:#333;border-bottom:1px solid #e0e0e0;position:relative;z-index:1000}
      .navbar-left{display:flex;align-items:center;gap:15px}
      .logo{height:36px;width:auto}
      .title{font-size:20px;font-weight:600;color:#333;white-space:nowrap}
      .navbar-center{display:flex;align-items:center;gap:0;position:relative}
      .navbar-center .nav{list-style:none;display:flex;gap:16px}
      .navbar-center .nav>li{position:relative}
      .navbar-center .nav>li>a{text-decoration:none;color:#333;font-weight:600;padding:8px 12px;transition:color .3s,background .2s,box-shadow .2s;border-radius:14px}
      .navbar-center .nav>li>a:hover{color:#28a745;background:#f6f8fa;box-shadow:0 1px 4px rgba(0,0,0,.04)}
      .navbar-center .sub-menu{list-style:none;position:absolute;left:0;top:calc(100% + 8px);min-width:220px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 8px 20px rgba(0,0,0,.08);padding:6px 0;display:none;z-index:1000}
      .navbar-center .sub-menu li a{display:block;padding:8px 12px;color:#333;font-size:14px;text-decoration:none;white-space:nowrap}
      .navbar-center .sub-menu li a:hover{background:#f5f7fb;color:#2d5aa0}
      .navbar-center .has-sub:hover>.sub-menu{display:block}
      .navbar-center .sub-menu .has-sub:hover>.sub-menu{display:block;left:100%;top:0}
      .navbar-right input{padding:8px 15px;border:1px solid #ccc;font-size:14px;width:260px;outline:none;border-radius:20px}
      .mobile-menu-btn{display:none;background:none;border:none;color:#333;font-size:24px;cursor:pointer;margin-left:10px}
      @media(max-width:768px){.navbar-center .nav{display:none}.mobile-menu-btn{display:block}}
      .mobile-nav{display:none;background:#fff;padding:20px;border-bottom:1px solid #e0e0e0}
      .mobile-nav.active{display:block}
      .mobile-nav-item{display:block;color:#333;text-decoration:none;padding:12px 0;font-size:16px}
      .mobile-nav-item:hover{color:#28a745}
    `;
    document.head.appendChild(style);
  }

  var container = document.getElementById('site-navbar');
  if (!container) {
    container = document.createElement('div');
    container.id = 'site-navbar';
    if (document.body.firstChild) {
      document.body.insertBefore(container, document.body.firstChild);
    } else {
      document.body.appendChild(container);
    }
  }

  container.innerHTML = '' +
    '<header class="navbar">\n' +
    '  <div class="navbar-left">\n' +
    '    <img src="https://aed.tn.gov.in/media/filer_public_thumbnails/filer_public/ea/c9/eac9c84e-a02c-4733-8a10-331dc8d1e1c3/tn_logo__eng.png__1200.0x1317.0_subsampling-2.png" alt="Tamil Nadu Logo" class="logo" />\n' +
    '    <span class="title">Tamil Nadu District Portal</span>\n' +
    '  </div>\n' +
    '  <nav class="navbar-center">\n' +
    '    <ul class="nav" role="menubar">\n' +
    '      <li class="menu-item" role="none"><a role="menuitem" href="' + links.home + '">Home</a></li>\n' +
    '      <li class="menu-item has-sub" aria-haspopup="true" role="none" aria-expanded="false">\n' +
    '        <a role="menuitem" href="' + links.about_base + '">About District</a>\n' +
    '        <ul class="sub-menu" role="menu" aria-hidden="true">\n' +
    '          <li role="none"><a role="menuitem" href="' + links.about.history + '">History</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.about.collectors + '">Collectors List</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.about.elected + '">Elected Representatives</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.about.who + '">Who’s Who</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.about.local + '">Local Bodies</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.about.egovern + '">eGovernance</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="menu-item has-sub" aria-haspopup="true" role="none" aria-expanded="false">\n' +
    '        <a role="menuitem" href="' + links.dir_base + '">Directory</a>\n' +
    '        <ul class="sub-menu" role="menu" aria-hidden="true">\n' +
    '          <li role="none"><a role="menuitem" href="' + links.dir.contact + '">Contact Directory</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.dir.taluk + '">Taluk Officials Contact</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.dir.other + '">Other Dept Details</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.dir.geo + '">Assistant Director of Geology</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.dir.dic + '">District Industries Centre</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.dir.helpline + '">Helpline</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="menu-item has-sub" aria-haspopup="true" role="none" aria-expanded="false">\n' +
    '        <a role="menuitem" href="' + links.dept_base + '">Departments</a>\n' +
    '        <ul class="sub-menu" role="menu" aria-hidden="true">\n' +
    '          <li role="none"><a role="menuitem" href="' + links.dept.minorities + '">Minorities Welfare</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.dept.tribal + '">Tribal Welfare</a></li>\n' +
    '          <li class="has-sub" role="none">\n' +
    '            <a role="menuitem" href="' + links.diff_base + '">Differently Abled</a>\n' +
    '            <ul class="sub-menu" role="menu" aria-hidden="true">\n' +
    '              <li role="none"><a role="menuitem" href="' + links.diff.acts + '">Acts, Rules</a></li>\n' +
    '              <li role="none"><a role="menuitem" href="' + links.diff.schemes + '">Welfare Schemes</a></li>\n' +
    '              <li role="none"><a role="menuitem" href="' + links.diff.sites + '">Useful Websites</a></li>\n' +
    '            </ul>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="menu-item has-sub" aria-haspopup="true" role="none" aria-expanded="false">\n' +
    '        <a role="menuitem" href="' + links.social_base + '">Social Welfare</a>\n' +
    '        <ul class="sub-menu" role="menu" aria-hidden="true">\n' +
    '          <li role="none"><a role="menuitem" href="' + links.social.details + '">Details of Govt</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.social.notify + '">Notification for Girl Protection</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.social.harassment + '">Sexual Harassments</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.social.schemes + '">Social Welfare Schemes</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="menu-item has-sub" aria-haspopup="true" role="none" aria-expanded="false">\n' +
    '        <a role="menuitem" href="' + links.tourism_base + '">Tourism</a>\n' +
    '        <ul class="sub-menu" role="menu" aria-hidden="true">\n' +
    '          <li role="none"><a role="menuitem" href="' + links.tourism.interest + '">Places of Interest</a></li>\n' +
    '          <li role="none"><a role="menuitem" href="' + links.tourism.places + '">Tourist Places</a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </nav>\n' +
    '  <div class="navbar-right">\n' +
    '    <input type="text" placeholder="Search..." />\n' +
    '    <button class="mobile-menu-btn" onclick="(function(){var n=document.getElementById(\'mobileNav\'); if(n) n.classList.toggle(\'active\');})()">☰</button>\n' +
    '  </div>\n' +
    '</header>\n' +
    '<nav class="mobile-nav" id="mobileNav">\n' +
    '  <a class="mobile-nav-item" href="' + links.home + '">Home</a>\n' +
    '  <a class="mobile-nav-item" href="' + links.about_base + '">About District</a>\n' +
    '  <a class="mobile-nav-item" href="' + links.dir_base + '">Directory</a>\n' +
    '  <a class="mobile-nav-item" href="' + links.dept_base + '">Departments</a>\n' +
    '  <a class="mobile-nav-item" href="' + links.social_base + '">Social Welfare</a>\n' +
    '  <a class="mobile-nav-item" href="' + links.tourism_base + '">Tourism</a>\n' +
    '</nav>';

  var legacyHeaders = document.querySelectorAll('header.navbar');
  legacyHeaders.forEach(function(h){
    if (h && !container.contains(h)) {
      h.style.display = 'none';
    }
  });
})();
