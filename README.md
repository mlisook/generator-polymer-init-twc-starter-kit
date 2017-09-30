# generator-polymer-init-twc-starter-kit
Generator for Polymer 2.0 application with navigation and PRPL pattern loading using **Typescript** and **TWC**

`TWC` (*Typed Web Components* - see [Draccoz/twc](https://github.com/Draccoz/twc) for details) allows developers to use Typescript and decorators to create Polymer custom elements. `TWC` acts as a compiler, translating the Typescript into Polymer ES6 class based elements. There is no runtime library - everything happens in the build step.

This generator is based on the Polymer init starter kit generator, of course.

## Install
First ensure you have the **Polymer CLI** installed. If not use:
```
npm i -g polymer-cli
```
Then install this package:
```
npm i -g generator-polymer-init-twc-starter-kit
```

## Use
Create a new folder for your Polymer 2.0 project, cd into that folder and run `polymer init`:
```
mkdir a-new-app-name
cd a-new-app-name
polymer init
```
Choose the **twc-starter-kit** option from the list.

## Generate Type Definitions for Polymer Elements Installed in Bower
This generator installs a number of Polymer elements via Bower. If you want to work with these in code it would be helpful to have type definitions for them. Fortunately, `potts` (polymer to typescript - [Draccoz/potts](https://github.com/Draccoz/potts)), also by the author of `twc` is available to generate types for all Polymer elements in `bower.json`.  See the [working with types in the twc wiki](https://github.com/Draccoz/twc/wiki/Working-with-types) for more details.

`potts` is installed as a dev dependency by this generator and a script tag is included to run it. In your project root enter:
```
npm run potts
```
This will create a file `potts.d.ts` that contains basic type definitions for Polymer elements installed as bower dependencies.

## Compile Typescript
Compile typescript classes to ES6 class based Polymer 2.0 dom modules by running the `twc` command from the project's root folder.

## Serve Your App
```
polymer serve
```

## Review the TWC Wiki
Documentation on TWC can be found in the [Draccoz/twc Wiki](https://github.com/Draccoz/twc/wiki). 

## Issues
Please submit issues regarding this generator through github at [mlisook generator-polymer-init-twc-starter-kit issues](https://github.com/mlisook/generator-polymer-init-twc-starter-kit/issues).

## Contributions
Contributions are welcome and appreciated.

## License

MIT
