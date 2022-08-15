import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.counter("count1", 700, 1587, 2);
    this.counter("count2", 400, 700, 2500);
    this.counter("count3", 700, 927, 3000);
    this.counter("count4", 900, 248, 3000);
  }


  counter(id:string, start:number, end:number, duration:number){
        let obj: any = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = String(current);
            if(current == end){
                clearInterval(timer);
            }
        }, step); 
    }

  }
