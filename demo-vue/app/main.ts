import Vue from 'nativescript-vue';
import * as views from './views';

import * as trace from '@nativescript/core/trace';
trace.addCategories(trace.categories.NativeLifecycle);
trace.addCategories(trace.categories.Layout);
// trace.enable();

Vue.component(views.Home.name, views.Home);
new Vue({
    template: `
      <Frame>
        <Home />
      </Frame>
    `
}).$start();
