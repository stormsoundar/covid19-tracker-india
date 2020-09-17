import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { Data, Router } from "@angular/router";
import { CommonCoreService } from "../common-core-service.service";
import {TotalInfo} from "../domain/totalInfo"

@Component({
  selector: "app-state-data",
  templateUrl: "./state-data.component.html",
  styleUrls: ["./state-data.component.css"],
})
export class StateDataComponent implements OnInit {
  public totalInfo;
  public stateData: any = [];

  constructor(
    private commonCoreApiService: CommonCoreService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getTotalInfo();
    this.getStateInfo();
  }

  public getTotalInfo() {
    this.commonCoreApiService.getTotalInfo().subscribe(
      (totalInfo: any) => {
        this.totalInfo = totalInfo;
      },
      (error) => {}
    );
  }

  public getStateInfo() {
    this.commonCoreApiService.getStateInfo().subscribe(
      (totalInfo: TotalInfo[]) => {
        this.stateData = totalInfo;
        // console.log(totalInfo);
        
      },
      (error) => {}
    );
  }

  public RowSelected(selectedRow){
    this.router.navigate(['/district-data'], { state: { districtData: selectedRow } });
  }
}
