import { create } from 'zustand'
import type { } from '@redux-devtools/extension'

interface CalcParamsState {
  HourPrice: number
  SetHourPrice: (by: number) => void
  DayTimePercentage: number
  SetDayTimePercentage: (by: number) => void
  NightTimePercentage: number
  SetNightTimePercentage: (by: number) => void
  SundaysTimePercentage: number
  SetSundaysTimePercentage: (by: number) => void
}

const useCalcParamsStore = create<CalcParamsState>()(
  (set) => ({
    HourPrice: 10,
    SetHourPrice: (by) => set(() => ({ HourPrice: by })),
    DayTimePercentage: 50,
    SetDayTimePercentage: (by) => set(() => ({ DayTimePercentage: by })),
    NightTimePercentage: 70,
    SetNightTimePercentage: (by) => set(() => ({ NightTimePercentage: by })),
    SundaysTimePercentage: 150,
    SetSundaysTimePercentage: (by) => set(() => ({ SundaysTimePercentage: by }))
  }),
);

export default useCalcParamsStore;