import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  qrData = null;
  createdCode = null;
  scannedCode = null;
  niceString;
  totalPrice: number = 0;

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = JSON.parse(barcodeData.text);
      let sc = this.scannedCode;
      this.niceString = "\r\t\t\t  " + sc.company.name + "\n" + sc.company.addres + "\n" + "\t\t\t  " + sc.company.storeId + "\n" + "\t"  + sc.company.storeAddres + "\n";
      this.niceString += "--------------------------------------------\n";
      this.niceString += "--------------------------------------------\n";
      let productsString;
      for (let pr of sc.products) {
        this.niceString = this.niceString + "\t" + pr.name + "\t\t" + pr.quantity + "\t\t" + pr.price * pr.quantity + " EUR" + "\n";
        this.totalPrice += parseInt(pr.price) * parseInt(pr.quantity);
      }
      this.niceString += "Total:" + "\t\t\t\t\t" + this.totalPrice + " EUR\n";
      this.niceString += "\t------------------------------------";
      this.niceString = this.niceString + "\n" + "Terminal ID.:\t" + sc.bankResponds.terminalId + "\n" + "Clerk:\t\t" + sc.bankResponds.clerk + "\n" + "Acq.:\t\t" + sc.bankResponds.acq + "\n" + "Card:\t\t" + sc.bankResponds.card + "\n" + "Card No.:\t" + sc.bankResponds.cardNo + "\n" + "Date:\t\t" + sc.bankResponds.date + "\n" + "Ref. No.:\t\t" + sc.bankResponds.refno + "\n" + "Auth.:\t\t" + sc.bankResponds.auth + "\n" + "Aid.:\t\t" + sc.bankResponds.aid + "\n" + "Response:\t" + sc.bankResponds.resp + "\n" + "Mode:\t\t" + sc.bankResponds.mode + "\n";
      this.niceString += "\t------------------------------------\n";
      this.niceString = this.niceString + "Date:\t\t" + sc.other.date + "\n" + "Doc. No.:\t" + sc.other.docnumber + "\n";

    }, (err) => {
        console.log('Error: ', err);
    });
  }
  backButton() {
    this.qrData = null;
    this.createdCode = null;
    this.scannedCode = null;
  }

}
