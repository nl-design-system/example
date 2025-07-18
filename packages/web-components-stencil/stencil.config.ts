import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  extras: { enableImportInjection: true },
  namespace: 'example',
  outputTargets: [
    {
      esmLoaderPath: '../loader',
      type: 'dist',
    },
    {
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
      type: 'dist-custom-elements',
    },
    {
      serviceWorker: null, // disable service workers
      type: 'www',
    },
    reactOutputTarget({
      outDir: '../web-components-react/src/stencil-generated/',
    }),
  ],
  plugins: [sass()],
  srcDir: './src/',
};
