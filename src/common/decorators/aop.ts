export enum AopType {
  Before = 'before',
  Around = 'around',
  After = 'after'
}

export interface AopOptions {
  type: AopType;
}

export function aop(optionals: AopOptions) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const origin = descriptor.value;
    descriptor.value = function(...args: any) {
      if (optionals.type === AopType.Before || optionals.type === AopType.Around) {
        console.log(`[${target['constructor'].name}] -> ${key} start, args: ${args}`);
      }
      origin.apply(this, args);
      if (optionals.type === AopType.After || optionals.type === AopType.Around) {
        console.log(`[${target['constructor'].name}] -> ${key} end`);
      }
    };
  };
}
