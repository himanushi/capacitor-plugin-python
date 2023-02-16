import { WebPlugin } from '@capacitor/core';

import type { CapPythonPlugin } from './definitions';

export class CapPythonWeb extends WebPlugin implements CapPythonPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
