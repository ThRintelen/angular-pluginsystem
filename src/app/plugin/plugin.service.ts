import { Inject, Injectable, Optional } from '@angular/core';
import { PLUGIN } from './plugin.token';

@Injectable({
    providedIn: 'root',
})
export class PluginService {
    private pluginIds: string[];

    constructor(@Optional() @Inject(PLUGIN) plugins: string[]) {
        this.pluginIds = plugins ?? [];
    }

    hasPlugin(pluginId: string | string[]): boolean {
        if (!pluginId || !pluginId?.length) {
            return true;
        }

        const plugins = Array.isArray(pluginId) ? pluginId : [pluginId];

        return this.pluginIds.some(plugin => plugins.includes(plugin));
    }

    registerLazy(pluginId: string) {
        this.pluginIds = this.pluginIds.concat(pluginId);
    }
}
