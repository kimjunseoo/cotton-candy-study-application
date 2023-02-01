import { atom } from "recoil";

export const IsStorageName = atom({
  key: "IsStorageName",
  default: "StudyName",
});

export const getLogged = atom({
  key: "getLoggded",
  default: false,
});
