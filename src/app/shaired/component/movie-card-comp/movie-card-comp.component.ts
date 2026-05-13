import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovie } from '../../modals/movie';
import { MatDialog } from '@angular/material/dialog';
import { MatdilogComponentComponent } from '../matdilog-component/matdilog-component.component';

@Component({
  selector: 'app-movie-card-comp',
  templateUrl: './movie-card-comp.component.html',
  styleUrls: ['./movie-card-comp.component.scss']
})
export class MovieCardCompComponent implements OnInit {

  @Input() moviedata !: Array<Imovie>
  @Output() emitremoveid : EventEmitter<string> = new EventEmitter<string>()
  @Output() emitEditObj : EventEmitter<Imovie> = new EventEmitter<Imovie>()

  constructor(
    private matdilog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  trackbyfun(index: number, item: Imovie) {
    return item.movieId
  }

  onRemove(id: string) {
    let response = this.matdilog.open(MatdilogComponentComponent, {
      width: '450px',
      disableClose: true,
    })
    response.afterClosed().subscribe(res =>{
      if(res === true){
        this.emitremoveid.emit(id)
      }
    })
  }

  onEdit(movieobj : Imovie){
    this.emitEditObj.emit(movieobj)
  }

}