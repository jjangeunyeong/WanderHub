interface AccompanyCommonType {
  id: number;
  nickName?: string;
  accompanyLocal: string;
  accompanyDate: string;
  maxNum: number;
  accompanyTitle: string;
  accompanyContent: string;
  openStatus: boolean;
  coordX: number;
  coordY: number;
  createdAt: string;
  modifiedAt: string;
}

export interface AccompanyDataType extends AccompanyCommonType {
  memberId?: number;
  writerName?: string;
  registeredMembers: number;
}

export interface AccompanyDetailDataType extends AccompanyCommonType {
  nickname: string;
  coordX: number;
  coordY: number;
  placeTitle: string;
  registeredMembers: number;
}
