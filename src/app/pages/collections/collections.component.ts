import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { ProductService } from '../../services/productservice';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collections',
  imports: [Breadcrumb,DataView,
    Tag,
    Rating,
    ButtonModule,
    CommonModule,
    SelectButton,
    FormsModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css',
  providers: [ProductService]
})
export class CollectionsComponent implements OnInit {
  items: MenuItem[] | undefined;

    home: MenuItem | undefined;
    layout: any = 'grid';

    products = signal<any>([]);

    options = ['list', 'grid'];

    constructor(private productService: ProductService) {}

    getSeverity(product: any) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return undefined;
        }
    }
    ngOnInit() {
        this.items = [
            { label: 'Electronics' },
            { label: 'Computer' },
            { label: 'Accessories' },
            { label: 'Keyboard' },
            { label: 'Wireless' }
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
        this.productService.getProducts().then((data : any) => {
          this.products.set([...data.slice(0,12)]);
      });
    }
}
