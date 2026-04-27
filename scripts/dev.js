const { spawn } = require('child_process');

const nextPort = process.env.NEXT_PORT || process.env.PORT || '3000';
const env = {
  ...process.env,
  NEXT_PORT: nextPort,
  PORT: nextPort,
};

const processes = [
  spawn(`npm run next:dev -- -p ${nextPort}`, { shell: true, stdio: 'inherit', env }),
  spawn('npm run watch', { shell: true, stdio: 'inherit', env }),
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
