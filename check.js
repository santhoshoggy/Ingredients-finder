const { execSync } = require('child_process');
const fs = require('fs');
try {
    execSync('npx prisma format', { encoding: 'utf-8' });
} catch (err) {
    const clean = (err.stdout + '\n' + err.stderr + '\n' + err.message).replace(/\r/g, '');
    fs.writeFileSync('error_clean.txt', clean);
}
