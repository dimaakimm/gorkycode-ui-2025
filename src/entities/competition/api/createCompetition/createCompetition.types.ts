export interface IPrizes {
  description?: string | null;
}

export interface IGetCreateCompetition {
  id: number;
  name: string;
  prize: IPrizes;
  mainImageUrl: string;
}
