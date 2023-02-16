export interface CapPythonPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
