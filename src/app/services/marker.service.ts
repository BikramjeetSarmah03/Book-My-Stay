import { Injectable } from '@angular/core';

import * as L from 'leaflet';
import { IProperty } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  constructor() {}

  makeMarkers(map: L.Map, marks: IProperty[]): void {
    for (let mark of marks) {
      const lon = mark.longitude;
      const lat = mark.latitude;
      const marker = L.marker([lat, lon]);
      marker
        .bindPopup(
          `
          <div class="flex gap-5 min-w-40">
              <img src="${mark.img}" alt="pinImg" class="w-[64px] h-[64px] object-cover rounded-md" />
              <div class="flex flex-col justify-between w-fit">
                <a routerLink="/property/${mark.id}">${mark.title}</a>
                <span>${mark.bedroom} bedroom</span>
                <b>$ ${mark.price}</b>
              </div>
          </div>
      `
        )
        .openPopup();

      marker.addTo(map);
    }
  }
}
