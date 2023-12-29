import prettierConfig from "eslint-config-silash35/.prettierrc.js";

prettierConfig.plugins.push("prettier-plugin-tailwindcss");
prettierConfig.tailwindFunctions = ["tv"];

export default prettierConfig;
