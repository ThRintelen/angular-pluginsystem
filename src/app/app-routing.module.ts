import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature2',
    loadChildren: () =>
      import('./feature2/feature2.module').then((m) => m.Feature2Module),
    data: {
      pluginId: 'feature2',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
