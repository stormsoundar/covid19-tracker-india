import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { DistrictInfo } from "src/app/domain/districtInfo";

@Component({
  selector: "app-district-data",
  templateUrl: "./district-data.component.html",
  styleUrls: ["./district-data.component.css"],
})
export class DistrictDataComponent implements OnInit {
  public districtData: DistrictInfo[] = [];

  constructor(public router: Router, public activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((data) => {
        if (data) {
          this.districtData = data.districtData.districtData;
        }
      });
  }

  public goBack() {
    this.router.navigate(['/']);
  }
}
