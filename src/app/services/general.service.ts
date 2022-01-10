import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Location } from "@angular/common";

@Injectable({
  providedIn: "root",
})

export class GeneralService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private location: Location
  ) { }

  /**
   * For Success Messages
   * @param msg 
   * @returns 
   */
  sweetAlertSucess(msg: any) {
    return Swal.fire(msg, "Congratulations", "success");
  }

  /**
   * For Error Messages
   * @param msg 
   * @returns 
   */
  sweetAlertError(msg: any) {
    return Swal.fire(msg, "Sorry ,Try Again", "error");
  }

  /**
   * Use to go back to the last page
   */
  goBack() {
    this.location.back();
  }

}
