import create from 'zustand'
import { cars } from './data'

export const useManage = create((set) => ({
  bears: 0,
  cars:cars, 
  success:false,
  changeSuccess:()=> set((state)=> state.success = !state.success),   
  vehicle:null,
  addCar: (car) => set((state) =>   state.vehicle = car),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),


}))
