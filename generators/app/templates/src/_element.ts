import "bower:polymer/polymer-element.html";
import "bower:app-layout/app-drawer/app-drawer.html";
import "bower:app-layout/app-drawer-layout/app-drawer-layout.html";
import "bower:app-layout/app-header/app-header.html";
import "bower:app-layout/app-header-layout/app-header-layout.html";
import "bower:app-layout/app-scroll-effects/app-scroll-effects.html";
import "bower:app-layout/app-toolbar/app-toolbar.html";
import "bower:app-route/app-location.html";
import "bower:app-route/app-route.html";
import "bower:iron-pages/iron-pages.html";
import "bower:iron-selector/iron-selector.html";
import "bower:paper-icon-button/paper-icon-button.html";
import "<%= viewPrefix %>-icons";

import { CustomElement, attr, compute, notify, observe, style, template } from 'twc/polymer';

/**
 * `<%= elementName %>` 
 *
 * @customElement
 * @polymer 
 */
@CustomElement()
<% if (templateLocation == 'inHTML') { -%>@template('<%= elementName %>.template.html')
<% } -%><% if (templateLocation == 'atTemplate') { -%>@template(`<%- templateText %>`)
<% } -%>export default class <%= elementClassName %> extends Polymer.Element {

  <% if (templateLocation == 'templateFn') { -%>static get template() {
    return `<%- templateText %>`;
  }
  <% } -%>
@attr() page:string;
routeData: any;
subRoute: string;
rootPath: string;
@observe("page") _pageChanged(page) {
    // Load page import on demand. Show 404 page if fails
    var resolvedPageUrl = this.resolveUrl('<%= viewPrefix %>-' + page + '.html');
    Polymer.importHref(
        resolvedPageUrl,
        null,
        this._showPage404.bind(this),
        true);
  }

@observe("routeData.page")  _routePageChanged(page) {
    // If no page was found in the route data, page will be an empty string.
    // Deault to 'view1' in that case.
    this.page = page || 'view1';

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _showPage404() {
    this.page = 'view404';
  }
}