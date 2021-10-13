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
  loading = false;

  constructor(private gpService: GpService) {}

  scan(data: GP): void {

    this.scanActive = false;
    this.loading = true;
    if (data && data.text) {
      this.gpService.getData(data.text)
      .subscribe(gpObj => {
        if (gpObj._raw) {
          this.resultData = gpObj;
          this.scanActive = false;
          this.error = false;
          this.loading = false;
        } else {
            this.resultData = gpObj;
            this.error = true;
            this.loading = false;
        }
      }, error => {
        console.log(error);
        this.resultData = error;
        this.scanActive = true;
        this.error = true;
        this.loading = false;
      });
    } else {
      this.scanActive = true;
      this.loading = false;
    }
  }

  reset(): void {
    this.scanActive = true;
    this.error = null;
    this.resultData = null;
    this.loading = false;
  }
}
