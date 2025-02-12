// analytics.js
import { browser } from '$app/environment';

export const ConsentTypes = {
    ACCEPTED: 'accepted',
    REJECTED: 'rejected',
    PENDING: 'pending'
};

export const initGA = () => {
    if (!browser) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    // Initialize with denied consent
    gtag('js', new Date());
    gtag('config', 'G-VLS1B3K1MF', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
    });
};

export const updateConsent = (type) => {
    if (!browser) return;

    const consentState = type === ConsentTypes.ACCEPTED ? 'granted' : 'denied';

    window.gtag?.('consent', 'update', {
        'ad_storage': consentState,
        'analytics_storage': consentState,
        'ad_user_data': consentState,
        'ad_personalization': consentState
    });
};
