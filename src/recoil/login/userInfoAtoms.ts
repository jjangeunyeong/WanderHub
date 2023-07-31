import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const loginStateAtom = atom({
  key: 'lloginStateAtom',
  default: false,
});
