// @ts-check

import { tanstackConfig } from "@tanstack/eslint-config";

export default [...tanstackConfig, { ignores: ["./*.config.{js,ts}"] }];
