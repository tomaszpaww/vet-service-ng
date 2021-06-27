import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {
  rows = [{id: 2, fullName: "TOm"}, {id: 4, fullName: "dasdasdasd"}]
  displayedColumns = ['id', 'fullName'];

  constructor() { }

  ngOnInit(): void {
  }

}
