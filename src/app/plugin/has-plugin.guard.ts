import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { PluginService } from './plugin.service';

@Injectable()
export class HasPluginGuard implements CanActivate {
  constructor(private readonly pluginService: PluginService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.pluginService.hasPlugin(route.data['pluginId']);
  }
}
