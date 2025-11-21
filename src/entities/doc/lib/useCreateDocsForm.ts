import { useFormik } from "formik";

import { useNotify } from "@/shared/components";

import { initialDocTypes } from "./initialDocsForm";
import { IDocForm, IDocFormik } from "../model/docsForm.types";
import { docsFormValidationSchema } from "../model/docsForm.validation";

export const useCreateDocsForm = (): IDocFormik => {
  const notify = useNotify();
  const onSubmit = (form: IDocForm) => {
    console.log(form);
    notify({
      message: "Успех",
      type: "success",
      description: "Документы успешно отправлены",
    });
  };

  const { values, setValues, errors } = useFormik<
    IDocForm & { activeUrl: string | null }
  >({
    initialValues: initialDocTypes,
    onSubmit,
    validationSchema: docsFormValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
  });

  const onIMCPChange = (value: string | null) => {
    setValues((prev) => ({ ...prev, IMCP: value }));
  };
  const onDraftGovernmentContractChange = (value: string | null) => {
    setValues((prev) => ({ ...prev, IMCP: value }));
  };
  const onBidContentRequirementsChange = (value: string | null) => {
    setValues((prev) => ({ ...prev, IMCP: value }));
  };
  const onNoticeChange = (value: string | null) => {
    setValues((prev) => ({ ...prev, IMCP: value }));
  };
  const onDescriptionOfProcurementItemChange = (value: string | null) => {
    setValues((prev) => ({ ...prev, IMCP: value }));
  };

  const errorMessages = Object.values(errors).filter(Boolean) as string[];

  return {
    IMCP: {
      value: values.IMCP,
      onChange: onIMCPChange,
    },
    DraftGovernmentContract: {
      value: values.IMCP,
      onChange: onDraftGovernmentContractChange,
    },
    BidContentRequirements: {
      value: values.IMCP,
      onChange: onBidContentRequirementsChange,
    },
    Notice: {
      value: values.IMCP,
      onChange: onNoticeChange,
    },
    DescriptionOfProcurementItem: {
      value: values.IMCP,
      onChange: onDescriptionOfProcurementItemChange,
    },
    errors: errorMessages,
    activeUrl: values.activeUrl,
  };
};
