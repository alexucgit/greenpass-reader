export interface ResultPoint {
  x: number;
  y: number;
  estimatedModuleSize: number;
  count: number;
}

export interface GP {
  text: string;
  numBits: number;
  resultPoints: ResultPoint[];
  format: number;
  timestamp: number;
}
