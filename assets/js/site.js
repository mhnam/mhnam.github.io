/* ═══════════════════════════════════════════════════════════
   assets/js/site.js — renders every page from content.js.
   You should never need to edit this file to update the site;
   edit content.js instead.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var S = window.SITE || {};
  var page = document.body.getAttribute('data-page') || 'home';
  var M = S.menu || {};
  var on = function (k) { return M[k] !== false; };
  var projSub = M.projectsSubmenu !== false;
  var teachSub = M.teachingSubmenu !== false;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ── theme ── */
  try { if (localStorage.getItem('mn-theme') === 'dark') document.body.classList.add('dark'); } catch (e) {}
  function toggleTheme() {
    var d = !document.body.classList.contains('dark');
    document.body.classList.toggle('dark', d);
    try { localStorage.setItem('mn-theme', d ? 'dark' : 'light'); } catch (e) {}
  }

  /* ── navigation ── */
  function navLink(href, label, key, activeKey, cls) {
    if (key && !on(key)) return '';
    return '<a href="' + href + '" class="' + (cls || 'nav') + (page === activeKey ? ' active' : '') + '">' + label + '</a>';
  }
  function sideGroup(key, label, href, items, sub, activeKey) {
    if (!on(key)) return '';
    if (!sub) return navLink(href, label, null, activeKey);
    var links = (items || []).map(function (i) {
      return '<a href="' + esc(i.href) + '" class="subnav">' + esc(i.name || i.label) + '</a>';
    }).join('');
    return '<div class="navgroup"><div class="navrow">' +
      navLink(href, label, null, activeKey) +
      '<button class="caret" data-sub="' + key + '" aria-label="toggle ' + label + ' menu">+</button></div>' +
      '<div class="submenu" data-subpanel="' + key + '">' + links + '</div></div>';
  }

  var sidebar = document.getElementById('sidebar');
  if (sidebar) {
    var p = S.profile || {};
    sidebar.innerHTML =
      '<a class="idlink" href="index.html">' +
      '<img class="portrait" src="assets/photo.jpeg" alt="' + esc(p.name) + '">' +
      '<div class="name">' + esc(p.name) + '</div>' +
      '<div class="role">' + esc(p.role) + '</div></a>' +
      '<div class="rule"></div>' +
      '<nav class="navcol">' +
      navLink('index.html', 'About', null, 'home') +
      navLink('research.html', 'Research', 'research', 'research') +
      navLink('blog.html', 'Blog', 'blog', 'blog') +
      sideGroup('projects', 'Projects', 'projects.html', S.projects, projSub, 'projects') +
      navLink('talks.html', 'Talks', 'talks', 'talks') +
      sideGroup('teaching', 'Teaching', 'teaching.html', S.teachingMenu, teachSub, 'teaching') +
      (on('cv') ? '<a class="cvbtn" href="files/cv/Minhyuk_Nam_CV.pdf">Download CV</a>' : '') +
      '</nav>' +
      '<div class="contacts">' +
      (p.sidebarContacts || []).map(function (c) { return '<a href="' + esc(c.href) + '">' + esc(c.label) + '</a>'; }).join('') +
      '<button class="themebtn" aria-label="toggle dark mode" title="Toggle dark mode">\u25D0</button></div>';
  }

  var mob = document.getElementById('mobilebar');
  if (mob) {
    function mBtn(key, label, href, sub, activeKey) {
      if (!on(key)) return '';
      if (!sub) return navLink(href, label, null, activeKey);
      return '<button class="navbtn' + (page === activeKey ? ' active' : '') + '" data-sub="m-' + key + '">' + label + ' <span data-caret="m-' + key + '">+</span></button>';
    }
    function mPanel(key, label, items) {
      if (!on(key)) return '';
      return '<div class="mpanel" data-subpanel="m-' + key + '"><span class="plabel">' + label + '</span>' +
        (items || []).map(function (i) { return '<a href="' + esc(i.href) + '">' + esc(i.name || i.label) + '</a>'; }).join('') + '</div>';
    }
    mob.innerHTML =
      '<div class="bar"><a class="brand" href="index.html"><span class="mark">\u2014</span> M. Nam</a>' +
      '<div class="links">' +
      navLink('research.html', 'Research', 'research', 'research') +
      navLink('blog.html', 'Blog', 'blog', 'blog') +
      (projSub ? mBtn('projects', 'Projects', 'projects.html', true, 'projects') : navLink('projects.html', 'Projects', 'projects', 'projects')) +
      navLink('talks.html', 'Talks', 'talks', 'talks') +
      (teachSub ? mBtn('teaching', 'Teaching', 'teaching.html', true, 'teaching') : navLink('teaching.html', 'Teaching', 'teaching', 'teaching')) +
      (on('cv') ? '<a class="cvlink" href="files/cv/Minhyuk_Nam_CV.pdf">CV</a>' : '') +
      '<button class="themebtn" aria-label="toggle dark mode" title="Toggle dark mode">\u25D0</button>' +
      '</div></div>' +
      (projSub ? mPanel('projects', 'Projects', S.projects) : '') +
      (teachSub ? mPanel('teaching', 'Teaching', S.teachingMenu) : '');
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('.themebtn')) { toggleTheme(); return; }
    var c = e.target.closest('[data-sub]');
    if (c) {
      var k = c.getAttribute('data-sub');
      document.querySelectorAll('[data-subpanel]').forEach(function (pn) {
        if (pn.getAttribute('data-subpanel') === k) pn.classList.toggle('open');
        else pn.classList.remove('open');
      });
      document.querySelectorAll('[data-sub]').forEach(function (b) {
        var open = document.querySelector('[data-subpanel="' + b.getAttribute('data-sub') + '"].open');
        var t = b.querySelector('[data-caret]') || b;
        if (t === b && b.classList.contains('caret')) b.textContent = open ? '\u2212' : '+';
        else if (t !== b) t.textContent = open ? '\u2212' : '+';
      });
    }
  });

  /* ── shared renderers ── */
  function paperHTML(pp) {
    var meta = '';
    if (pp.jmp) meta += '<span class="jmp">Job Market Paper</span>';
    if (pp.coauthors) meta += 'with ' + esc(pp.coauthors) + ' ';
    var abs = pp.abstract
      ? '<details><summary></summary><div class="abstract">' + esc(pp.abstract) + '</div></details>'
      : '';
    return '<div class="paper"><div class="title">' + esc(pp.title) + '</div>' +
      (meta ? '<div class="meta">' + meta + '</div>' : '') + abs + '</div>';
  }
  function papersHTML(sort) {
    var wp = (S.workingPapers || []).slice();
    if (sort === 'recent') wp.sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    if (sort === 'topic') {
      var groups = {};
      wp.forEach(function (pp) { var k = pp.topic || 'Other'; (groups[k] = groups[k] || []).push(pp); });
      return Object.keys(groups).sort().map(function (k) {
        var items = groups[k].slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
        return '<div class="topichead">' + esc(k) + '</div>' + items.map(paperHTML).join('');
      }).join('');
    }
    return wp.map(paperHTML).join('');
  }
  function pubHTML(pb) {
    var links = (pb.links || []).map(function (l) { return '<a href="' + esc(l.href) + '">' + esc(l.label) + '</a>'; }).join('');
    return '<div class="pub"><span class="year">' + esc(pb.year) + '</span><div>' +
      '<div class="title">' + esc(pb.title) + '</div>' +
      '<div class="meta">with ' + esc(pb.coauthors) + ' \u00B7 <em>' + esc(pb.journal) + '</em></div>' +
      (links ? '<div class="links">' + links + '</div>' : '') + '</div></div>';
  }
  function postRow(po, showTopic) {
    return '<div class="row"><span class="when">' + esc(po.date) + '</span><span class="what">' +
      '<a href="' + esc(po.href) + '">' + esc(po.title) + '</a>' +
      (showTopic && po.topic ? '<span class="chip">' + esc(po.topic) + '</span>' : '') + '</span></div>';
  }
  function postsHTML(sort) {
    var posts = (S.posts || []).slice();
    if (sort === 'topic') {
      var groups = {};
      posts.forEach(function (po) { var k = po.topic || 'Other'; (groups[k] = groups[k] || []).push(po); });
      return Object.keys(groups).sort().map(function (k) {
        return '<div class="topichead" style="margin-top:14px">' + esc(k) + '</div>' + groups[k].map(function (po) { return postRow(po, false); }).join('');
      }).join('');
    }
    return posts.map(function (po) { return postRow(po, false); }).join('');
  }
  function sortButtons(el, options, render) {
    var current = options[0].id;
    function draw() {
      el.innerHTML = options.map(function (o) {
        return '<button class="sortbtn' + (o.id === current ? ' active' : '') + '" data-s="' + o.id + '">' + o.label + '</button>';
      }).join('');
      render(current);
    }
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-s]');
      if (b) { current = b.getAttribute('data-s'); draw(); }
    });
    draw();
  }
  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  /* ── home page ── */
  if (page === 'home') {
    var pr = S.profile || {};
    fill('hero',
      (pr.taglineOn && pr.tagline ? '<h2 class="tagline">' + esc(pr.tagline) + '</h2>' : '') +
      '<p class="bio">' + esc(pr.bio) + '</p>' +
      '<p class="fields"><strong>Fields:</strong> ' + esc(pr.fields) + '</p>' +
      '<div class="quicklinks">' + (pr.links || []).map(function (l) { return '<a href="' + esc(l.href) + '">' + esc(l.label) + '</a>'; }).join('') + '</div>');
    var mobhero = document.getElementById('mobhero');
    if (mobhero) mobhero.innerHTML =
      '<img class="portrait" src="assets/photo.jpeg" alt="' + esc(pr.name) + '">' +
      '<h1>' + esc(pr.name) + '</h1><div class="role">' + esc(pr.role) + '</div>';

    function section(label, inner, link) {
      return '<div class="section"><div class="sechead"><div class="sechead-left"><span class="dash"></span><span class="seclabel">' + label + '</span></div>' +
        (link ? '<a class="seclink" href="' + link.href + '">' + link.label + '</a>' : '') + '</div>' + inner + '</div>';
    }
    var builders = {
      news: function () {
        if (!(S.news || []).length) return '';
        return section('News', S.news.map(function (n) {
          return '<div class="row"><span class="when">' + esc(n.date) + '</span><span class="what" style="font-weight:400;color:var(--body)">' + esc(n.text) + '</span></div>';
        }).join(''));
      },
      research: function () { return section('Working papers', papersHTML('listed')); },
      publications: function () { return section('Publications', (S.publications || []).map(pubHTML).join(''), { href: 'research.html#publications', label: 'All publications \u2192' }); },
      blog: function () { return section('Blog', (S.posts || []).slice(0, 3).map(function (po) { return postRow(po, false); }).join(''), { href: 'blog.html', label: 'All posts \u2192' }); },
      projects: function () {
        return section('Projects', (S.projects || []).map(function (pj) {
          return '<div class="projrow"><div><a class="pname" href="' + esc(pj.href) + '">' + esc(pj.name) + '</a><span class="pdesc"> \u2014 ' + esc(pj.blurb) + '</span></div><a class="plink" href="' + esc(pj.href) + '">' + esc(pj.linkLabel) + '</a></div>';
        }).join(''), { href: 'projects.html', label: 'All projects \u2192' });
      },
      talks: function () {
        return section('Talks', (S.talks || []).map(function (tk) {
          return '<div class="row" style="grid-template-columns:48px 1fr"><span class="when">' + esc(tk.year) + '</span><span class="what" style="font-weight:400;color:var(--body)">' + esc(tk.title) + ' \u2014 <span style="color:var(--muted)">' + esc(tk.venue) + '</span></span></div>';
        }).join(''));
      },
      teaching: function () {
        return section('Teaching', (S.teaching || []).map(function (t) {
          return '<div class="school" style="margin-top:6px">' + esc(t.school) + ' <span class="period">' + esc(t.period) + '</span></div>' +
            (t.groups || []).map(function (g) {
              return '<div class="courserow"><span class="level">' + esc(g.level) + '</span><span class="courses">' + esc(g.courses) + '</span></div>';
            }).join('');
        }).join(''));
      }
    };
    var order = S.homeSections || ['news', 'research', 'publications', 'blog', 'projects', 'talks', 'teaching'];
    fill('home-sections', order.map(function (k) { return builders[k] ? builders[k]() : ''; }).join('') +
      '<div class="footer"><span>' + esc(S.footer) + (S.updated ? ' \u00B7 Updated ' + esc(S.updated) : '') + '</span><span>' + esc(pr.location) + '</span></div>');
  }

  /* ── research page ── */
  if (page === 'research') {
    var sortEl = document.getElementById('paper-sort');
    if (sortEl) sortButtons(sortEl,
      [{ id: 'listed', label: 'Listed' }, { id: 'recent', label: 'Recent' }, { id: 'topic', label: 'Topic' }],
      function (s) { fill('papers', papersHTML(s)); });
    fill('pubs', (S.publications || []).map(pubHTML).join(''));
  }

  /* ── blog page ── */
  if (page === 'blog') {
    var bsortEl = document.getElementById('post-sort');
    if (bsortEl) sortButtons(bsortEl,
      [{ id: 'recent', label: 'Recent' }, { id: 'topic', label: 'Topic' }],
      function (s) { fill('posts', postsHTML(s)); });
  }

  /* ── projects page ── */
  if (page === 'projects') {
    fill('projcards', (S.projects || []).map(function (pj) {
      return '<div class="projcard"><div class="pname">' + esc(pj.name) + '</div><p>' + esc(pj.blurb) + '</p>' +
        '<div class="plinks"><a href="' + esc(pj.href) + '">' + esc(pj.linkLabel) + '</a></div></div>';
    }).join(''));
  }

  /* ── teaching page ── */
  if (page === 'teaching') {
    fill('teachlist', (S.teaching || []).map(function (t) {
      return '<div class="school">' + esc(t.school) + ' <span class="period">' + esc(t.period) + '</span></div>' +
        (t.groups || []).map(function (g) {
          return '<div class="courserow"><span class="level">' + esc(g.level) + '</span><span class="courses">' + esc(g.courses) + '</span></div>';
        }).join('');
    }).join(''));
    fill('coursepages', (S.teachingMenu || []).map(function (tm) {
      return '<div class="projrow"><a class="pname" href="' + esc(tm.href) + '">' + esc(tm.label) + '</a><a class="plink" href="' + esc(tm.href) + '">Materials \u2192</a></div>';
    }).join(''));
  }

  /* ── talks page ── */
  if (page === 'talks') {
    fill('talklist', (S.talks || []).map(function (tk) {
      return '<div class="pub"><span class="year">' + esc(tk.year) + '</span><div>' +
        '<div class="title">' + esc(tk.title) + '</div><div class="meta">' + esc(tk.venue) + '</div></div></div>';
    }).join(''));
  }

  /* ── demo chart (project page) ── */
  var chartEl = document.getElementById('eutl-chart');
  if (chartEl) {
    var venues = {
      auction: [12, 18, 24, 30, 34, 31, 38, 44, 41, 48, 52, 58],
      exchange: [30, 34, 29, 40, 46, 52, 49, 58, 62, 60, 68, 74],
      otc: [22, 20, 26, 24, 30, 28, 34, 31, 36, 33, 38, 35]
    };
    var years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
    function drawChart(v) {
      var data = venues[v], W = 760, H = 200, pad = 34, max = 80;
      var x = function (i) { return pad + i * ((W - pad - 12) / (data.length - 1)); };
      var y = function (val) { return H - 26 - (val / max) * (H - 44); };
      var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;display:block">';
      for (var g = 0; g <= 4; g++) {
        var gy = y(g * 20);
        svg += '<line x1="' + pad + '" x2="' + (W - 12) + '" y1="' + gy + '" y2="' + gy + '" stroke="var(--hair)" stroke-width="1"></line>';
        svg += '<text x="' + (pad - 8) + '" y="' + (gy + 3) + '" text-anchor="end" font-size="9.5" fill="var(--faint)">' + (g * 20) + '</text>';
      }
      years.forEach(function (yr, i) {
        if (i % 2 === 0) svg += '<text x="' + x(i) + '" y="' + (H - 8) + '" text-anchor="middle" font-size="9.5" fill="var(--faint)">' + yr + '</text>';
      });
      svg += '<polyline points="' + data.map(function (val, i) { return x(i) + ',' + y(val); }).join(' ') + '" fill="none" stroke="#C41230" stroke-width="2"></polyline>';
      data.forEach(function (val, i) {
        svg += '<circle cx="' + x(i) + '" cy="' + y(val) + '" r="3" fill="var(--bg)" stroke="#C41230" stroke-width="1.5"><title>' + years[i] + ': ' + val + 'M EUA</title></circle>';
      });
      chartEl.innerHTML = svg + '</svg>';
    }
    var vb = document.getElementById('venue-btns');
    if (vb) {
      vb.addEventListener('click', function (e) {
        var b = e.target.closest('[data-venue]');
        if (!b) return;
        vb.querySelectorAll('.venuebtn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        drawChart(b.getAttribute('data-venue'));
      });
    }
    drawChart('auction');
  }
})();
