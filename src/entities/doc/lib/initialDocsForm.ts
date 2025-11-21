import { IDocForm } from "../model/docsForm.types";

export const initialDocTypes: IDocForm & {
  activeUrl: string | null;
  isReady: boolean;
  isEmpty: boolean;
} = {
  IMCP: null,
  DraftGovernmentContract: null,
  BidContentRequirements: null,
  Notice: null,
  DescriptionOfProcurementItem: null,
  activeUrl: null,
  isEmpty: true,
  isReady: false,
};
