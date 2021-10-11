export interface V {
  dn: number;
  ma: string;
  vp: string;
  dt: string;
  co: string;
  ci: string;
  mp: string;
  is: string;
  sd: number;
  tg: string;
}

export interface Nam {
  fnt: string;
  fn: string;
  gnt: string;
  gn: string;
}

export interface Payload {
  v: V[];
  nam: Nam;
  ver: string;
  dob: string;
}

export interface ResponseGP {
  _raw: string;
  _payload: Payload;
}
