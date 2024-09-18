import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'example',
  srcDir: './src/',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      outDir: '../web-components-react/src/stencil-generated/',
    }),
  ],
  plugins: [sass()],
  extras: { enableImportInjection: true },
};
