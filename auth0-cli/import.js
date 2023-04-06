import { deploy } from 'auth0-deploy-cli';

deploy({
    input_file: './tenant_app.yaml',
    config_file: './config/dev.json'

})
    .then(() => {
        console.log('Auth0 configuration applied to tenant successful');
    })
    .catch((err) => {
        console.log('Error when applying configuration to Auth0 tenant:', err);
    });