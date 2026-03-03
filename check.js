const { execSync } = require('child_process');
try {
    execSync('npm run build', { encoding: 'utf-8' });
} catch (err) {
    console.log(err.stdout + "\n" + err.stderr);
}
