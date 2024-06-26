import { Component } from '@angular/core';
import { newData } from './data';
import { Table } from 'primeng/components/table/table';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  // showProductList: boolean = false;
  index: number;
  editPopUp: boolean = false;
  display: boolean = false;
  editable: boolean = true;
  updateProductName: string;
  updateProductPrice: string;
  updateProductCategory: string;

  name = 'Angular';
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

  view: any[] = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Product Names';
  showYAxisLabel = true;
  yAxisLabel = 'Price';
  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };
  //pie
  showLabels = true;
  isEditing = false;

  products = [
    {
      name: 'villa',
      value: '1000356',
      Pcategory: 'hcsdc',
    },
    {
      name: 'house',
      value: '100024',
      Pcategory: 'hcsdc',
    },
  ];
  constructor() {}

  // showproductTable() {
  //   this.showProductList = true;
  // }

  showDialog() {
    this.display = true;
  }
  addProduct(p: any): void {
    console.log(p.ProductName.value);
    this.products.push({
      name: p.ProductName.value,
      value: p.Pprice.value,
      Pcategory: p.Pcategory.value,
    });
    this.newData = this.products;
    console.log(this.newData);
    this.display = false;
    p.ProductName.value = '';
    Pprice: p.Pprice.value = '';
  }

  updateProduct(p: any): void {
    this.products.splice(p.index.value, 1, {
      name: p.ProductName.value,
      value: p.Pprice.value,
      Pcategory: p.Pcategory.value,
    });
    this.newData = this.products;
    console.log(this.newData);
    this.updateChart();

    this.editPopUp = !this.editPopUp;
    p.ProductName.value = '';
    Pprice: p.Pprice.value = '';
  }
  editProduct(i) {
    this.editPopUp = !this.editPopUp;
    this.index = i;
    this.updateProductPrice = this.products[i].value;
    this.updateProductName = this.products[i].name;
    this.updateProductCategory = this.products[i].Pcategory;
    this.newData = this.products;
  }
  deleteProduct(i) {
    this.products.splice(i, 1);
    this.newData = this.products;
  }
  // data goes here
  newData: any[] = [];
  updateChart() {
    this.newData = this.products.map((product) => {
      return { name: product.name, value: product.value };
    });
  }
  ngOnInit() {
    // Object.assign(this, { newData }); // Assign sample data to 'single' variable
    this.updateChart();
  }
}
