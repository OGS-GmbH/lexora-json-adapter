---
layout: home
isHome: true

hero:
  text: JSON-Adapter for Lexora
  tagline: High-performance JSON file adapter for Lexora - the modern, type-safe i18n solution. Seamlessly load translations from JSON files with zero configuration. Perfect for React, Node.js, and TypeScript projects.
  actions:
    - theme: brand
      text: Get started
      link: /guide
    - theme: alt
      text: Reference
      link: /reference
    - theme: alt
      text: GitHub
      link: https://github.com/OGS-GmbH/lexora-adapter-json

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.7-1.7l-3.6-3.6A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1"/></svg>
    title: Simple JSON File Integration
    details: Read translations directly from JSON files using Node.js native fs.readFileSync(). No database setup, no external dependencies—just pure, straightforward file-based translation storage that works everywhere Node.js runs.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/></svg>
    title: Locale-Based Organization
    details: Structure your translations by locale at the root level of your JSON file. The adapter automatically extracts the correct language data based on the requested locale, making multilingual support effortless and intuitive.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.02 2.81a1 1 0 0 1 1.96 0l1.05 5.56a2 2 0 0 0 1.6 1.6l5.56 1.05a1 1 0 0 1 0 1.96l-5.56 1.05a2 2 0 0 0-1.6 1.6l-1.05 5.56a1 1 0 0 1-1.96 0l-1.05-5.56a2 2 0 0 0-1.6-1.6l-5.56-1.05a1 1 0 0 1 0-1.96l5.56-1.05a2 2 0 0 0 1.6-1.6zM20 2v4M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
    title: Smart Scope Filtering
    details: Selectively load translation scopes with the built-in scopes parameter. Request only the translation namespaces you need, or omit it to get everything. Perfect for performance optimization and reducing memory footprint in large applications.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m19 5 3-3M2 22l3-3M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4ZM7.5 13.5 10 11M10.5 16.5 13 14M12 6l6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"/></svg>
    title: Lexora Adapter Protocol
    details: Implements the official Lexora adapter interface with a synchronous get() operation. Fully compatible with the Lexora ecosystem, providing seamless integration with AdapterOperationFnArgs and AdapterOperationFnReturn types.
---
