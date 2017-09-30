import "bower:polymer/polymer-element.html";
import "./shared-styles";
import { CustomElement, attr, compute, notify, observe, style, template } from 'twc/polymer';

/**
 * `<%= viewPrefix %>-view2` 
 *
 * @customElement
 * @polymer 
 */
@CustomElement()
<% if (templateLocation == 'inHTML') { -%>@template('<%= viewPrefix %>-view2.template.html')
<% } -%><% if (templateLocation == 'atTemplate') { -%>@template(`<style include="shared-styles">
:host {
  display: block;

  padding: 10px;
}
</style>

<div class="card">
<div class="circle">2</div>
<h1>View Two</h1>
<p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
<p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
</div>`)
<% } -%>export default class <%= elementClassName2 %> extends Polymer.Element {

    <% if (templateLocation == 'templateFn') { -%>static get template() {
        return `<style include="shared-styles">
        :host {
          display: block;
    
          padding: 10px;
        }
      </style>
    
      <div class="card">
        <div class="circle">2</div>
        <h1>View Two</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
      </div>`;
}<% } -%>
}