import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-position-history',
  templateUrl: './position-history.component.html',
  styleUrls: ['./position-history.component.css']
})
export class PositionHistoryComponent implements OnInit {

  postionHistoryInfo: any;

  constructor(
    public genSrv: GeneralService,
  ) { }

  ngOnInit(): void {
    this.getPositionHistory();
  }

  getPositionHistory() {
    const data: any = localStorage.getItem("positionHistory");
    this.postionHistoryInfo = JSON.parse(data)
  }

}
