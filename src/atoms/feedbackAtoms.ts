import { atom } from "recoil";

export const feedBackArray = atom({
  key: "feedBackArray",
  default: [
    {
      id: "",
      content: [],
    },
  ],
});
