const { spawn } = require('child_process');

const isWindows = process.platform === 'win32';
const npmCommand = isWindows ? 'npm.cmd' : 'npm';
const processes = [
  spawn(npmCommand, ['run', 'next:dev'], { stdio: 'inherit' }),
  spawn(npmCommand, ['run', 'watch'], { stdio: 'inherit' }),
];

let isShuttingDown = false;

function shutdown(code = 0) {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;
  for (const child of processes) {
    if (!child.killed) {
      child.kill();
    }
  }
  process.exit(code);
}

for (const child of processes) {
  child.on('exit', (code) => {
    if (!isShuttingDown && code !== 0) {
      shutdown(code || 1);
    }
  });
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
