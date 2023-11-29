import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CenteredLayoutComponent } from './centered-layout/centered-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [MainLayoutComponent, CenteredLayoutComponent],
  declarations: [MainLayoutComponent, CenteredLayoutComponent],
})
export class LayoutModule {}
