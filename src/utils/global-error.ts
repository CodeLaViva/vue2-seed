export function onErrorHandle(err: Error, vm: Vue, info: string) {
  console.log('Vue Error Start');
  console.log('Vue Error End');
}

export function onError(event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) {
  console.log('Windows Error Start');
  console.log('Windows Error End');
}
