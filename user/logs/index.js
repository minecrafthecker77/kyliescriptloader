document.addEventListener('DOMContentLoaded', function () {
  // Display Download Logs
  const downloadLogsUl = document.getElementById('download-logs');
  let downloads = JSON.parse(localStorage.getItem('downloads')) || [];
  if (downloadLogsUl) {
    if (downloads.length === 0) {
      downloadLogsUl.innerHTML = '<li>No files downloaded yet.</li>';
    } else {
      downloads.forEach((log) => {
        const li = document.createElement('li');
        li.textContent = `${log.timestamp}: Downloaded ${log.filename}`;
        downloadLogsUl.appendChild(li);
      });
    }
  }

  // Display Login Attempts
  const loginLogsUl = document.getElementById('login-logs');
  let loginAttempts = JSON.parse(localStorage.getItem('loginAttempts')) || [];
  if (loginLogsUl) {
    if (loginAttempts.length === 0) {
      loginLogsUl.innerHTML = '<li>No login attempts recorded yet.</li>';
    } else {
      loginAttempts.forEach((log) => {
        const li = document.createElement('li');
        li.textContent = `${log.timestamp}: User "${log.username}" ${
          log.success ? 'logged in successfully' : 'failed to log in'
        }.`;
        loginLogsUl.appendChild(li);
      });
    }
  }

  // Simulate Server Logs
  const serverLogsUl = document.getElementById('server-logs');
  if (serverLogsUl) {
    const simulatedServerLogs = [
      '2025-10-06 10:00:01: Server started successfully.',
      '2025-10-06 10:05:15: Database connection established.',
      '2025-10-06 10:15:30: User "admin" accessed dashboard.',
      '2025-10-06 10:30:00: API endpoint /downloads accessed.',
      '2025-10-06 11:00:00: Server health check passed.',
    ];
    simulatedServerLogs.forEach((log) => {
      const li = document.createElement('li');
      li.textContent = log;
      serverLogsUl.appendChild(li);
    });
  }

  // Simulate Server Status
  const serverStatusP = document.getElementById('server-status');
  if (serverStatusP) {
    const statuses = ['ONLINE', 'DEGRADED', 'OFFLINE'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    serverStatusP.textContent = randomStatus;
    if (randomStatus === 'ONLINE') {
      serverStatusP.style.color = 'green';
    } else if (randomStatus === 'DEGRADED') {
      serverStatusP.style.color = 'orange';
    } else {
      serverStatusP.style.color = 'red';
    }
  }

  // Simulate CPU Status
  const cpuStatusP = document.getElementById('cpu-status');
  if (cpuStatusP) {
    const randomCpuUsage = (Math.random() * 100).toFixed(2); // Simulate 0-100%
    cpuStatusP.textContent = `${randomCpuUsage}%`;
    if (randomCpuUsage < 50) {
      cpuStatusP.style.color = 'green';
    } else if (randomCpuUsage < 80) {
      cpuStatusP.style.color = 'orange';
    } else {
      cpuStatusP.style.color = 'red';
    }
  }
});
