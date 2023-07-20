interface AccompanyCommonType {
  id: number;
  accompanyLocal: string;
  accompanyDate: string;
  maxNum: number;
  accompanyTitle: string;
  accompanyContent: string;
  openStatus: boolean;
  createdAt: string | null;
  modifiedAt: string | null;
}

export interface AccompanyDataType extends AccompanyCommonType {
  memberId: number;
  writerName: string;
}

export interface AccompanyDetailDataType extends AccompanyCommonType {
  nickname: string;
  coordX: number;
  coordY: number;
  placeTitle: string;
  registeredMembers: number;
}
