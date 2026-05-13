import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../modals/movie';
import { movieArray } from '../../consts/movie';
import { SnakbarserviceService } from '../../service/snakbarservice.service';

@Component({
  selector: 'app-movie-dashboard-comp',
  templateUrl: './movie-dashboard-comp.component.html',
  styleUrls: ['./movie-dashboard-comp.component.scss']
})
export class MovieDashboardCompComponent implements OnInit {

  isformopen: boolean = false;
  movieArray!: Array<Imovie>
  editMovieObj !: Imovie

  constructor(
    private _snakbar : SnakbarserviceService
  ) { }

  ngOnInit(): void {
    this.movieArray = movieArray
  }

  onMovieFormAdd() {
    this.isformopen = true
  }

  onFormClose(res: boolean) {
    this.isformopen = res;
    this.editMovieObj = {} as Imovie;
  }

  GetNewObj(obj: Imovie) {
    this.movieArray.push(obj)

    this._snakbar.OpenSnakbar(`The Movie ${obj.movieName} is Added Successfully!!!`)
  }

  GetRemoveId(id: string) {
    let getindex = this.movieArray.findIndex((ele) => ele.movieId === id)
    let item = this.movieArray.splice(getindex, 1)

    this._snakbar.OpenSnakbar(`The Movie ${item[0].movieName} is Remove Successfully!!!`)

  }

  geteditobject(obj: Imovie) {
    this.editMovieObj = { ...obj }
    this.isformopen = true
  }

  GetUpdateMovie(obj:Imovie){
    let getindex = this.movieArray.findIndex((ele) => ele.movieId === obj.movieId);
    this.movieArray[getindex] = obj

    this._snakbar.OpenSnakbar(`The Movie ${obj.movieName} is Updated Successfully!!!`)

  }

}
