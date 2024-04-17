import { AfterViewInit, Component, Input } from '@angular/core';
import { IProperty } from '../../../types';

import * as L from 'leaflet';
import { MarkerService } from '../../services/marker.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements AfterViewInit {
  @Input() items!: IProperty[];

  constructor(private markerService: MarkerService) {}

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [52.4797, -1.90269],
      zoom: 7,
      scrollWheelZoom: false,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeMarkers(this.map, this.items);
  }
}
