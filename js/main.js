/**
 * Fantastic Fusion - 主交互逻辑
 */
(function () {
    'use strict';

    // ===== 移动端菜单 =====
    var menuBtn = document.getElementById('mobileMenuBtn');
    var nav = document.querySelector('.nav');

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            menuBtn.classList.toggle('active');
            nav.classList.toggle('open');
        });
    }

    // 点击导航链接后关闭菜单
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (nav.classList.contains('open')) {
                menuBtn.classList.remove('active');
                nav.classList.remove('open');
            }
        });
    });

    // ===== Header 滚动效果 =====
    var header = document.getElementById('header');
    var lastScroll = 0;

    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'rgba(0, 6, 17, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#000611';
            header.style.backdropFilter = 'none';
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // ===== Tab 切换 =====
    var tabs = document.querySelectorAll('.tab');
    var panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var tabIndex = this.getAttribute('data-tab');

            // 切换 tab 激活状态
            tabs.forEach(function (t) { t.classList.remove('active'); });
            this.classList.add('active');

            // 切换面板
            panels.forEach(function (p) { p.classList.remove('active'); });
            var targetPanel = document.querySelector('[data-panel="' + tabIndex + '"]');
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ===== 滚动渐入动画 =====
    var animateElements = document.querySelectorAll(
        '.section-title, .section-subtitle, .achievements-card, ' +
        '.tab, .tab-panel, .blog-card, .about-text, .collage-item, ' +
        '.achievement-item, .help-card'
    );

    // 给所有目标元素添加 fade-in 类
    animateElements.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // 添加延迟让卡片依次出现
                var delay = 0;
                var parent = entry.target.parentElement;
                if (parent) {
                    var siblings = Array.from(parent.children);
                    var index = siblings.indexOf(entry.target);
                    delay = index * 80;
                }

                setTimeout(function () {
                    entry.target.classList.add('visible');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(function (el) {
        observer.observe(el);
    });

    // ===== 平滑滚动到锚点 =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerHeight = 70;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== 搜索框交互 =====
    var searchBtn = document.querySelector('.search-btn');
    var searchInput = document.querySelector('.search-input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function () {
            var query = searchInput.value.trim();
            if (query) {
                // 按钮点击反馈动画
                searchBtn.style.transform = 'scale(0.92)';
                setTimeout(function () {
                    searchBtn.style.transform = '';
                }, 150);
            }
        });

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // ===== 导航链接活跃状态 =====
    var sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        var scrollY = window.pageYOffset + 100;

        sections.forEach(function (section) {
            var top = section.offsetTop - 100;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            var link = document.querySelector('.nav-link[href="#' + id + '"]');
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.style.color = '#6b9fff';
                } else {
                    link.style.color = '';
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });

})();
