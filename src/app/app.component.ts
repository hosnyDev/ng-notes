import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'ng-notes';

  arry = [1, 2, 3, 4, 5];

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('msg: Hello world!', 'Title');
  }
}
