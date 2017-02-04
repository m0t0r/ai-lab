import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ExperimentCardComponent } from './components/experiment-card/experiment-card.component';

@NgModule({
  imports: [MaterialModule.forRoot(), CommonModule, FormsModule, HttpModule],
  exports: [
    MaterialModule, CommonModule, FormsModule, HttpModule,
    ExperimentCardComponent],
  declarations: [ExperimentCardComponent]
})
export class SharedModule { }
