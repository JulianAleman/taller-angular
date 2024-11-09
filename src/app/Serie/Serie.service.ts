import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SerieDetail } from './Serie-detail';
import { Serie } from './Serie';
import { series } from './Data';


@Injectable({
    providedIn : 'root'
})
export class SerieService {

    constructor(private http: HttpClient){}

    getSeries(): Observable<SerieDetail[]>{
        return of(series);
    }
    getSerie(id:number): Observable<SerieDetail>{
        const serie = series.find(s => s.id === id);
        if (!serie) {
            throw new Error(`Serie with ID ${id} not found`);
        }
        return of(serie);
    }
}
