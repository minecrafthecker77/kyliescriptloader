document.addEventListener('DOMContentLoaded', function () {
  const normalDownloadBtn = document.getElementById('normal-download');
  const fnDownloadBtn = document.getElementById('fortnite-download');

  if (normalDownloadBtn) {
    normalDownloadBtn.addEventListener('click', normalDownload);
  }

  if (fnDownloadBtn) {
    fnDownloadBtn.addEventListener('click', fnDownload);
  }
});

function logDownload(filename) {
  let downloads = JSON.parse(localStorage.getItem('downloads')) || [];
  downloads.push({ filename: filename, timestamp: new Date().toLocaleString() });
  localStorage.setItem('downloads', JSON.stringify(downloads));
}

function normalDownload() {
  const link = document.createElement('a');
  link.href = './clients/minecraft.zip'; // Assuming the file is a zip file
  link.download = 'minecraft.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  logDownload('minecraft.zip');
  showNotification('Minecraft.zip downloaded.', 'success');
}

function fnDownload() {
  const link = document.createElement('a');
  link.href = './clients/fortnite.zip'; // Assuming the file is a zip file
  link.download = 'fortnite.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  logDownload('fortnite.zip');
  showNotification('Fortnite.zip downloaded.', 'success');
}
