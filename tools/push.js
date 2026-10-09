const { execSync } = require('child_process');

try {
    execSync('git push -u origin main');
    console.log('Successfully pushed to main.');
} catch (error) {
    console.error('Push failed:', error.message);
}
