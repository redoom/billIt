import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  invoices = [];

  constructor() {
    let add1 = {"company":{"name":"HACKUPC","addres":"\t\tCarrer de Mallorca, 401,\n\t\t08013 Barcelona, Spain","storeId":"Team Billit","storeAddres":"Budapest, Hosok tere, 1146 Hungary","vat":"012826501"},"invoices":[{"name":"alma","quantity":"10","price":"100"},{"name":"korte","quantity":"5","price":"60"},{"name":"cseri","quantity":"52","price":"60"}],"bankResponds":{"terminalId":"000059644","clerk":"3953","acq":"HACKUPC BANK","card":"Mastercard","cardNo":"**** **** **** 2185","date":"13-10-2019","refno":"0000053976","auth":"649375","aid":"A000000005395","resp":"ACCEPTED","mode":"CTLS ONLINE PIN"},"other":{"date":"13-10-2019","docnumber":"A01FG2573"}};
    this.invoices.push(add1);
    let add2 = {"company":{"name":"SUPERSTORE ltd.","addres":"\t\tFreightbury Drive, 10,\n\t\tCB3 9BB Hull, UK","storeId":"S-Store012","storeAddres":"Brighton, Keynes Avenue, BR5 56Z UK","vat":"124563587"},"invoices":[{"name":"Cake","quantity":"1","price":"7"},{"name":"T-Shirt","quantity":"2","price":"20"},{"name":"Lasagne","quantity":"2","price":"11"}],"bankResponds":{"terminalId":"000125478","clerk":"0222","acq":"VeryGoodBank","card":"Visa Debit","cardNo":"**** **** **** 1548","date":"09-08-2019","refno":"0000069874","auth":"325478","aid":"A000000089541","resp":"ACCEPTED","mode":"BPRK ONLINE PIN"},"other":{"date":"09-08-2019","docnumber":"A02LK2547"}};
    this.invoices.push(add2);
    let add3 = {"company":{"name":"Premium & Co.","addres":"\t\Banhofstraße  49, Köln, DE\n\t\tL12 ","storeId":"P&Co2","storeAddres":"London, Oxford Street 5, L01 BB6 UK","vat":"6587456"},"invoices":[{"name":"Shirt","quantity":"3","price":"49"},{"name":"Shoes","quantity":"1","price":"120"},{"name":"Jeans","quantity":"2","price":"70"}],"bankResponds":{"terminalId":"000365412","clerk":"Adam05","acq":"Barclays Bank","card":"Visa Debit","cardNo":"**** **** **** 6584","date":"21-09-2019","refno":"0000056987","auth":"236541","aid":"A000000089541","resp":"ACCEPTED","mode":"CTLS ONLINE PIN"},"other":{"date":"21-09-2019","docnumber":"A02LI6743"}};
    /*this.invoices.push(add3);
    let add4 = "";
    this.invoices.push(add4);
    let add5 = "";
    this.invoices.push(add5);*/

  }

  cardTouch(inv){
    let niceString
    let totalPrice
      niceString = "\r\t\t\t  " + inv.company.name + "\n" + inv.company.addres + "\n" + "\t\t\t  " + inv.company.storeId + "\n" + "\t"  + inv.company.storeAddres + "\n";
      niceString += "--------------------------------------------\n";
      niceString += "--------------------------------------------\n";
      let invoicesString;
      for (let pr of inv.invoices) {
        niceString = niceString + "\t" + pr.name + "\t\t" + pr.quantity + "\t\t" + pr.price + " EUR" + "\n";
        totalPrice += parseInt(pr.price);
      }
      niceString += "Total:" + "\t\t\t\t\t" + totalPrice + " EUR\n";
      niceString += "\t------------------------------------";
      niceString = niceString + "\n" + "Terminal ID.:\t" + inv.bankResponds.terminalId + "\n" + "Clerk:\t\t" + inv.bankResponds.clerk + "\n" + "Acq.:\t\t" + inv.bankResponds.acq + "\n" + "Card:\t\t" + inv.bankResponds.card + "\n" + "Card No.:\t" + inv.bankResponds.cardNo + "\n" + "Date:\t\t" + inv.bankResponds.date + "\n" + "Ref. No.:\t\t" + inv.bankResponds.refno + "\n" + "Auth.:\t\t" + inv.bankResponds.auth + "\n" + "Aid.:\t\t" + inv.bankResponds.aid + "\n" + "Response:\t" + inv.bankResponds.resp + "\n" + "Mode:\t\t" + inv.bankResponds.mode + "\n";
      niceString += "\t------------------------------------\n";
      niceString = niceString + "Date:\t\t" + inv.other.date + "\n" + "Doc. No.:\t" + inv.other.docnumber + "\n";
  }

}
