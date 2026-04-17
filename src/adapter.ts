import fs from "node:fs";
import type {
  AdapterOperationFnArgs,
  AdapterOperationFnReturn,
  SyncAdapterFnReturn
} from "@ogs-gmbh/lexora";
import type { File, Scopes } from "./types.js";

/**
 * JSON-Adapter, that'll use a JSON file
 * @param path - Path to a JSON file
 * @returns A `SyncAdapterFnReturn` that'll be picked up by lexora
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Adapter
 */
function jsonAdapter(path: string): SyncAdapterFnReturn {
  const content = fs.readFileSync(path, {
    encoding: "utf8"
  });

  const json = JSON.parse(content) as File;

  return {
    get: ({ scopes, locale }: AdapterOperationFnArgs): AdapterOperationFnReturn => {
      const localizedJson = json[locale]!;

      if (scopes === undefined) return localizedJson;

      const data: Scopes = {};

      for (const scope of scopes) data[scope] = localizedJson[scope]! as Scopes;

      return data;
    }
  };
}

export { jsonAdapter };
