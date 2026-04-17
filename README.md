> _We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)_

# JSON Adapter for Lexora

_High-performance JSON file adapter for Lexora - the modern, type-safe i18n solution. Seamlessly load translations from JSON files with zero configuration. Perfect for React, Node.js, and TypeScript projects._

![Preview](./docs/preview.avif)

<a href="./LICENSE" target="_blank"><img alt="license badge" src="https://img.shields.io/github/license/OGS-GmbH/lexora-json-adapter?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/lexora-json-adapter/actions/workflows/main-trusted-deploy.yml" target="_blank"><img alt="workflow badge" src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/lexora-json-adapter/main-trusted-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/lexora-json-adapter" target="_blank"><img alt="npm badge" src="https://img.shields.io/npm/v/%40ogs-gmbh%2Flexora-json-adapter?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

- **Simple JSON File Integration**\
  Read translations directly from JSON files using Node.js native fs.readFileSync(). No database setup, no external dependencies—just pure, straightforward file-based translation storage that works everywhere Node.js runs.

- **Locale-Based Organization**\
  Structure your translations by locale at the root level of your JSON file. The adapter automatically extracts the correct language data based on the requested locale, making multilingual support effortless and intuitive.

- **Smart Scope Filtering**\
  Selectively load translation scopes with the built-in scopes parameter. Request only the translation namespaces you need, or omit it to get everything. Perfect for performance optimization and reducing memory footprint in large applications.

- **Lexora Adapter Protocol**\
  Implements the official Lexora adapter interface with a synchronous get() operation. Fully compatible with the Lexora ecosystem, providing seamless integration with AdapterOperationFnArgs and AdapterOperationFnReturn types.

## Getting Started

> [!IMPORTANT]
> We're offering an extensive API-Reference covered with in-depth usage examples of this project.

To get a starting point, simply refer to our documentation at [ogs-gmbh.github.io/lexora-json-adapter](https://ogs-gmbh.github.io/lexora-json-adapter).

### Prerequisites

- Node.js version 18 or higher
- A package manager: e.g. npm, pnpm, ...

### Installation

Using npm:

```sh
$ npm install @ogs-gmbh/lexora-json-adapter
```

<details>
  <summary>Using a different package manager?</summary>
  <br/>

Using yarn:

```sh
$ pnpm add @ogs-gmbh/lexora-json-adapter
```

Using pnpm:

```sh
$ pnpm add @ogs-gmbh/lexora-json-adapter
```

Using bun:

```sh
$ bun add @ogs-gmbh/lexora-json-adapter
```

</details>

### Usage

`lexora-json-adapter` uses simple Node.js APIs for accessing the Filesystem under the hood. Here is a simple example integration for `lexora`. For a deeper understanding, checkout our [`reference`](https://ogs-gmbh.github.io/lexora-json-adapter/reference).

```tsx [layout.tsx]
import { getTranslations } from "@ogs-gmbh/lexora/server";
import { LexoraProvider } from "@ogs-gmbh/lexora/client";
import { jsonAdapter } from "@ogs-gmbh/lexora-json-adapter";

function RootLayout() {
  const translations = await getTranslations({
    locale: "de",
    autoMigrations: true,
    adapters: [jsonAdapter("./i18n.json")]
  });

  return (
    <html>
      <body>
        <LexoraProvider data={translations}>{children}</LexoraProvider>
      </body>
    </html>
  );
}

export default RootLayout;
```

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing

Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests

Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests

GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct

We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

Gesellschaft für Datenverarbeitung und Systemberatung mbH

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)
