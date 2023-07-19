export interface AccompanyDataType {
  id: number;
  memberId: number;
  writerName: string;
  accompanyLocal: string;
  accompanyDate: string;
  maxNum: number;
  accompanyTitle: string;
  accompanyContent: string;
  openStatus: boolean;
  createdAt: null; // 현재 어느타입으로 오는지모름 null | string일듯
  modifiedAt: null; // 현재 어느타입으로 오는지모름 null | string일듯
}
