import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
        MatCardModule, MatButtonModule,MatIconModule
        
    ],
    exports: [
        MatCardModule, MatButtonModule,MatIconModule
    ]
})
export class MaterialModule {}
