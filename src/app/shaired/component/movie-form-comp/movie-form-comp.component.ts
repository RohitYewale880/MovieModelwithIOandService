import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Imovie } from '../../modals/movie';

@Component({
  selector: 'app-movie-form-comp',
  templateUrl: './movie-form-comp.component.html',
  styleUrls: ['./movie-form-comp.component.scss']
})
export class MovieFormCompComponent implements OnInit, OnChanges {

  isineditmode: boolean = false

  @ViewChild('movieName') movieName !: ElementRef
  @ViewChild('movieImg') movieImg !: ElementRef
  @ViewChild('movieDesciption') movieDesciption !: ElementRef
  @ViewChild('movieRating') movieRating !: ElementRef

  @Output() emitformclose: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() emitnewobj: EventEmitter<Imovie> = new EventEmitter<Imovie>()
  @Output() emitupdatedobj: EventEmitter<Imovie> = new EventEmitter<Imovie>()
  @Input('getMovieObjet') getMovieObjet!: Imovie

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (
      changes['getMovieObjet'] &&
      changes['getMovieObjet'].currentValue &&
      changes['getMovieObjet'].currentValue.movieId
    ) {

      this.isineditmode = true;

      setTimeout(() => {
        this.movieName.nativeElement.value = this.getMovieObjet.movieName;
        this.movieImg.nativeElement.value = this.getMovieObjet.movieImg;
        this.movieDesciption.nativeElement.value = this.getMovieObjet.movieDescription;
        this.movieRating.nativeElement.value = this.getMovieObjet.movieRating;
      });

    } else {

      this.isineditmode = false;

      setTimeout(() => {
        this.movieName.nativeElement.value = '';
        this.movieImg.nativeElement.value = '';
        this.movieDesciption.nativeElement.value = '';
        this.movieRating.nativeElement.value = '';
      });
    }
  }

  ngOnInit(): void {
  }

  formClose(res: boolean) {
    this.emitformclose.emit(res)
  }

  onMovieadd() {
    if (
      this.movieName.nativeElement.value &&
      this.movieImg.nativeElement.value &&
      this.movieDesciption.nativeElement.value &&
      this.movieRating.nativeElement.value
    ) {
      let newobj: Imovie = {
        movieId: Date.now().toString(),
        movieName: this.movieName.nativeElement.value,
        movieDescription: this.movieDesciption.nativeElement.value,
        movieImg: this.movieImg.nativeElement.value,
        movieRating: this.movieRating.nativeElement.value
      }

      this.emitnewobj.emit(newobj)

      this.movieName.nativeElement.value = ''
      this.movieImg.nativeElement.value = ''
      this.movieDesciption.nativeElement.value = ''
      this.movieRating.nativeElement.value = ''

      this.formClose(false)
    }
  }

  onUdateMovie() {
    if (
      this.movieName.nativeElement.value &&
      this.movieImg.nativeElement.value &&
      this.movieDesciption.nativeElement.value &&
      this.movieRating.nativeElement.value
    ) {
      let Updated_obj: Imovie = {
        movieId: this.getMovieObjet.movieId,
        movieName: this.movieName.nativeElement.value,
        movieDescription: this.movieDesciption.nativeElement.value,
        movieImg: this.movieImg.nativeElement.value,
        movieRating: this.movieRating.nativeElement.value
      }

      this.emitupdatedobj.emit(Updated_obj)
      

      this.getMovieObjet = {} as Imovie;

      this.movieName.nativeElement.value = '';
      this.movieImg.nativeElement.value = '';
      this.movieDesciption.nativeElement.value = '';
      this.movieRating.nativeElement.value = '';

      this.isineditmode = false;

      this.formClose(false);
    }
  }

}
