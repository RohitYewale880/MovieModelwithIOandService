import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-matdilog-component',
  templateUrl: './matdilog-component.component.html',
  styleUrls: ['./matdilog-component.component.scss']
})
export class MatdilogComponentComponent implements OnInit {

  boxmsg! :string
  constructor(
    private _matref: MatDialogRef<MatdilogComponentComponent>
  ) { }

  ngOnInit(): void {
  }

  onClick(confirm: boolean) {
    this._matref.close(confirm)
  }

}
