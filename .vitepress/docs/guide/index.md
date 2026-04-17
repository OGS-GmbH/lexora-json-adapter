---
prev: false
next: false
---

# Getting started

## Installation

### Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

::: code-group

```sh [npm]
$ npm add @ogs-gmbh/lexora-json-adapter
```

```sh [pnpm]
$ pnpm add @ogs-gmbh/lexora-json-adapter
```

```sh [yarn]
$ yarn add @ogs-gmbh/lexora-json-adapter
```

```sh [bun]
$ bun add @ogs-gmbh/lexora-json-adapter
```

:::

### Usage

`lexora-json-adapter` uses simple Node.js APIs for accessing the Filesystem under the hood. Here is a simple example integration for `lexora`. For a deeper understanding, checkout our [`reference`](/reference).

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
