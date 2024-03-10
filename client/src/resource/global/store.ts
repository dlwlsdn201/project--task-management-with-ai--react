import { create } from 'zustand';
interface GlobalState {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

const useGlobalStore = create(set => ({
  count: 0,
  increaseCount: () =>
    set((state: GlobalState) => ({ count: state.count + 1 })),
  decreaseCount: () =>
    set((state: GlobalState) => ({ count: state.count - 1 })),
}));

export default useGlobalStore;
