// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  '@ngrx': 'vendor/@ngrx',
  'lodash': 'vendor/lodash',
};

/** User packages configuration. */
const packages: any = {
  // Angular Material.
  '@angular2-material/core': {main: 'core.js'},
  '@angular2-material/button': {main: 'button.js'},
  '@angular2-material/card': {main: 'card.js'},
  '@angular2-material/icon': {main: 'icon.js'},
  '@angular2-material/sidenav': {main: 'sidenav.js'},
  '@angular2-material/list': {main: 'list.js'},
  '@angular2-material/toolbar': {main: 'toolbar.js'},
  '@angular2-material/input': {main: 'input.js'},
  '@angular2-material/progress-circle': {main: 'progress-circle.js'},

  // NgRX.
  '@ngrx/core': {main: 'index.js', format: 'cjs'},
  '@ngrx/store': {main: 'index.js', format: 'cjs'},
  '@ngrx/effects': {main: 'index.js', format: 'cjs'},

  // Lodash.
  'lodash': {main: 'index.js', defaultExtension: 'js'},
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/forms',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/actions',
  'app/components',
  'app/effects',
  'app/reducers',
  'app/services',
  'app/directives',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
