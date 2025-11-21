import { object, ObjectSchema, string } from "yup";

import { IDocForm } from "./docsForm.types";

export const docsFormValidationSchema: ObjectSchema<IDocForm> = object({
  IMCP: string().required("Обоснование НМЦК обязательно"),
  DraftGovernmentContract: string().required(
    "Проект государственного контракта обязателен",
  ),
  BidContentRequirements: string().required(
    "Требования к содержанию заявки обязателены",
  ),
  Notice: string().required("Извещение обязателено"),
  DescriptionOfProcurementItem: string().required(
    "Описание объекта закупки обязательно",
  ),
});
