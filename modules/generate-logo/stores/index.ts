import { create } from "zustand";

interface CompanyState {
  Name: string;
  Segment: string;
  SegmentOther: string;
  Attributes: string[];
  setName: (name: string) => void;
  setSegment: (segment: string) => void;
  setSegmentOther: (segmentOther: string) => void;
  setAttributes: (attributes: string[]) => void;
  reset: () => void;
}

const INITIAL_STATE = {
  Name: "",
  Segment: "",
  SegmentOther: "",
  Attributes: [],
};

export const useCompanyStore = create<CompanyState>((set) => ({
  ...INITIAL_STATE,
  setName: (name) => set({ Name: name }),
  setSegment: (segment) => set({ Segment: segment }),
  setSegmentOther: (segmentOther) => set({ SegmentOther: segmentOther }),
  setAttributes: (attributes) => set({ Attributes: attributes }),
  reset: () => set(INITIAL_STATE),
}));