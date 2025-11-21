export type DocType =
  | "IMCP"
  | "DraftGovernmentContract"
  | "BidContentRequirements"
  | "Notice"
  | "DescriptionOfProcurementItem";

export type IDocForm = Record<DocType, string | null>;

export interface IDocFormik {
  IMCP: {
    value: string | null;
    onChange: (value: string | null) => void;
  };
  DraftGovernmentContract: {
    value: string | null;
    onChange: (value: string | null) => void;
  };
  BidContentRequirements: {
    value: string | null;
    onChange: (value: string | null) => void;
  };
  Notice: {
    value: string | null;
    onChange: (value: string | null) => void;
  };
  DescriptionOfProcurementItem: {
    value: string | null;
    onChange: (value: string | null) => void;
  };
  errors: string[];
  activeUrl: string | null;
  isReady: boolean;
  isEmpty: boolean;
}
