import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  @Input() images!: any[];

  imageIndex: number | null = null;

  changeSlide(direction: 'left' | 'right') {
    if (direction === 'left') {
      if (this.imageIndex === 0 || this.imageIndex === null) {
        this.imageIndex = this.images.length - 1;
      } else {
        this.imageIndex = this.imageIndex - 1;
      }
    } else {
      if (
        this.imageIndex === this.images.length - 1 ||
        this.imageIndex === null
      ) {
        this.imageIndex = 0;
      } else {
        this.imageIndex = this.imageIndex + 1;
      }
    }
  }

  resetIndex(idx: number | null) {
    this.imageIndex = idx;
    console.log(this.imageIndex);
  }
}
