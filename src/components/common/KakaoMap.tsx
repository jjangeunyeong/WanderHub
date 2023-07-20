import React from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';

interface KakaoMapTypes {
  mapX: number;
  mapY: number;
  placeTitle: string;
}

const KakaoMap = ({ mapX, mapY, placeTitle }: KakaoMapTypes) => {
  if (mapX)
    return (
      <Map center={{ lat: mapY, lng: mapX }} className="w-full h-full min-h-[360px]">
        <ZoomControl />
        <MapMarker position={{ lat: mapY, lng: mapX }}>
          <p>{placeTitle}</p>
        </MapMarker>
      </Map>
    );
  return null;
};

export default KakaoMap;
