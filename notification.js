function showNotification(message, type = 'info', duration = 3000) {
  const container = document.getElementById('notification-container');
  if (!container) {
    console.error('Notification container not found.');
    return;
  }

  const notification = document.createElement('div');
  notification.classList.add('notification', type);
  notification.textContent = message;

  container.appendChild(notification);

  // Trigger slideIn animation
  notification.style.animation = 'slideIn 0.5s forwards';

  // After duration, trigger fadeOut animation and then remove
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.5s forwards';
    notification.addEventListener('animationend', () => {
      notification.remove();
    });
  }, duration);
}
