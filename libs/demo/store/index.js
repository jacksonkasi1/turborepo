import create from "zustand"

export const useStore = create((set) => ({
  count: 1,
  name: "kasi",
  // get value from payload
  inc: (payload) =>
    set({
      ...payload
    })
}))
