import { WarningService } from './../warning.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Warning } from '../warning';

@Component({
  selector: 'app-warning-detail',
  templateUrl: './warning-detail.component.html',
  styleUrls: ['./warning-detail.component.css']
})
export class WarningDetailComponent implements OnInit {

  warning: Warning = null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private warningService: WarningService) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

    this.getWarning(id);
  }


  return() {
    this.router.navigateByUrl('dashboard');
  }

  getWarning(id: number) {
    this.warningService.getWarnings(id)
        .subscribe(
          data => {
            this.warning = data;
          }
        );
  }
}
