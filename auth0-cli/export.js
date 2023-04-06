import { dump, deploy } from 'auth0-deploy-cli';

dump({
    output_folder: './out',
    format: 'yaml',
    config_file: './config/dev.json'
})
    .then(() => {
        console.log('Auth0 configuration export successful');
    })
    .catch((err) => {
        console.log('Error during Auth0 configuration export:', err);
    });