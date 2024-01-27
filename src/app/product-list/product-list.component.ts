import { Component } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products]

  showMessage() {
      window.alert('The product has been shared!')
  }
}
