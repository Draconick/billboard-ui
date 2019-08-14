import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { WarningService } from '../warning.service';
import { Warning } from '../warning';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataAtual = new Date();
  warnings: Warning[] = [];

  constructor(private router: Router,
              private warningService: WarningService) { }

  ngOnInit() {

    this.getWarnings();
  }

  visualize(id: number) {
    this.router.navigateByUrl('/warning/detail/' + id);
  }

  register() {
    this.router.navigateByUrl('/warning/register');
  }

  edit(id: number) {
    this.router.navigateByUrl('warning/register/' + id);
  }

  delete(id: number) {
    this.warnings = this.warnings.filter(w => w.id !== id);
    this.warningService.deleteWarning(id)
        .subscribe();
  }

  getWarnings(): void {
    this.warningService.getListWarnings()
        .subscribe(warnings => this.warnings = warnings);
  }
}
