import { create } from "zustand"

type LoadingStore = {
  pageReady: boolean
  sceneReady: boolean
  sceneProgress: number
  setPageReady: () => void
  setSceneReady: () => void
  setSceneProgress: (v: number) => void
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  pageReady: false,
  sceneReady: false,
  sceneProgress: 0,
  setPageReady: () => set({ pageReady: true }),
  setSceneReady: () => set({ sceneReady: true }),
  setSceneProgress: (v: number) => set({ sceneProgress: v }),
}))

export const useIsFullyLoaded = () =>
  useLoadingStore((s) => s.sceneReady && s.pageReady)
