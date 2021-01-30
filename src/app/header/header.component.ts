import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {

  @Input() titulo: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('HEADER: ngOnInit')
  }

  ngOnChanges() {
    console.log('HEADER: ngOnChanges')
  }

  ngOnDestroy() {
    console.log('HEADER: ngOnDestroy');
  }

}
