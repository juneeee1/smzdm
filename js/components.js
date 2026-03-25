/**
 * components.js - DOM component builders
 * Each function creates a section of the website
 */

/* SVG Icons */
const ICONS = {
    logo: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4C8 4 10 4 12 4C14 9 16 16 16 16C16 16 18 9 20 4C22 4 24 4 26 4C22 14 18 24 16 28C14 24 10 14 6 4Z" fill="#FA0F00"/><path d="M10 4C8 4 6 4 4 4C8 12 12 20 14 24C12 20 8 12 10 4Z" fill="#FF6666" opacity="0.7"/></svg>',
    phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
    email: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>',
    facebook: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
    twitter: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    instagram: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>',
    linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>',
    creation: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><text x="4" y="28" font-family="Poppins" font-size="20" font-weight="600" fill="#FA0F00">Ai</text><circle cx="30" cy="10" r="3" fill="#FA0F00"/><circle cx="30" cy="10" r="1" fill="white"/></svg>',
    personalization: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FA0F00" stroke-width="2"><path d="M20 8l3 6 3-6M14 8l3 6 3-6"/><circle cx="20" cy="26" r="8"/><path d="M15 24l10 4M15 28l10-4"/></svg>',
    monetization: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FA0F00" stroke-width="2"><rect x="8" y="12" width="24" height="18" rx="3"/><path d="M12 12V9a4 4 0 018 0v3"/><circle cx="20" cy="22" r="3"/></svg>',
    insights: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FA0F00" stroke-width="2"><ellipse cx="20" cy="20" rx="14" ry="8" transform="rotate(-20 20 20)"/><line x1="8" y1="28" x2="32" y2="12"/></svg>',
    aggregation: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FA0F00" stroke-width="2"><path d="M20 8c-4 0-8 2-8 6s8 6 8 6 8-2 8-6-4-6-8-6z"/><path d="M12 20c0 4 4 6 8 6s8-2 8-6"/><path d="M12 26c0 4 4 6 8 6s8-2 8-6"/></svg>',
    aigc: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="10" y="10" width="20" height="20" rx="4" stroke="#FA0F00" stroke-width="2"/><text x="13" y="25" font-family="Poppins" font-size="11" font-weight="700" fill="#FA0F00">AI</text></svg>',
    data: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FA0F00" stroke-width="2"><rect x="8" y="20" width="6" height="12"/><rect x="17" y="14" width="6" height="18"/><rect x="26" y="8" width="6" height="24"/></svg>',
    alliance: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FA0F00" stroke-width="2"><circle cx="20" cy="20" r="12"/><circle cx="20" cy="20" r="4" fill="#FA0F00" stroke="none"/><path d="M20 8v4M20 28v4M8 20h4M28 20h4"/></svg>',
    landing: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FA0F00" stroke-width="2"><rect x="8" y="8" width="24" height="24" rx="4"/><path d="M16 20l4 4 4-4M20 14v10"/></svg>',
    cardIcon1: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FA0F00" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 13h6M9 17h3"/></svg>',
    cardIcon2: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FA0F00" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>',
    cardIcon3: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FA0F00" stroke-width="2"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>'
};

function createNav() {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.id = 'nav';

    nav.innerHTML = `
        <a href="#" class="nav-logo">
            <span class="nav-logo-icon">${ICONS.logo}</span>
            ${SITE_DATA.nav.logo}
        </a>
        <ul class="nav-links">
            ${SITE_DATA.nav.links.map(l => `<li><a href="${l.href}">${l.text}</a></li>`).join('')}
        </ul>
        <div class="nav-hamburger" id="hamburger">
            <span></span><span></span><span></span>
        </div>
    `;

    // Mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.id = 'mobile-menu';
    mobileMenu.innerHTML = SITE_DATA.nav.links.map(l =>
        `<a href="${l.href}">${l.text}</a>`
    ).join('');

    return { nav, mobileMenu };
}

function createBanner() {
    const d = SITE_DATA.banner;
    const section = document.createElement('section');
    section.className = 'banner section';
    section.id = 'home';

    section.innerHTML = `
        <div class="banner-bg" style="background-image: url('assets/images/banner_bg.jpg')"></div>
        <div class="banner-blur-blue"></div>
        <div class="banner-blur-red"></div>
        <div class="banner-content">
            <h1 class="banner-title reveal">${d.title}</h1>
            <p class="banner-subtitle reveal reveal-delay-1">${d.subtitle}</p>
            <div class="banner-tags reveal reveal-delay-2">
                ${d.tags.map(t => `<span class="banner-tag">${t}</span>`).join('')}
            </div>
            <div class="banner-descriptors reveal reveal-delay-3">
                ${d.descriptors.map((desc, i) =>
                    (i > 0 ? '<span class="divider">｜</span>' : '') + `<span>${desc}</span>`
                ).join('')}
            </div>
        </div>
    `;
    return section;
}

function createCoCreated() {
    const d = SITE_DATA.coCreated;
    const section = document.createElement('section');
    section.className = 'co-created section';
    section.id = 'about';

    section.innerHTML = `
        <div class="co-created-inner">
            <h2 class="co-created-title reveal">
                ${d.title} <span class="highlight">${d.titleHighlight}</span>
            </h2>
            <p class="co-created-desc reveal reveal-delay-1">${d.description}</p>
            <div class="co-created-content">
                <div class="co-created-features">
                    ${d.features.map((f, i) => `
                        <div class="co-created-feature reveal reveal-delay-${i + 1}">
                            <span class="highlight">${f.highlight}</span>
                            <span class="text">${f.text.replace(/\n/g, '<br>')}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="co-created-image reveal reveal-delay-2">
                    <img src="assets/images/co_created_img.jpg" alt="Valogeo App" loading="lazy">
                </div>
            </div>
        </div>
    `;
    return section;
}

function createSeparator() {
    const div = document.createElement('div');
    div.className = 'section-separator';
    return div;
}

function createProductValue() {
    const d = SITE_DATA.productValue;
    const section = document.createElement('section');
    section.className = 'product-value section';
    section.id = 'product-value';

    const tagClasses = ['aiuc', 'aigc', 'data'];
    const productImages = ['product_value_img.jpg', 'product_value_img.jpg', 'product_value_img.jpg'];

    section.innerHTML = `
        <div class="blur-circle blur-pink"></div>
        <div class="blur-circle blur-red"></div>
        <div class="product-value-inner">
            <h2 class="section-title reveal">${d.title}</h2>
            <p class="section-title-red reveal reveal-delay-1">${d.subtitle}</p>
            <p class="section-desc reveal reveal-delay-2">${d.description}</p>
            <div class="product-cards">
                ${d.products.map((prod, pi) => `
                    <div class="product-card reveal reveal-delay-${pi + 1}">
                        <div class="product-card-content">
                            <div class="product-card-tag ${tagClasses[pi]}">
                                <span style="color: ${prod.tagColor}">${prod.tag}</span>
                                ${prod.tagLabel ? `<span>${prod.tagLabel}</span>` : ''}
                            </div>
                            <div class="product-card-items">
                                ${prod.items.map(item => `
                                    <div class="product-card-item">
                                        <h4>${item.title}</h4>
                                        <p>${item.desc}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="product-card-visual">
                            <img src="assets/images/${productImages[pi]}" alt="${prod.tag}" loading="lazy">
                            <div class="badge">
                                <span style="color: ${prod.tagColor}">✦</span>
                                <span>${prod.tagLabel || prod.tag}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    return section;
}

function createAiFoundation() {
    const d = SITE_DATA.aiFoundation;
    const section = document.createElement('section');
    section.className = 'ai-foundation section';

    const iconKeys = ['creation', 'personalization', 'monetization', 'insights'];

    section.innerHTML = `
        <div class="ai-foundation-inner">
            <h2 class="ai-foundation-title reveal">
                ${d.titlePart1}<br>
                ${d.titlePart2} <span class="highlight">${d.titleHighlight}</span> ${d.titlePart3}
            </h2>
            <div class="ai-foundation-grid">
                ${d.items.map((item, i) => `
                    <div class="ai-foundation-card reveal reveal-delay-${i + 1}">
                        <div class="ai-foundation-icon">${ICONS[iconKeys[i]]}</div>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    return section;
}

function createCoreCompetence() {
    const d = SITE_DATA.coreCompetence;
    const section = document.createElement('section');
    section.className = 'core-competence section';

    section.innerHTML = `
        <div class="core-competence-inner">
            <h2 class="section-subtitle reveal">${d.title}</h2>
            <div class="timeline">
                ${d.items.map((item, i) => `
                    <div class="timeline-item ${item.side} reveal reveal-delay-${(i % 3) + 1}">
                        ${item.side === 'left' ? `
                            <div class="timeline-content">
                                <h3>${item.title}</h3>
                                <p>${item.desc}</p>
                                <span class="example">${item.example}</span>
                            </div>
                            <div class="timeline-dashes"></div>
                            <div class="timeline-node">${ICONS[item.icon]}</div>
                            <div class="timeline-spacer"></div>
                        ` : `
                            <div class="timeline-spacer"></div>
                            <div class="timeline-node">${ICONS[item.icon]}</div>
                            <div class="timeline-dashes"></div>
                            <div class="timeline-content">
                                <h3>${item.title}</h3>
                                <p>${item.desc}</p>
                                <span class="example">${item.example}</span>
                            </div>
                        `}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    return section;
}

function createCooperation() {
    const d = SITE_DATA.cooperation;
    const section = document.createElement('section');
    section.className = 'cooperation section';
    section.id = 'cooperation';

    const cardIcons = [ICONS.cardIcon1, ICONS.cardIcon2, ICONS.cardIcon3];

    section.innerHTML = `
        <div class="blur-circle blur-pink"></div>
        <div class="blur-circle blur-red"></div>
        <div class="cooperation-inner">
            <h2 class="section-title reveal">${d.title}</h2>
            <p class="cooperation-subtitle reveal reveal-delay-1">
                ${d.subtitle} <span class="highlight">${d.subtitleHighlight}</span>
            </p>
            <div class="cooperation-columns">
                ${d.columns.map((col, ci) => `
                    <div class="cooperation-card reveal reveal-delay-${ci + 1}">
                        <div class="cooperation-card-icon">${cardIcons[ci]}</div>
                        <h3>${col.heading}</h3>
                        <div class="cooperation-card-items">
                            ${col.items.map(item => `
                                <div>
                                    <h4>${item.title}</h4>
                                    <p>${item.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                        <a href="#contact" class="btn btn-red">Contact us</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    return section;
}

function createSteps() {
    const d = SITE_DATA.steps;
    const section = document.createElement('section');
    section.className = 'steps section';

    section.innerHTML = `
        <div class="steps-inner">
            <h2 class="steps-title reveal">${d.title}<br>${d.titleLine2}</h2>
            <div class="steps-grid">
                ${d.phases.map((phase, pi) => `
                    <div class="step-card reveal reveal-delay-${pi + 1}">
                        <div class="step-number">${phase.number}</div>
                        <div class="step-name">${phase.name}</div>
                        <div class="step-divider"></div>
                        <div class="step-items">
                            ${phase.items.map(item => `
                                <div class="step-item">
                                    <h4>${item.title}</h4>
                                    <p>${item.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    return section;
}

function createValueCooperation() {
    const d = SITE_DATA.valueOfCooperation;
    const section = document.createElement('section');
    section.className = 'value-cooperation section';

    section.innerHTML = `
        <div class="value-cooperation-inner">
            <div class="value-cooperation-content">
                <h2 class="section-subtitle reveal">${d.title}</h2>
                ${d.sections.map((sec, si) => `
                    <div class="value-section reveal reveal-delay-${si + 1}">
                        <h3>${sec.heading}</h3>
                        ${sec.items.map(item => `
                            <div class="value-item">
                                <h4>${item.title}</h4>
                                <p>${item.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
            <div class="value-cooperation-image reveal reveal-delay-2">
                <img src="assets/images/cooperation_value_img.jpg" alt="Cooperation value" loading="lazy">
            </div>
        </div>
    `;
    return section;
}

function createPartner() {
    const d = SITE_DATA.partner;
    const section = document.createElement('section');
    section.className = 'partner section';

    section.innerHTML = `
        <div class="partner-inner">
            <h2 class="section-subtitle reveal">${d.title}</h2>
            <div class="partner-grid">
                ${d.cards.map((card, i) => `
                    <div class="partner-card ${card.isSpecial ? 'special' : ''} reveal reveal-delay-${(i % 3) + 1}">
                        ${card.isSpecial ?
                            `<span class="highlight-text">${card.highlight}</span>` :
                            `<h3>${card.title}</h3><p>${card.desc}</p>`
                        }
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    return section;
}

function createContact() {
    const d = SITE_DATA.contact;
    const section = document.createElement('section');
    section.className = 'contact section';
    section.id = 'contact';

    section.innerHTML = `
        <div class="section-separator"></div>
        <div class="contact-inner" style="padding-top: 80px;">
            <h2 class="section-title reveal">${d.title}</h2>
            <p class="contact-subtitle reveal reveal-delay-1">
                ${d.subtitle} <span class="highlight">${d.subtitleHighlight}</span> ${d.subtitleEnd}
            </p>
            <div class="contact-slider">
                <div class="contact-cards" id="contact-cards">
                    ${d.cards.map(card => `
                        <div class="contact-card reveal reveal-delay-2">
                            <h3>${card.title}</h3>
                            <p>${card.desc}</p>
                            <div class="contact-card-image">
                                <img src="assets/images/${card.image}" alt="${card.title}" loading="lazy">
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="contact-progress">
                <div class="contact-progress-track">
                    <div class="contact-progress-fill" id="contact-progress-fill"></div>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createCTA() {
    const d = SITE_DATA.cta;
    const section = document.createElement('section');
    section.className = 'cta section';

    section.innerHTML = `
        <div class="cta-inner reveal">
            <h2 class="cta-title">${d.title}</h2>
            <p class="cta-subtitle">${d.subtitle}</p>
            <div class="cta-contacts">
                <div class="cta-contact-item">
                    <div class="cta-contact-icon">${ICONS.phone}</div>
                    <span>${d.phone}</span>
                </div>
                <div class="cta-contact-item">
                    <div class="cta-contact-icon">${ICONS.email}</div>
                    <span>${d.email}</span>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createFooter() {
    const d = SITE_DATA.footer;
    const footer = document.createElement('footer');
    footer.className = 'footer';

    footer.innerHTML = `
        <div class="footer-top">
            <div class="footer-logo">
                <span class="footer-logo-icon">${ICONS.logo}</span>
                ${d.logo}
            </div>
            <div class="footer-info">
                <p>${d.website}</p>
                <p>${d.address}</p>
            </div>
        </div>
        <p class="footer-cookie">${d.cookie}</p>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
            <span class="footer-copyright">${d.copyright}</span>
            <div class="footer-social">
                <span class="footer-contact-text">${d.contactText}</span>
                <div class="footer-social-divider"></div>
                <div class="footer-social-icons">
                    ${d.socials.map(s => `
                        <a href="#" class="footer-social-icon" aria-label="${s}">${ICONS[s]}</a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    return footer;
}
