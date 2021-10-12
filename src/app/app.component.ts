import {Component} from '@angular/core';
import {GP} from '../model/gp';
import {ResponseGP} from '../model/responseGP';
import {GpService} from './services/gp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error = false;
  scanActive = true;
  resultData: ResponseGP = null;

  constructor(private gpService: GpService) {}

  scan(data: GP): void {
    this.scanActive = false;
    if (data && data.text) {
      this.gpService.getData(data.text)
      .subscribe(gpObj => {
        if (gpObj.status === 'error') {
          this.scanActive = true;
          this.error = true;
        } else {
          this.resultData = gpObj;
        }
      }, error => {
        this.scanActive = true;
        this.error = true;
      });
    } else {
      this.scanActive = true;
    }
  }

  reset(): void {
    this.scanActive = true;
    this.error = null;
    this.resultData = null;
  }
}
