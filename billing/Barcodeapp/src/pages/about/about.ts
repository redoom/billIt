import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  invoicesData = [];
  invoicesWriteOut = [];

  spaces = "\t\t"

  
  constructor() {
    let add1 = {"company":{"name":"HACKUPC   ","addres":"\t\tCarrer de Mallorca, 401,\n\t\t08013 Barcelona, Spain","storeId":"Team Billit","storeAddres":"Budapest, Hosok tere, 1146 Hungary","vat":"012826501"},"invoices":[{"name":"alma","quantity":"10","price":"100"},{"name":"korte","quantity":"5","price":"60"},{"name":"cseri","quantity":"52","price":"60"}],"bankResponds":{"total":100,"terminalId":"000059644","clerk":"3953","acq":"HACKUPC BANK","card":"Mastercard","cardNo":"**** **** **** 2185","date":"13-10-2019","refno":"0000053976","auth":"649375","aid":"A000000005395","resp":"ACCEPTED","mode":"CTLS ONLINE PIN"},"other":{"date":"13-10-2019","docnumber":"A01FG2573", "war": "true"}};
    this.invoicesData.push(add1);
    let addW1 =  add1.other.date + "\n\n" + add1.company.name + "\t\t\t\t\t" + add1.bankResponds.total + " EUR";
    this.invoicesWriteOut.push(addW1);

    let add2 = {"company":{"name":"SUPERSTORE","addres":"\t\tFreightbury Drive, 10,\n\t\tCB3 9BB Hull, UK","storeId":"S-Store012","storeAddres":"Brighton, Keynes Avenue, BR5 56Z UK","vat":"124563587"},"invoices":[{"name":"Cake","quantity":"1","price":"7"},{"name":"T-Shirt","quantity":"2","price":"20"},{"name":"Lasagne","quantity":"2","price":"11"}],"bankResponds":{"total":76,"terminalId":"000125478","clerk":"0222","acq":"VeryGoodBank","card":"Visa Debit","cardNo":"**** **** **** 1548","date":"09-08-2019","refno":"0000069874","auth":"325478","aid":"A000000089541","resp":"ACCEPTED","mode":"BPRK ONLINE PIN"},"other":{"date":"09-08-2019","docnumber":"A02LK2547"}};
    this.invoicesData.push(add2);
    let addW2 = add2.other.date + "\n\n" + add2.company.name + "\t\t\t\t" + add2.bankResponds.total + " EUR";
    this.invoicesWriteOut.push(addW2);
    
    let add3 = {"company":{"name":"Premium & Co.","addres":"\t\Banhofstraße  49, Köln, DE\n\t\tL12 ","storeId":"P&Co2","storeAddres":"London, Oxford Street 5, L01 BB6 UK","vat":"6587456"},"invoices":[{"name":"Shirt","quantity":"3","price":"49"},{"name":"Shoes","quantity":"1","price":"120"},{"name":"Jeans","quantity":"2","price":"70"}],"bankResponds":{"total":58,"terminalId":"000365412","clerk":"Adam05","acq":"Barclays Bank","card":"Visa Debit","cardNo":"**** **** **** 6584","date":"21-09-2019","refno":"0000056987","auth":"236541","aid":"A000000089541","resp":"ACCEPTED","mode":"CTLS ONLINE PIN"},"other":{"date":"21-09-2019","docnumber":"A02LI6743", "war": "true"}};
    this.invoicesData.push(add3);
    let addW3 = add3.other.date + "\n\n" + add3.company.name + "\t\t\t\t" + add3.bankResponds.total + " EUR";
    this.invoicesWriteOut.push(addW3);
    
    let add4 = {"company":{"name":"EP SPORTS","addres":"\t\Kennedy Way, Dallas, USA\n\t\tL12 ","storeId":"14025","storeAddres":"New York, 5th Avenue 456, USA","vat":"971254"},"products":[{"name":"Helmet","quantity":"1","price":"79"},{"name":"Socks","quantity":"4","price":"5"},{"name":"Shaker","quantity":"1","price":"6"}],"bankResponds":{"total":12,"terminalId":"000845621","clerk":"Macy:)","acq":"OTP Bank","card":"Mastercard","cardNo":"**** **** **** 7865","date":"10-10-2019","refno":"0000124587","auth":"369741","aid":"A000000321456","resp":"ACCEPTED","mode":"CTLS ONLINE PIN"},"other":{"date":"10-10-2019","docnumber":"A00UZ8O63"}};
    this.invoicesData.push(add4);
    let addW4 = add4.other.date + "\n\n" + add4.company.name + "\t\t\t\t\t" + add4.bankResponds.total + " EUR";
    this.invoicesWriteOut.push(addW4);

    let add5 = {"company":{"name":"Sunny Diner","addres":"\t\Fo utca 19, Budapest 1017, HU\n\t\tL12 ","storeId":"001","storeAddres":"Huvosvolgyi ut 45, 1029, Hungary","vat":"547852"},"products":[{"name":"Hamburger","quantity":"10","price":"12"},{"name":"Coke","quantity":"5","price":"3"},{"name":"Ice Cream","quantity":"20","price":"2"}],"bankResponds":{"total":29,"terminalId":"000164789","clerk":"C-Lo:)","acq":"CIB Bank","card":"American Express Credit","cardNo":"**** **** **** 3254","date":"06-07-2019","refno":"0000235478","auth":"369741","aid":"A000000325548","resp":"ACCEPTED","mode":"CTLS ONLINE PIN"},"other":{"date":"06-07-2019","docnumber":"A009PO25B3"}};
    this.invoicesData.push(add5);
    let addW5 = add5.other.date + "\n\n" + add5.company.name + "\t\t\t\t\t" + add5.bankResponds.total + " EUR";
    this.invoicesWriteOut.push(addW5);

    let add6 = {"company":{"name":"Sydney Zoo","addres":"\t\Bird Island, Sydney, AUS\n\t\tL12 ","storeId":"Entr.St.","storeAddres":"Bird Island, Sydney, AUS","vat":"654258"},"products":[{"name":"Adult","quantity":"2","price":"25"},{"name":"Child","quantity":"3","price":"10"},{"name":"Zoo Food Cream","quantity":"1","price":"2"}],"bankResponds":{"total":138,"terminalId":"000156987","clerk":"125","acq":"HSBC Bank","card":"Mastercard","cardNo":"**** **** **** 4236","date":"01-08-2018","refno":"0000233485","auth":"365148","aid":"A000000564123","resp":"ACCEPTED","mode":"CTLS ONLINE PIN"},"other":{"date":"01-08-2018","docnumber":"A008D67ER6", "war": "true"}};
    this.invoicesData.push(add6);
    let addW6 = add6.other.date + "\n\n" + add6.company.name + "\t\t\t\t\t" + add6.bankResponds.total + " EUR";
    this.invoicesWriteOut.push(addW6);

  }

  cardTouch(i){
    let niceString
    let totalPrice = 0;
      niceString = "\r\t\t\t  " + this.invoicesData[i].company.name + "\n" + this.invoicesData[i].company.addres + "\n" + "\t\t\t  " + this.invoicesData[i].company.storeId + "\n" + "\t"  + this.invoicesData[i].company.storeAddres + "\n";
      niceString += "--------------------------------------------\n";
      niceString += "--------------------------------------------\n";
      let invoicesString;
      for (let pr of this.invoicesData[i].invoices) {
        niceString = niceString + "\t" + pr.name + "\t\t" + pr.quantity + "\t\t" + pr.price * pr.quantity+ " EUR" + "\n";
        totalPrice += parseInt(pr.price) * parseInt(pr.quantity);
      }
      niceString += "Total:" + "\t\t\t\t\t" + totalPrice + " EUR\n";
      niceString += "\t------------------------------------";
      niceString = niceString + "\n" + "Terminal ID.:\t" + this.invoicesData[i].bankResponds.terminalId + "\n" + "Clerk:\t\t" + this.invoicesData[i].bankResponds.clerk + "\n" + "Acq.:\t\t" + this.invoicesData[i].bankResponds.acq + "\n" + "Card:\t\t" + this.invoicesData[i].bankResponds.card + "\n" + "Card No.:\t" + this.invoicesData[i].bankResponds.cardNo + "\n" + "Date:\t\t" + this.invoicesData[i].bankResponds.date + "\n" + "Ref. No.:\t\t" + this.invoicesData[i].bankResponds.refno + "\n" + "Auth.:\t\t" + this.invoicesData[i].bankResponds.auth + "\n" + "Aid.:\t\t" + this.invoicesData[i].bankResponds.aid + "\n" + "Response:\t" + this.invoicesData[i].bankResponds.resp + "\n" + "Mode:\t\t" + this.invoicesData[i].bankResponds.mode + "\n";
      niceString += "\t------------------------------------\n";
      niceString = niceString + "Date:\t\t" + this.invoicesData[i].other.date + "\n" + "Doc. No.:\t" + this.invoicesData[i].other.docnumber + "\n";
      
      this.invoicesWriteOut[i] = niceString;
      
    }

}
