import { Component, OnInit } from '@angular/core';
import { faChartLine, faListUl, faSignOutAlt, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faChartLine = faChartLine;
  faListUl = faListUl;
  faPlusSquare = faPlusSquare;
  faSnowflake = faSnowflake;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
