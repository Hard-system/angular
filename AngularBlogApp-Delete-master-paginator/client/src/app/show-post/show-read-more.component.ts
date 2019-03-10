import { Component, AfterViewInit, ViewChild, ElementRef, Attribute,
  ChangeDetectionStrategy } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-read-more',
  template: `
    <div [class.collapsed]="isCollapsed" [style.height]="_height">
      <div #wrapper>
        <ng-content></ng-content>
      </div>
    </div>
    <div class="read-more">
      <button
      type="button"
      class="btn btn-info" (click)="onIsCollapsed()">Read {{isCollapsed ? 'More' : 'Less'}}</button>
    </div>
  `,
  styles: [`
    :host{
      display: block;
    }
    .collapsed {
      overflow: hidden;
      padding-bottom: 1rem;
    }
    .read-more{
      display: flex;
      justify-content: flex-end;
    }
  `]
})
export class ReadMoreComponent implements AfterViewInit{
  @ViewChild('wrapper') wrapper: ElementRef;
  isCollapsed: boolean = true;
  private contentHeight: string;
  private _height: string;
  constructor(@Attribute('height') public height: string = '') {
    this._height = height;
  }
  ngAfterViewInit() {
    this.contentHeight = this.wrapper.nativeElement.clientHeight + 'px';
  }
  onIsCollapsed(){
    this.isCollapsed = !this.isCollapsed;
    this._height = this.isCollapsed ? this.height : this.contentHeight;
  }
}
