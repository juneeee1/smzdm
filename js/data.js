/**
 * data.js - All website content data
 * Valogeo Corporate Website v1
 */

const SITE_DATA = {
    nav: {
        logo: 'Valogeo',
        links: [
            { text: 'About Us', href: '#about' },
            { text: 'Product Value', href: '#product-value' },
            { text: 'Cooperation', href: '#cooperation' },
            { text: 'Contact us', href: '#contact' }
        ]
    },

    banner: {
        title: 'Valogeo',
        subtitle: 'AI-Powered Content Commerce Solution Built for Joint Ventures',
        tags: ['Ai-native technology partner', 'Cooperation and co-creation take priority'],
        descriptors: ['Singapore-based', 'AI-native', 'Partnership-first']
    },

    coCreated: {
        title: 'Co-created',
        titleHighlight: 'with Valogeo',
        description: 'We have established joint ventures in Indonesia and Thailand, and integrated our respective advantageous resources to promote the successful implementation of content marketing, e-commerce services and other businesses in our country, helping local consumers enhance their experience in obtaining consumption content and the efficiency of consumption decision-making.',
        features: [
            { highlight: 'A consumption decision', text: 'making engine centered on user interests\n"Consumption Guide"' },
            { highlight: 'An objective', text: 'and In-depth consumer content platform' },
            { highlight: 'A precise', text: 'and efficient online discount search tool' },
            { highlight: 'A genuine', text: 'and rich community of user word-of-mouth' }
        ]
    },

    productValue: {
        title: 'Product value',
        subtitle: 'VALOGEO: AI-Native Technology Partner',
        description: 'We not only offer software, but also build it with you using cutting-edge AI.',
        products: [
            {
                tag: 'AIUC',
                tagColor: '#005FFA',
                bgColor: '#EFF BFF',
                items: [
                    { title: 'Multimodal understanding', desc: 'Comprehensive content analysis of text, images, and short videos' },
                    { title: 'Quality scoring', desc: 'Content credibility verification and value judgment' },
                    { title: 'Automatic Tagging', desc: 'Intelligent content classification and tag generation' },
                    { title: 'Sentiment analysis', desc: 'Identifying consumer viewpoints and product evaluations' }
                ]
            },
            {
                tag: 'AIGC',
                tagColor: '#FA0F00',
                bgColor: '#FFF0F0',
                items: [
                    { title: 'Multimodal understanding', desc: 'Comprehensive content analysis of text, images, and short videos' },
                    { title: 'Quality scoring', desc: 'Content credibility verification and value judgment' },
                    { title: 'Automatic Tagging', desc: 'Intelligent content classification and tag generation' },
                    { title: 'Sentiment analysis', desc: 'Identifying consumer viewpoints and product evaluations' }
                ]
            },
            {
                tag: 'Intelligent Data',
                tagLabel: 'DATA',
                tagColor: '#D1B70C',
                bgColor: '#FFFBE6',
                items: [
                    { title: 'Multimodal understanding', desc: 'Comprehensive content analysis of text, images, and short videos' },
                    { title: 'Quality scoring', desc: 'Content credibility verification and value judgment' },
                    { title: 'Automatic Tagging', desc: 'Intelligent content classification and tag generation' },
                    { title: 'Sentiment analysis', desc: 'Identifying consumer viewpoints and product evaluations' }
                ]
            }
        ]
    },

    aiFoundation: {
        titlePart1: 'AI is not a function',
        titlePart2: 'but the foundation that',
        titleHighlight: 'enables businesses',
        titlePart3: 'to scale',
        items: [
            { icon: 'creation', title: 'Creation', desc: 'Upgrade from a labor-intensive and costly "handicraft workshop" to an AI-driven, high-quality and infinitely scalable "content factory"' },
            { icon: 'personalization', title: 'Personalization', desc: 'Upgrade from a labor-intensive and costly "handicraft workshop" to an AI-driven, high-quality and infinitely scalable "content factory"' },
            { icon: 'monetization', title: 'Monetization', desc: 'Upgrade from a labor-intensive and costly "handicraft workshop" to an AI-driven, high-quality and infinitely scalable "content factory"' },
            { icon: 'insights', title: 'Insights', desc: 'Upgrade from a labor-intensive and costly "handicraft workshop" to an AI-driven, high-quality and infinitely scalable "content factory"' }
        ]
    },

    coreCompetence: {
        title: 'Core competence',
        items: [
            { title: 'Content aggregation', desc: 'Crawler aggregation evaluation/ranking/recommendation', example: 'e.g. A vast amount of content from various platforms', side: 'left', icon: 'aggregation' },
            { title: 'AIGC derivative creation', desc: 'Multilingual generation and local context optimization', example: 'e.g. Indonesian translation, traditional Chinese writing', side: 'right', icon: 'aigc' },
            { title: 'Data revenue', desc: 'Monitor traffic and alliance returns', example: 'e.g. National-level ROI analysis', side: 'left', icon: 'data' },
            { title: 'Alliance integration', desc: 'Integrate the Shopee/Lazada/TikTok API', example: 'e.g. Automatic customization of product cards', side: 'right', icon: 'alliance' },
            { title: 'Landing and delivery', desc: 'Quickly build front-end applications', example: 'e.g. Cooperative brand products/apps', side: 'left', icon: 'landing' }
        ]
    },

    cooperation: {
        title: 'Cooperation',
        subtitle: 'This is not about Party A and Party B, but about starting a business together.',
        subtitleHighlight: 'Your success is our success',
        columns: [
            {
                heading: 'What We Bring',
                items: [
                    { title: 'Complete AI technology stack', desc: 'It includes the core engines of AIUC and AIGC, multimodal understanding and generation capabilities, as well as the entire data tracking system' },
                    { title: 'Rapidly deployable products', desc: 'Web platform + mobile application, complete back-end management system, modular design to meet localization requirements' },
                    { title: 'Operation Methodology and Toolkit', desc: '8 years of accumulated content operation and growth strategies, full-process operation manual and toolset' },
                    { title: 'Continuous technical support', desc: 'Platform maintenance and upgrade, new feature development and deployment, 24/7 technical response' }
                ]
            },
            {
                heading: 'What You Bring',
                items: [
                    { title: 'Local market experience', desc: 'In-depth understanding of local consumer behavior and preferences, cultural and language compatibility, and the competitive landscape' },
                    { title: 'Local resource network', desc: 'Merchant/brand resources, content creator channels, media and marketing resources, regulatory compliance capabilities' },
                    { title: 'Operations team', desc: 'Content review and quality control, community management, local customer service, business expansion' },
                    { title: 'Capital investment', desc: 'Capital of the joint venture company, initial operating budget, investment during the growth stage' }
                ]
            },
            {
                heading: 'What We Build Together',
                items: [
                    { title: 'Local joint venture', desc: 'Clear equity structure, joint decision-making mechanism, and transparent profit and loss sharing' },
                    { title: 'Rapidly deployable products', desc: 'Your brand or co-branded, localized market positioning and content strategy' },
                    { title: 'Scalable business', desc: 'Multiple revenue channels, data-driven growth, and regional expansion potential' },
                    { title: 'Long-term partnership', desc: 'Consistent interests and goals, shared risks, shared success, and mutual benefit and win-win results' }
                ]
            }
        ]
    },

    steps: {
        title: 'Co-construction and win-win:',
        titleLine2: 'From the first communication to market launch',
        phases: [
            {
                number: '1',
                name: 'Cooperative\nevaluation',
                items: [
                    { title: 'Market feasibility study', desc: 'Conduct an in-depth analysis of the local market potential and competitive landscape' },
                    { title: 'Clause communication', desc: 'Core terms such as equity structure, investment scale, and income sharing' },
                    { title: 'Joint venture structure design', desc: 'Legal framework, governance structure and intellectual property protection plan' }
                ]
            },
            {
                number: '2',
                name: 'Construction and\nlocalization',
                items: [
                    { title: 'Company establishment', desc: 'Joint venture company registration, bank account opening and initial team formation' },
                    { title: 'Brand and platform localization', desc: 'UI/UX customization, content style adaptation, and product tone localization' },
                    { title: 'Content cold start', desc: 'Batch generation of initial content libraries by AI, merchant connection and integration' },
                    { title: 'Team training', desc: 'Operation training, technical handover, system usage and internal testing' }
                ]
            },
            {
                number: '3',
                name: 'Launch and Growth',
                items: [
                    { title: 'Beta iteration', desc: 'Controlled user group internal testing, data collection and rapid iterative optimization' },
                    { title: 'Fully launched', desc: 'The market is officially launched, PR promotion is carried out, and users are acquired through all channels' },
                    { title: 'Large-scale growth', desc: 'Traffic monetization, channel expansion, and data-driven optimization' },
                    { title: 'Continuous optimization', desc: 'New feature development, expansion of profit models, and community building' }
                ]
            }
        ]
    },

    valueOfCooperation: {
        title: 'Value of cooperation',
        sections: [
            {
                heading: 'Upgrade of commercial value',
                items: [
                    { title: 'Content asset appreciation', desc: 'Enabling high-quality content to continuously generate value over a long period of time.' },
                    { title: 'Mutual success in brand upgrading', desc: 'From Internet celebrity promoters to authoritative evaluation experts.' }
                ]
            },
            {
                heading: 'AI Empowerment',
                items: [
                    { title: 'Full-Network Insights', desc: 'Comprehensive data analysis across all channels and platforms.' },
                    { title: 'Content Assistance', desc: 'AI-powered content creation and optimization tools.' }
                ]
            }
        ]
    },

    partner: {
        title: 'What kind of partner are we looking for',
        cards: [
            { title: 'A market builder,\nrather than a pure\ninvestor.', desc: 'Regard it as a core business rather than a marginal investment. Personally participate in the operation, possess an entrepreneurial mindset, and be willing and capable of personally promoting business growth.', dark: true },
            { title: 'Local Market Expert', desc: 'Possesses a profound understanding of local consumer behavior and preferences, holds resources in the e-commerce, media, or content ecosystem, and can effectively navigate the local regulatory environment and business practices.', dark: true },
            { title: 'Digital-Native\nMindset', desc: 'Characterized by leveraging the value of AI and technology, embracing data-driven decision-making, being accustomed to rapid product and strategy iteration, and being passionate about digital innovation.', dark: true },
            { title: 'Long-termist', desc: 'Plans business from a 5-10 year perspective, prioritizes sustained value creation over short-term monetization, recognizes the long-term importance of partnerships, and possesses a vision for regional expansion.', dark: false },
            { title: 'Flexible and\nPragmatic', desc: 'Able to launch quickly with limited resources, demonstrate creativity in traffic acquisition and partnership development, and focus on execution and efficiency rather than pursuing perfection.', dark: false },
            { title: '', highlight: 'We Are Seeking\nTalents...', desc: '', isSpecial: true }
        ]
    },

    contact: {
        title: 'Contact Us',
        subtitle: "Let's Embark on a",
        subtitleHighlight: 'Collaborative',
        subtitleEnd: 'Journey',
        cards: [
            { title: 'Exclusive Regional Protection', desc: 'We cooperate with only one partner per market to ensure your exclusive operational rights in the local market.\nPartners will be entitled to a comprehensive regional protection policy, which prevents homogeneous competition.', image: 'contact_img1.jpg' },
            { title: 'Strategic Partner Recruitment', desc: 'Next batch of partners : XG\nOnly five new partner spots are available each quarter. Application assessment cycle : 2-3 weeks', image: 'contact_img2.jpg' }
        ]
    },

    cta: {
        title: 'Valogeo',
        subtitle: 'AI-Powered Content Commerce Solution Built for Joint Ventures',
        phone: '+6512345',
        email: 'help@fantasticfusion.com'
    },

    footer: {
        logo: 'Valogeo',
        cookie: 'We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.',
        website: 'www.fantasicfusion.com',
        address: '10 Anson Road #15-05 International Plaza Singapore (0799033)',
        copyright: '\u00A9 Valoge. 2025',
        contactText: 'Contact us',
        socials: ['facebook', 'twitter', 'instagram', 'linkedin']
    }
};
