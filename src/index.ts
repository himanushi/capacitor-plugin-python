import { registerPlugin } from '@capacitor/core';

import type { CapPythonPlugin } from './definitions';

const CapPython = registerPlugin<CapPythonPlugin>('CapPython', {
  web: () => import('./web').then(m => new m.CapPythonWeb()),
});

export * from './definitions';
export { CapPython };
