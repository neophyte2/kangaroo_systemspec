import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-initiate-position',
  templateUrl: './initiate-position.component.html',
  styleUrls: ['./initiate-position.component.css']
})
export class InitiatePositionComponent implements OnInit {

  kangarooForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private genSrv: GeneralService
  ) {
  }

  ngOnInit(): void {
    this.ngOnForms();
  }

  // Get kangaroo Form Value
  get kf() {
    return this.kangarooForm.controls;
  }

  ngOnForms() {
    this.kangarooForm = this.fb.group({
      first_position: ["", Validators.required,],
      first_jump: ["", Validators.required,],
      second_position: ["", Validators.required,],
      second_jump: ["", Validators.required,],
    });
  }

  checkValue() {
    //Pos = position
    let pos = 0;

    //kp = kangaroo positon, kj = kangatoo jump
    let kp1 = this.kangarooForm.value.first_position, kp2 = this.kangarooForm.value.second_position;
    let kj1 = this.kangarooForm.value.first_jump, kj2 = this.kangarooForm.value.second_jump;

    if (kp2 > kp1) {
      kp1 = this.kangarooForm.value.second_position;
      kp2 = this.kangarooForm.value.first_position;
      kj1 = this.kangarooForm.value.second_jump;
      kj2 = this.kangarooForm.value.first_jump;
    }

    //loop to get position at meet fo both kp1 and kp2
    for (let x = 1; x < 100; x++) {

      //To Calculate the position
      pos = kp1 + (x * kj1);

      //Using the postion to get where the second kangaroo (kp2) will meet the first kangaroo (kp1)
      if ((pos - kp2) % kj2 === 0) {
        const yes = this.genSrv.sweetAlertSucess('YES')

        //Saving to the local storage
        this.saveToLocalStorage(kp1, kp2, kj1, kj2, 'YES')

        return yes
      }
    }

    const no = this.genSrv.sweetAlertError('NO')

    //Saving to the local storage
    this.saveToLocalStorage(kp1, kp2, kj1, kj2, 'NO')

    return no

  }

  saveToLocalStorage(kp1: any, kp2: any, kj1: any, kj2: any, value: any) {
    var payload: any[] = [];

    // Get the existing data
    var existingString: string | null = localStorage.getItem("positionHistory");

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    var existing: any[] = existingString ? JSON.parse(existingString) : payload;


    //Push data into exiting
    existing.push({
      first_pos: kp1,
      second_pos: kp2,
      first_jmp: kj1,
      second_jmp: kj2,
      meetPoint: value
    })

    // Save back to localStorage
    localStorage.setItem("positionHistory", JSON.stringify(existing));
  }

}
