import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class MaterialModule {}
