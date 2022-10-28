import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PLUGIN } from '../plugin/plugin.token';
import { Feature1Component } from './feature1.component';

@NgModule({
  declarations: [Feature1Component],
  imports: [CommonModule],
  providers: [{ provide: PLUGIN, useValue: 'feature1', multi: true }],
})
export class Feature1Module {}
