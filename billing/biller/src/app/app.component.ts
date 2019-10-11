import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billQr';
  products: Product[] = [];
  billJson;

  newRow(){
    let add = new Product("", null, null);
    this.products.push(add);
  }

  billIt(){
    this.products.length = this.products.length -1;
    console.log(this.products);

    let addCompany = new BillCompany("HACKUPC","Carrer de Mallorca, 401, 08013 Barcelona, Spain", "Team BillIt", "Budapest, Hosok tere, 1146 Hungary",  "012826501");
    let addOther = new BillOther("13-10-2019", "A01FG2573");
    let addBankResponds = new BillBankResponds("000059644", "3953", "HACKUPC BANK", "Mastercard", "**** **** **** 2185", "13-10-2019", "0000053976", "649375", "A000000005395", "ACCEPTED", "CTLS ONLINE PIN" )
    let bill = new BillData(addCompany, this.products, addBankResponds, addOther);
    console.log(bill);
    this.billJson = JSON.stringify(bill);
    console.log(this.billJson);
  }
}
class BillData {
  constructor(public company: BillCompany, public products: Product[], public bankResponds: BillBankResponds, public other: BillOther) {
  }
}

class BillCompany {
  constructor(public name: string, public addres: string, public storeId: string, public storeAddres: string,  public vat: string, public iban?: string, public swift?: string) {
  }
}

class BillBankResponds {
  constructor(public terminalId: string, public clerk: string, public acq: string, public card: string, public cardNo: string, public date: string, public refno: string, public auth: string, public aid: string, public resp: string, public mode: string) {
    
  }
}

class BillOther {
  constructor(public date: string, public docnumber: string, public payed?: boolean) { 
   }
}

class Product {
  constructor(public name: string, public quantity: number, public price: number) {
    
  }
}
