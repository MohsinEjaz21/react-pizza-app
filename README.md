# inventory-management-console

The Inventory Management Console provides the user interface for the Inventory Service on the Integrated AIOPs platform.
It is based on the dx-template-react project.

## Notes on running

When run locally, the following environment variables can be set
```sh
# Set the NODE_ENV to use the correct settings
export NODE_ENV="development"

export APP_ROOT='/opt/app-root'
# ref https://catalog.redhat.com/software/containers/ubi8/nginx-120/6156abfac739c0a4123a86fd?container-tabs=dockerfile
export NGINX_CONFIGURATION_PATH=${APP_ROOT}/etc/nginx.d
export NGINX_CONF_PATH=/etc/nginx/nginx.conf
# export NGINX_CONFIGURATION_PATH=/etc/nginx

export INVENTORY_BASE='/process/inventory/'
export INVENTORY_PORT=8080
npm run dev
```
The app would be served on `http://localhost:8080/process/inventory/` however the global header won't be accessible, so the local-dev-proxy is needed.
Run the local-dev-proxy as a container (see the README in that repo). If you have your podman logged into kyndryl.jfrog.io you can do this:
```shell
podman run --detach --name local-dev-proxy --network=host -v ${PWD}/nginx/cert/cert.pem:/etc/pki/nginx/cert.pem -v ${PWD}/nginx/cert/key.pem:/etc/pki/nginx/private/key.pem -v ${PWD}/nginx/inventory_local_dev.conf:${NGINX_CONFIGURATION_PATH}/inventory.conf kyndryl.jfrog.io/gts-eatools-docker-local/local-dev-proxy:latest
```

The app would be served on `https://localhost:4430/process/inventory/`

Build a container and run that locally. The build should include the `base: ${INVENTORY_BASE}`.
Change the local dev proxy configuration
```shell
podman run --detach --name local-dev-proxy --network=host -v ${PWD}/nginx/cert/cert.pem:/etc/pki/nginx/cert.pem -v ${PWD}/nginx/cert/key.pem:/etc/pki/nginx/private/key.pem -v ${PWD}/nginx/inventory_local_container.conf:${NGINX_CONFIGURATION_PATH}/inventory.conf kyndryl.jfrog.io/gts-eatools-docker-local/local-dev-proxy:latest
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/)

## Project Setup
1. Install [`nvm`](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating) into your WSL2 Ubuntu console or other bash console
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
1. Install the latest Long Term Support version of node
  - `nvm install --lts`
1. Configure your `.npmrc` file
  - The project directory has a `.npmrc` file containing a configuration that relies on environment variables. This is used in the git action with git action secrets. For local development you will need to configure your own environment variables to pull the necessary dependencies from artifactory.
   ```shell
   # Create an identity token at https://kyndryl.jfrog.io/ui/user_profile
   export JF_ACCESS_TOKEN={jfrog_identity_token}
   export JF_HOST='kyndryl.jfrog.io'
   export JF_USER={your_email@kyndryl.com}
   export NPM_AUTH=$(echo -n "$JF_USER:$JF_ACCESS_TOKEN"| base64 -w0)
   export NPM_PASSWORD=$(echo -n "$JF_ACCESS_TOKEN"| base64 -w0)
   ```
1. Install [local-dev-proxy](https://github.kyndryl.net/delivery-platform/local-dev-proxy)
1. Install dependencies:
   ```sh
   npm ci --legacy-peer-deps
   ```

### Compile and Hot-Reload for Development

1. Start [local-dev-proxy](https://github.kyndryl.net/delivery-platform/local-dev-proxy)
1. Run the app:

```sh
export INVENTORY_BASE='/process/inventory/'
export INVENTORY_PORT=8080
export API_URL='http://localhost:8080'
#OR create .env.local file then run
npm run dev
```

3. Go to `https://localhost:4430/process/inventory/`
4. You will need to accept SSL risks manually

### Compile and Minify for Production

```sh
# set the module name to the github repo name, which should be the current directory
export MODULE_NAME=${PWD##*/}

# build the dist folder
npm run build
cd deployment
chmod +x prepare-artifacts.sh
./prepare-artifacts.sh
podman rm ${MODULE_NAME}
podman build -t ${MODULE_NAME} --build-arg MODULE_NAME=${MODULE_NAME} .
# run using the host network, mounting some tmp dirs for writable folders
podman run --detach --name ${MODULE_NAME} --network=host --mount=type=tmpfs,tmpfs-size=100M,destination=/tmp --mount=type=tmpfs,tmpfs-size=100M,destination=/var/log  localhost/${MODULE_NAME}:latest
# or if you stopped it earlier, start it again with the same configuration
podman start ${MODULE_NAME}
# to shell into the container
podman exec -it ${MODULE_NAME} /bin/bash
```
Rebuild
```shell
cp -Rf ../nginx ./artifacts/
podman stop ${MODULE_NAME} && podman rm ${MODULE_NAME}
podman build -t ${MODULE_NAME} --build-arg MODULE_NAME=${MODULE_NAME} .
podman run --detach --name ${MODULE_NAME} --network=host  localhost/${MODULE_NAME}:latest
```
The configuration will still work with the local-dev-proxy
`https://localhost:4430/process/inventory/`
### Test

```sh
export INVENTORY_BASE='/process/inventory/'
export INVENTORY_PORT=8080
npm run test
```

### Run the latest from artifactory
```shell
podman pull kyndryl.jfrog.io/gts-eatools-docker-local/${MODULE_NAME}:latest-development
podman run --detach --name ${MODULE_NAME} --network=host  kyndryl.jfrog.io/gts-eatools-docker-local/${MODULE_NAME}:latest-development

```

## What's Included

1. [DX Platform Common UI](https://pages.github.kyndryl.net/delivery-platform/platform-ui-components) - Connects to the DX Platform with authentication, session management, account access, and more.
   1. [reactify-wc](https://github.com/BBKolton/reactify-wc) - Makes native Web Components reactive
1. [React](https://reactjs.org/docs/)
1. [Redux Toolkit](https://redux-toolkit.js.org/) - State management
   1. [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Handles API data transfer to the Redux stores.
1. [Vite](https://vitejs.dev/) - Tooling and local dev
   1. [Vite Pages](https://github.com/hannoeru/vite-plugin-pages) - Filesystem router
   1. [Vite PWA Plugin](https://vite-plugin-pwa.netlify.app/) - Enables Progressive Web App functionality.
   1. [Vitest](https://vitest.dev/) - Unit testing library for Vite
1. [@carbon/react](https://github.com/carbon-design-system/carbon/tree/main/packages/react) - Carbon Design System for React
   1. [carbon-charts-react](https://carbon-design-system.github.io/carbon-charts/?path=/story/docs-getting-started--react) - Carbon Charts for React

## 🌟 Build and run application from dist folder locally
### For Local testing of build

   1. setup local-dev-proxy for local build
      - add proxy_pass to nginx.conf.
        ```
        server {
            listen 443 ssl;
            server_name localhost;
            ...
            location /process/inventory/ {
               ...
               proxy_pass http://127.0.0.1:8000/process/inventory/
               # port mentioned in vite config under preview { port: 8000 },
            }
         }
         ```
   2. run shell command ```npm run local-build```
   3. [https://localhost/process/inventory/](https://localhost/process/inventory/)

## 🌟 Run the application locally

   1. setup local-dev-proxy for local development
      - add proxy_pass to nginx.conf.
        ```
        server {
            listen 4430 ssl;
            server_name localhost;
            ...
            location /process/inventory/ {
               ...
               proxy_pass http://127.0.0.1:8080/process/inventory/
            }
         }
         ```
   2. run shell command ```npm run local-dev```
   3. [https://localhost:4430/process/inventory/](https://localhost:4430/process/inventory/)

