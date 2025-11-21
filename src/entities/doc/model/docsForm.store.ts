import { create } from "zustand";

import { DocType } from "@/entities/doc/model/docsForm.types";
import { initialDocTypes } from "@/entities/doc/lib/initialDocsForm";

export const docsFormStore = create<Record<DocType, string>>((set, get) => ({
  ...initialDocTypes,

  setFilters: (filters) =>
    set((state) => ({
      ...state,
      competitionState: {
        ...state.competitionState,
        ...filters,
      },
    })),

  resetFilters: () =>
    set(() => ({
      competitionState: initialFilters,
    })),

  getFilters: () => {
    const args = get();
    return args.competitionState;
  },
}));
