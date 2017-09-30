# Polymer 2 Starter Kit in Typescript with TWC

This template is a starting point for building Polymer apps in Typescript using
`TWC` (*Typed Web Components* - see [Draccoz/twc](https://github.com/Draccoz/twc) for details). TWC allows developers to use Typescript and decorators to create Polymer custom elements. `TWC` acts as a compiler, translating the Typescript into Polymer ES6 class based elements. There is no runtime library - everything happens in the build step.

The starter kit features a drawer-based layout provided by `app-layout` elements.

This template, along with the `polymer-cli` toolchain, also demonstrates use
of the "PRPL pattern" This pattern allows fast first delivery and interaction with
the content at the initial route requested by the user, along with fast subsequent
navigation by pre-caching the remaining components required by the app and
progressively loading them on-demand as the user navigates through the app.

The PRPL pattern, in a nutshell:

* **Push** components required for the initial route
* **Render** initial route ASAP
* **Pre-cache** components for remaining routes
* **Lazy-load** and progressively upgrade next routes on-demand

Since the template is based on the Polymer Starter Kit, you may want to refer to documentation, examples and videos for that.

## Generate Type Definitions for Polymer Elements Installed in Bower
This is a Typescript with TWC (*Typed Web Components* - see [Draccoz/twc](https://github.com/Draccoz/twc) for details) project. A number of Polymer elements are installed as dependencies via Bower. If you want to work with these in code it would be helpful to have type definitions for them. Fortunately, `potts` (polymer to typescript - [Draccoz/potts](https://github.com/Draccoz/potts)), also by the author of `twc` is available to generate types for all Polymer elements in `bower.json`.  See the [working with types in the twc wiki](https://github.com/Draccoz/twc/wiki/Working-with-types) for more details.

`potts` is installed as a dev dependency by this generator and a script tag is included to run it. In your project root enter:
```
npm run potts
```
This will create a file `potts.d.ts` that contains basic type definitions for Polymer elements installed as bower dependencies.

Rerun the command as needed if new types are added.

## Compile Typescript Elements
The `twc` command will build ES6 class based HTML files for the Typescript elements in your project.  Just run the `twc` command from the root folder of the project.

## Build for Production

The `polymer build` command builds your Polymer application for production, using build configuration options provided by the command line or in your project's `polymer.json` file.  

You can configure your `polymer.json` file to create multiple builds. This is necessary if you will be serving different builds optimized for different browsers. You can define your own named builds, or use presets. See the documentation on [building your project for production](https://www.polymer-project.org/2.0/toolbox/build-for-production) for more information.

The Polymer Starter Kit is configured to create three builds using [the three supported presets](https://www.polymer-project.org/2.0/toolbox/build-for-production#build-presets):

```
"builds": [
  {
    "preset": "es5-bundled"
  },
  {
    "preset": "es6-bundled"
  },
  {
    "preset": "es6-unbundled"
  }
]
```

Builds will be output to a subdirectory under the `build/` directory as follows:

```
build/
  es5-bundled/
  es6-bundled/
  es6-unbundled/
```

* `es5-bundled` is a bundled, minified build with a service worker. ES6 code is compiled to ES5 for compatibility with older browsers.
* `es6-bundled` is a bundled, minified build with a service worker. ES6 code is served as-is. This build is for browsers that can handle ES6 code - see [building your project for production](https://www.polymer-project.org/2.0/toolbox/build-for-production#compiling) for a list.
* `es6-unbundled` is an unbundled, minified build with a service worker. ES6 code is served as-is. This build is for browsers that support HTTP/2 push.

Run `polymer help build` for the full list of available options and optimizations. Also, see the documentation on the [polymer.json specification](https://www.polymer-project.org/2.0/docs/tools/polymer-json) and [building your Polymer application for production](https://www.polymer-project.org/2.0/toolbox/build-for-production).

### Preview the build

This command serves your app. Replace `build-folder-name` with the folder name of the build you want to serve.

    polymer serve build/build-folder-name/

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)

## Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the build.
