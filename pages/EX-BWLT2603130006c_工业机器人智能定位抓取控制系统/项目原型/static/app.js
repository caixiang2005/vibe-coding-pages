function updateAxisVal(slider, id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = parseFloat(slider.value).toFixed(2) + ' mm';
}

function updateAngle(slider, id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = parseFloat(slider.value).toFixed(2) + ' deg';
}

function gripperAction(action) {
  const vis = document.getElementById('gripper-vis');
  if (!vis) return;
  if (action === 'close') {
    vis.style.setProperty('--gripper-offset', '-2px');
    vis.style.setProperty('--gripper-offset-r', '2px');
  } else {
    vis.style.setProperty('--gripper-offset', '-14px');
    vis.style.setProperty('--gripper-offset-r', '14px');
  }
}

const uptimeEl = document.getElementById('uptime');
if (uptimeEl) {
  let uptimeSeconds = 51623;
  setInterval(() => {
    uptimeSeconds++;
    const h = Math.floor(uptimeSeconds / 3600);
    const m = Math.floor((uptimeSeconds % 3600) / 60);
    const s = uptimeSeconds % 60;
    uptimeEl.textContent =
      String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }, 1000);
}

const grabCountEl = document.getElementById('grab-count');
if (grabCountEl) {
  let grabCount = 1247;
  setInterval(() => {
    if (Math.random() > 0.7) {
      grabCount++;
      grabCountEl.textContent = grabCount.toLocaleString();
    }
  }, 3000);
}

document.querySelectorAll('.log-filter').forEach((btn) => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.log-filter').forEach((b) => b.classList.remove('active'));
    this.classList.add('active');
  });
});
