import "bower:polymer/polymer-element.html";
import "./shared-styles";
import { CustomElement, attr, compute, notify, observe, style, template } from 'twc/polymer';

/**
 * `<%= viewPrefix %>-view1` 
 *
 * @customElement
 * @polymer 
 */
@CustomElement()
<% if (templateLocation == 'inHTML') { -%>@template('<%= viewPrefix %>-view1.template.html')
<% } -%><% if (templateLocation == 'atTemplate') { -%>@template(`<style include="shared-styles">
:host {
  display: block;

  padding: 10px;
}
</style>

<div class="card">
<div class="circle">1</div>
<h1>View One</h1>
<p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
<p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
</div>`)
<% } -%>export default class <%= elementClassName1 %> extends Polymer.Element {

    <% if (templateLocation == 'templateFn') { -%>static get template() {
        return `<style include="shared-styles">
    :host {
      display: block;
    
      padding: 10px;
    }
    </style>
    
    <div class="card">
    <div class="circle">1</div>
    <h1>View One</h1>
    <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
    <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
    </div>`;
}<% } -%>
}