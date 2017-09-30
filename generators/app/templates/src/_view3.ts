import "bower:polymer/polymer-element.html";
import "./shared-styles";
import { CustomElement, attr, compute, notify, observe, style, template } from 'twc/polymer';

/**
 * `<%= viewPrefix %>-view3` 
 *
 * @customElement
 * @polymer 
 */
@CustomElement()
<% if (templateLocation == 'inHTML') { -%>@template('<%= viewPrefix %>-view3.template.html')
<% } -%><% if (templateLocation == 'atTemplate') { -%>@template(`<style include="shared-styles">
:host {
  display: block;

  padding: 10px;
}
</style>

<div class="card">
<div class="circle">3</div>
<h1>View Three</h1>
<p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
<p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
</div>`)
<% } -%>export default class <%= elementClassName3 %> extends Polymer.Element {

    <% if (templateLocation == 'templateFn') { -%>static get template() {
        return `<style include="shared-styles">
        :host {
          display: block;
    
          padding: 10px;
        }
      </style>
    
      <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>`;
}<% } -%>
}