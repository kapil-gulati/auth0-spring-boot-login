# Auth0 CLI

1. Install the CLI tool
    ```
    npm i -g auth0-deploy-cli
    ```
2. Add following environment variable
    ```
   AUTH0_DOMAIN = "{Request from tech leads}"
   AUTH0_CLIENT_ID = "{Request from tech leads}"
   AUTH0_CLIENT_SECRET = "{Request from tech leads}"
    ```
3. Export dev tenant configuration
    ```
    a0deploy export --config_file config/export.json --env=true --format yaml --output_folder target
    ```
   This command will create a `tenant.yml` file in `.\target\` along with any other artifacts referenced
   in `tenant.yaml` file. The output in `.\target\` folder is a codified export of the DEV tenant configured on the
   dashboard
    ``` 
4. Do only if you know what you are doing - Imports config to required tenant
    ```
    a0deploy import -c=config/dev.json --input_file tenant_app.yaml --env=true
    ```
   This command will configure the target tenant with the local config changes (and destroys any other changes done
   directly on tenant)
