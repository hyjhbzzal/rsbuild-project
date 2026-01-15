import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules'; // Docs: https://rsbuild.rs/config/

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginTypeCheck(),
    pluginSvgr(),
    pluginTypedCSSModules(),
  ],
});
