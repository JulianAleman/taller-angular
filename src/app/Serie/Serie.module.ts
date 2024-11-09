import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AsesorRoutingModule } from './Serie-routing.module';
import { SerieListComponent } from './Serie-list/Serie-list.component';
import { SerieDetailComponent } from './Serie-detail/Serie-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        AsesorRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations:[SerieListComponent, SerieDetailComponent],
    exports:[SerieListComponent, SerieDetailComponent]
})

export class SerieModule{}