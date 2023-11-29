import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, MaterialModule],
})
export class NotFoundModule {}
