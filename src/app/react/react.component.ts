import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-rect',
  template: ``,
  // templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],
  host: {
    class: 'pulse',
  },
})
export class ReactComponent implements OnInit {

  width: string;
  height: string;
  className: string;

  constructor(private host: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '20px');
  }
}