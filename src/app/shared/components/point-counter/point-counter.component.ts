import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-point-counter',
  templateUrl: './point-counter.component.html',
  styleUrls: ['./point-counter.component.scss']
})
export class PointCounterComponent implements OnInit {
 // @Input()count: number  = 0;
  constructor() { }
  count: number  = 0;
  @Output()onCountChange: EventEmitter<number> = new EventEmitter<number>();
  @Input()generalCharacteristic = [
    {
      name: 'orientation',
      point: this.count
    },
    {
      name: 'adequancy',
      point: this.count
    },
    {
      name: 'criticality',
      point: this.count
    },
    {
      name: 'exportMotivation',
      point: this.count
    },
    {
      name:  'emotionalState',
      point: this.count
    },
    {
      name:  'perfomance',
      point: this.count
    },
    {
      name:  'following instructions',
      point: this.count
    },
    {
      name:  'doing tasks',
      point: this.count
    },
    {
      name:  'accepting help',
      point: this.count
    },
  ]
  ngOnInit(): void {
  }
  countChange(){
      this.onCountChange.emit(this.count)
  }
  decreaseCount(button: any){
    if ( this.count > 0){
      console.log(button)
      this.count--
      this.countChange()
    }
  }
  increaseCount(button:any){
    if ( this.count < 3){
      console.log(button)
      this.count++
      this.countChange()
    }
  }


}
