export interface rows {
  firstCol: string;
  secondCol: string;
  thirdCol: string;
  fourthCol?: string;
  fifthCol?: string;
  handleClick?: any;
  accidentData?: any;
}

export interface tableProps {
  rows: rows[];
  head1: string;
  head2: string;
  head3: string;
  head4?: string;
  head5?: string;
  handleClick?: any;
}
