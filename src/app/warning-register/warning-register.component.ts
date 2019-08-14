import { WarningService } from './../warning.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Warning } from '../warning';

@Component({
  selector: 'app-warning-register',
  templateUrl: './warning-register.component.html',
  styleUrls: ['./warning-register.component.css']
})
export class WarningRegisterComponent implements OnInit {

  warning: Warning = new Warning();

  isEdit: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private warningService: WarningService) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
  }

  return() {
    this.router.navigateByUrl('dashboard');
  }

  save() {
    this.warningService.createWarning(this.warning)
        .subscribe();
  }

  onSubmit() {
    this.save();

    this.router.navigateByUrl('dashboard');
  }
}
