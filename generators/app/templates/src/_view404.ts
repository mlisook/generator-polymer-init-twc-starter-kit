import "bower:polymer/polymer-element.html";
import "./shared-styles";
import { CustomElement, attr, compute, notify, observe, style, template } from 'twc/polymer';

/**
 * `<%= viewPrefix %>-view404` 
 *
 * @customElement
 * @polymer 
 */
@CustomElement()
<% if (templateLocation == 'inHTML') { -%>@template('<%= viewPrefix %>-view404.template.html')
<% } -%><% if (templateLocation == 'atTemplate') { -%>@template(`<style>
:host {
  display: block;

  padding: 10px 20px;
}
</style>

<p>Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a></p>`)
<% } -%>export default class <%= elementClassName404 %> extends Polymer.Element {

    <% if (templateLocation == 'templateFn') { -%>static get template() {
        return `<style>
        :host {
          display: block;
    
          padding: 10px 20px;
        }
      </style>
    
      <p>Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a></p>`;
}<% } -%>
}