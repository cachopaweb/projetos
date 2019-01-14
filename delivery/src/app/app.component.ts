import { Component } from '@angular/core';
import { defineBase } from '@angular/core/src/render3';
import { Item } from './entities/item';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delivery';
  totalItens : number = 0;
  constructor (private cartService : CartService){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cartService.getItensCart().snapshotChanges()
    .subscribe(item =>{
      this.totalItens = 0;
      item.forEach(el =>{
        this.totalItens += 1;
      });
    });
  }
}
