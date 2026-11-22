// These are public ingestion identifiers, never personal API keys.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (key && host && process.env.NODE_ENV === 'production') {
  void import('posthog-js').then(({ default: posthog }) => {
    posthog.init(key, {
      api_host: host,
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      disable_session_recording: true,
      mask_all_text: true,
      mask_all_element_attributes: true,
    });
  }).catch(() => {
    // Analytics must never prevent the portfolio from loading.
  });
}
