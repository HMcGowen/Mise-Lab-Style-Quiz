import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// Webflow Cloud detects the framework and generates the required
// platform (Cloudflare Workers) config automatically at deploy time.
// Nothing platform-specific needs to live here.
//
// This app is fully client-side for now (no server calls), so a static
// build is correct. Once the key-value storage step is added later, this
// will need to switch to output: 'server' with a Cloudflare adapter —
// revisit at that point, not before.
export default defineConfig({
  output: 'static',
  integrations: [react()],
});