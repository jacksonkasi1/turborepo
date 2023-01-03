import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  // popup modal
  modal: {
    show: true,
    type: "login",
    cardTitle: "",
    cardSubTitle: "",
    activeStepCount: 0,
    isActive: false,
    next: null,
    isNext:false,
    isBack: null,
    isEnd: false
  }
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModel: (state, action) => {
      const { show, type, cardTitle, cardSubTitle, activeStepCount, isActive, next, isNext, isBack, isEnd } =
        action.payload
      state.modal = Object.assign(state.modal, {
        show,
        type,
        cardTitle: !show ? "" : cardTitle,
        cardSubTitle: !show ? "" : cardSubTitle,
        activeStepCount: !show ? 0 : activeStepCount || 0,
        isActive: !show ? false : typeof isActive === "boolean" ? isActive : state.modal.isActive,
        next: !show ? null : next,
        isNext: !show ? false : typeof isNext === "boolean" ? isNext : state.modal.isNext,
        isBack: !show ? null : isBack,
        isEnd: !show ? false : typeof isEnd === "boolean" ? isEnd : state.modal.isEnd
      })
    }
  }
})

export const { setModel } = modalSlice.actions
export default modalSlice.reducer
