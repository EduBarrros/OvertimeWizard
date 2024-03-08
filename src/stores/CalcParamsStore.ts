import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

interface CalcParamsState {
  HourPrice: number
  SetHourPrice: (by: number) => void
}

const useCalcParamsStore = create<CalcParamsState>()(
  devtools(
    persist(
      (set) => ({
        HourPrice: 10,
        SetHourPrice: (by) => set(() => ({HourPrice: by}))
      }),
      {
        name: 'calcParams-storage',
      },
    ),
  ),
);

export default useCalcParamsStore;