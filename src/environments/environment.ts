// The file for the current environment will overwrite this one during build.
// Different environments can be found in ./environment.{dev|prod}.ts, and
// you can create your own and use it with the --env flag.
// The build system defaults to the dev environment.

export const environment = {
  production: false,
  ubus: {
    endpoint: 'http://10.254.169.121/ubus'
  },
  webcam: {
    host: '10.254.169.121',
    port: 80,
    path: '/?action=stream'
  }
};
