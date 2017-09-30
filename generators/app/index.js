"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const Generator = require("yeoman-generator");
class GeneratorStarterKitTsTwc extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }
    initializing() {
        // Yeoman replaces dashes with spaces. We want dashes.
        this.appname = this.appname.replace(/\s+/g, '-');
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            const prompts = [
                {
                    name: 'name',
                    type: 'input',
                    message: `Application name`,
                    default: this.appname,
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Brief description of the application',
                },
                {
                    type: 'input',
                    name: 'elementName',
                    message: `Main element name`,
                    default: (answers) => `${answers.name}-app`,
                    validate: (name) => {
                        const nameContainsHyphen = name.includes('-');
                        if (!nameContainsHyphen) {
                            this.log('\nUh oh, custom elements must include a hyphen in ' +
                                'their name. Please try again.');
                        }
                        return nameContainsHyphen;
                    },
                },
                {
                    name: 'viewPrefix',
                    type: 'input',
                    message: `Prefix for view elements, e.g. "my" -> "my-view1"`,
                    default: "my",
                    validate: (vp) => {
                        if (!vp || !vp.trim()) {
                            this.log('\nPrefix is required ' +
                                'Please try again.');
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'templateLocation',
                    message: 'Where do you want your HTML template?',
                    choices: [{
                            name: 'as a string value in the @template() decorator',
                            value: 'atTemplate'
                        }, {
                            name: 'in an HTML file named your-element-name.template.html',
                            value: 'inHTML'
                        }, {
                            name: 'return a value from the template() method',
                            value: 'templateFn'
                        }],
                    default: 1
                }
            ];
            this.props = yield this.prompt(prompts);
            this.props.elementClassName = this.props.elementName.replace(/(^|-)(\w)/g, (_match, _p0, p1) => p1.toUpperCase());
            this.props.templateText = `
        <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
    
          display: block;
        }
    
        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
    
        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }
    
        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }
    
        .drawer-list {
          margin: 0 20px;
        }
    
        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }
    
        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
      </style>
    
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route
          route="{{route}}"
          pattern="[[rootPath]]:page"
          data="{{routeData}}"
          tail="{{subroute}}"></app-route>
    
      <app-drawer-layout fullbleed narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="view1" href="[[rootPath]]view1">View One</a>
            <a name="view2" href="[[rootPath]]view2">View Two</a>
            <a name="view3" href="[[rootPath]]view3">View Three</a>
          </iron-selector>
        </app-drawer>
    
        <!-- Main content -->
        <app-header-layout has-scrolling-region>
    
          <app-header slot="header" condenses reveals effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="${this.props.viewPrefix}-icons:menu" drawer-toggle></paper-icon-button>
              <div main-title>My App</div>
            </app-toolbar>
          </app-header>
    
          <iron-pages
              selected="[[page]]"
              attr-for-selected="name"
              fallback-selection="view404"
              role="main">
            <${this.props.viewPrefix}-view1 name="view1"></${this.props.viewPrefix}-view1>
            <${this.props.viewPrefix}-view2 name="view2"></${this.props.viewPrefix}-view2>
            <${this.props.viewPrefix}-view3 name="view3"></${this.props.viewPrefix}-view3>
            <${this.props.viewPrefix}-view404 name="view404"></${this.props.viewPrefix}-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
        `;
        });
    }
    writing() {
        const elementName = this.props.elementName;
        // copy root folder items
        this.fs.copyTpl(`${this.templatePath()}/approot/**/?(.)!(_)*`, this.destinationPath(), this.props);
        // copy src folder 
        this.fs.copyTpl(`${this.templatePath()}/src/**/?(.)!(_)*`, this.destinationPath() + '/src', this.props);
        // copy the app element
        this.fs.copyTpl(this.templatePath('src/_element.ts'), `src/${elementName}.ts`, this.props);
        if (this.props.templateLocation == 'inHTML') {
            this.fs.copyTpl(this.templatePath('src/_element.template.html'), `src/${elementName}.template.html`, this.props);
        }
        // copy the icons element
        this.fs.copyTpl(this.templatePath('src/_icons.html'), `src/${this.props.viewPrefix}-icons.html`, this.props);
        // copy the views
        const vSfx = ['1', '2', '3', '404'];
        vSfx.forEach((sfx) => {
            const viewName = this.props.viewPrefix + "-view" + sfx;
            this.props["elementClassName" + sfx] = viewName.replace(/(^|-)(\w)/g, (_match, _p0, p1) => p1.toUpperCase());
            this.fs.copyTpl(this.templatePath('src/_view' + sfx + '.ts'), `src/${viewName}.ts`, this.props);
            if (this.props.templateLocation == 'inHTML') {
                this.fs.copyTpl(this.templatePath(`src/_view${sfx}.template.html`), `src/${viewName}.template.html`, this.props);
            }
        });
        // copy images
        this.fs.copy(this.templatePath() + '/images/**', this.destinationPath() + '/images');
        // copy dotfiles
        this.fs.copy(this.templatePath() + '/dotfiles/.*', this.destinationPath());
        // copy test items
        this.fs.copyTpl(this.templatePath('test/index.html'), `${this.destinationPath()}/test/index.html`, this.props);
        this.fs.copyTpl(this.templatePath('test/_view1.html'), `${this.destinationPath()}/test/${this.props.viewPrefix}-view1.html`, this.props);
        this.fs.copy(this.templatePath() + '/test/.*', this.destinationPath() + '/test');
    }
    install() {
        this.log(chalk.bold('\nProject generated!'));
        this.log('Installing dependencies...');
        this.installDependencies({
            npm: true,
            bower: true
        });
    }
    end() {
        this.log(chalk.bold('\nSetup Complete!'));
        this.log('Check out your new project README for information about what to do next.\n');
    }
}
module.exports = GeneratorStarterKitTsTwc;
//# sourceMappingURL=index.js.map