import {Component, Input, OnInit} from '@angular/core';
import { SerieDetail } from '../Serie-detail';
import {ActivatedRoute} from '@angular/router';
import {SerieService} from '../Serie.service';


@Component({
    selector: 'app-Serie-detail',
    templateUrl: './Serie-detail.component.html',
})

export class SerieDetailComponent implements OnInit {
    serieId!: number; 
    @Input() serieDetail!: SerieDetail;

    constructor(
        private route: ActivatedRoute,
        private serieService: SerieService
    ) {}

    getAsesor(){
        this.serieService.getSerie(this.serieId).subscribe(apiData=>{
            this.serieDetail = apiData;
        })
    }

    ngOnInit(){
        {
            if (this.serieDetail === undefined) {
         
                const serieIdFromRoute = this.route.snapshot.paramMap.get('id'); 
    
               
                if (serieIdFromRoute) {
                    this.serieId = +serieIdFromRoute; 
                    this.getAsesor(); 
                } else {
                    console.error('No se encontró el ID en la URL');
                }
            }
        }
        
    }
}