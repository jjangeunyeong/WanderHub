import { atom } from 'recoil';

export const modalIsOpenAtom = atom<boolean>({
  key: 'modalIsOpenAtom',
  default: false,
});
