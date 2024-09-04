import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
    imports: [
        MatCardModule, MatButtonModule,MatIconModule,MatGridListModule
        
    ],
    exports: [
        MatCardModule, MatButtonModule,MatIconModule,MatGridListModule
    ]
})
export class MaterialModule {}
