import { IDocForm } from "../model/docsForm.types";

export const initialDocTypes: IDocForm & { activeUrl: string | null } = {
  IMCP: null,
  DraftGovernmentContract: null,
  BidContentRequirements: null,
  Notice: null,
  DescriptionOfProcurementItem: null,
  activeUrl: null,
};
