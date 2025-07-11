declare module 'vanilla-tilt' {
  interface VanillaTiltOptions {
    reverse?: boolean;
    max?: number;
    startX?: number;
    startY?: number;
    perspective?: number;
    easing?: string;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: null | 'x' | 'y';
    reset?: boolean;
    glare?: boolean;
    'max-glare'?: number;
    'glare-prerender'?: boolean;
    gyroscope?: boolean;
    gyroscopeMinAngleX?: number;
    gyroscopeMaxAngleX?: number;
    gyroscopeMinAngleY?: number;
    gyroscopeMaxAngleY?: number;
    gyroscopeSamples?: number;
  }

  export default class VanillaTilt {
    static init(elements: HTMLElement | HTMLElement[], settings?: VanillaTiltOptions): void;
    destroy(): void;
    reset(): void;
  }
} 