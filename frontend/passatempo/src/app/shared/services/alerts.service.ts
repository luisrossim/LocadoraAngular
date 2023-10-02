import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private toastr: ToastrService) { }


  showSuccess(msg: any) {
    this.toastr.success(msg, '', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }

  showError(msg: any) {
    this.toastr.error(msg, '', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }

  showWarning(msg: any) {
    this.toastr.warning(msg, '', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }

  showInfo(msg: any) {
    this.toastr.info(msg, '', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }
  
}
