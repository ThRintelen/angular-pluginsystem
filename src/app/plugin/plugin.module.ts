import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HasPluginGuard } from './has-plugin.guard';
import { IfPluginDirective } from './if-plugin.directive';
import { PluginService } from './plugin.service';

@NgModule({
  declarations: [IfPluginDirective],
  imports: [RouterModule],
  exports: [IfPluginDirective],
  providers: [HasPluginGuard],
})
export class PluginModule {
  constructor(readonly router: Router, readonly pluginService: PluginService) {
    router.config
      .filter((route) => !!route.loadChildren && !!route.data?.['pluginId'])
      .forEach((route) => pluginService.registerLazy(route.data?.['pluginId']));
  }
}
