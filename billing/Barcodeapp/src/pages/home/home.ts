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

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {
    this.niceString = "abc \n abc"
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;

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
