import React from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';

interface KaKaoMapTypes {
  mapX: number;
  mapY: number;
  placeTitle: string;
}

const KaKaoMap = ({ mapX, mapY, placeTitle }: KaKaoMapTypes) => {
  if (mapX)
    return (
      <Map center={{ lat: mapY, lng: mapX }} className="w-full h-full min-h-[360px]">
        <ZoomControl />
        <MapMarker position={{ lat: mapY, lng: mapX }}>
          <p>{placeTitle}</p>
        </MapMarker>
      </Map>
    );
};

export default KaKaoMap;
