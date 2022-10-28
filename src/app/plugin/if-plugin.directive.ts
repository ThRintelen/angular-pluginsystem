import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PluginService } from './plugin.service';

@Directive({
  selector: '[trpIfPlugin]',
})
export class IfPluginDirective {
  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly pluginService: PluginService
  ) {}

  @Input('trpIfPlugin') set plugin(pluginId: string | string[]) {
    this.viewContainerRef.clear();

    if (!pluginId || this.pluginService.hasPlugin(pluginId)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
