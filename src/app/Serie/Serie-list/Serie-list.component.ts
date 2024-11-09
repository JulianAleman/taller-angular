import { Component, OnInit } from '@angular/core';
import { SerieDetail } from '../Serie-detail';
import { SerieService } from '../Serie.service';


@Component({
    selector:'app-Serie-list',
    templateUrl:'./Serie-list.component.html',
    styleUrls:['./Serie-list.component.css']
})
export class SerieListComponent implements OnInit{
    series: Array<SerieDetail>=[];
    selectedSerie!: SerieDetail;
    selected: boolean =false

    constructor(private serieService: SerieService){}

    getSeries(){
        this.serieService.getSeries().subscribe(series=>{
            this.series=series;
        })
    }
    get promedioTemporadas(): number {
        if (this.series.length === 0) return 0;  // Si no hay series, el promedio es 0
        const totalTemporadas = this.series.reduce((sum, serie) => sum + serie.temporadas, 0);
        return totalTemporadas / this.series.length;
    }

    selectAsesor(serie:SerieDetail){
        this.selectedSerie = serie;
        this.selected = true; 
    }

    ngOnInit(){
        this.getSeries();
    }


}