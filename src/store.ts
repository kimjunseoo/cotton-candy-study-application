import { atom, waitForAllSettled } from "recoil";

export const IsStorageName = atom({
  key: "IsStorageName",
  default: "StudyName",
});

export const getLogged = atom({
  key: "getLoggded",
  default: false,
});

export const activeModal = atom({
  key: "activeModal",
  default: false,
});
