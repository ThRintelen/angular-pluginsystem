import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Feature1Module } from './feature1/feature1.module';
import { PluginModule } from './plugin/plugin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Feature1Module, PluginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
