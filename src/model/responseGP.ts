export interface Vaccine {
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

export interface Test {
  tg: string;
  tt: string;
  nm: string;
  ma: string;
  sc: string;
  dr: string;
  tr: string;
  tc: string;
  co: string;
  is: string;
  ci: string;
}

export interface Payload {
  dob: string;
  nam: {
    fn: string;
    fnt: string;
    gn: string;
    gnt: string;
  };
  r?: Recovery[];
  t?: Test[];
  v?: Vaccine[];
  ver: string;
}

export interface Recovery {
  tg: string;
  fr: string;
  co: string;
  is: string;
  df: string;
  du: string;
  ci: string;
}

export interface ResponseGP {
  result: string;
  message: string;
  status: string;
  _raw: string;
  _payload: Payload;
}
