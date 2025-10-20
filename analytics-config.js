// ========================================
// Analytics & Tracking Configuration
// ========================================

// Google Analytics 4 (GA4) Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics Measurement ID
gtag('config', 'GA_MEASUREMENT_ID', {
    // Enhanced Ecommerce (if needed)
    send_page_view: true,
    custom_map: {
        'custom_parameter_1': 'designer_type',
        'custom_parameter_2': 'service_area'
    }
});

// Google Tag Manager (GTM) Configuration
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');

// Facebook Pixel (if needed)
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
// Replace 'YOUR_PIXEL_ID' with your actual Facebook Pixel ID
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');

// LinkedIn Insight Tag (if needed)
_linkedin_partner_id = "YOUR_LINKEDIN_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[]}
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})(window.lintrk);

// Custom Event Tracking for Portfolio
function trackPortfolioEvent(eventName, eventCategory, eventLabel, eventValue) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            event_category: eventCategory,
            event_label: eventLabel,
            value: eventValue
        });
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, {
            content_category: eventCategory,
            content_name: eventLabel,
            value: eventValue
        });
    }
}

// Track portfolio interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track project views
    const projectImages = document.querySelectorAll('.project-image, .visual-art-image');
    projectImages.forEach(function(image) {
        image.addEventListener('click', function() {
            trackPortfolioEvent('project_view', 'Portfolio', this.alt, 1);
        });
    });

    // Track section visits
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                trackPortfolioEvent('section_view', 'Navigation', entry.target.id, 1);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(function(section) {
        observer.observe(section);
    });

    // Track contact interactions
    const contactLinks = document.querySelectorAll('a[href*="mailto"], a[href*="tel"]');
    contactLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            trackPortfolioEvent('contact_click', 'Contact', this.href, 1);
        });
    });

    // Track social media clicks
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const platform = this.href.includes('linkedin') ? 'LinkedIn' :
                           this.href.includes('instagram') ? 'Instagram' :
                           this.href.includes('github') ? 'GitHub' : 'Other';
            trackPortfolioEvent('social_click', 'Social Media', platform, 1);
        });
    });
});

// Performance tracking
window.addEventListener('load', function() {
    // Track page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    trackPortfolioEvent('page_load_time', 'Performance', 'Load Time', Math.round(loadTime));

    // Track Core Web Vitals (if available)
    if ('web-vitals' in window) {
        // This would require the web-vitals library
        // getCLS(trackPortfolioEvent);
        // getFID(trackPortfolioEvent);
        // getFCP(trackPortfolioEvent);
        // getLCP(trackPortfolioEvent);
        // getTTFB(trackPortfolioEvent);
    }
});

// Export for use in other scripts
window.trackPortfolioEvent = trackPortfolioEvent;
