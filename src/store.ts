import { atom } from "recoil";

// LocalStorage API Key
export const IsStorageName = atom({
  key: "IsStorageName",
  default: "StudyName",
});

// Get Logged User
export const getLogged = atom({
  key: "getLoggded",
  default: false,
});

// InviteModal Active
export const activeModal = atom({
  key: "activeModal",
  default: false,
});
