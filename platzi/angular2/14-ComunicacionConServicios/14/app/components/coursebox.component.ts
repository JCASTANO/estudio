import {Component, Input} from '@angular/core';
import {Course} from '../common/course';
import {CartService} from '../services/cart.service';
@Component({
  selector: 'coursebox',
  template: 
  `
     <div class="course">
        <img [src]="course.image">
        <h2>{{course.name}}</h2>
        <span class="price">
          {{course.price | currency : 'USD': true :'1.2-2'}}
        </span>
        <button (click)="add(course)">Agregar al carrito</button>
      </div>
  `
})

export class CourseBoxComponent{
  @Input()
  course: Course;

  constructor(private CartService: CartService){

  }

  add( course : Course){
    this.CartService.addToCart( course );
  }
} 