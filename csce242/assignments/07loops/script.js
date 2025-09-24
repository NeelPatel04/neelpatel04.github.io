document.getElementById('drawButton').addEventListener('click', drawScene);

function drawScene() {
  const canvas = document.getElementById('canvas');
  canvas.innerHTML = '';
  const now = new Date();
  const hour = now.getHours();
  const isNight = hour >= 18 || hour < 6;
  // Set background based on time
  document.body.style.backgroundColor = isNight ? '#000' : '#87CEEB';
  // Add sun or moon
  const celestial = document.createElement('div');
  celestial.className = isNight ? 'moon' : 'sun';
  canvas.appendChild(celestial);
  // Add 6 clouds in a straight line using a for loop
  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.top = '50px'; // Fixed top position for straight line
    cloud.style.left = `${100 + i * 100}px`;
    canvas.appendChild(cloud);
  }
  // Add 6 trees using a for loop
  for (let i = 0; i < 6; i++) {
    const tree = document.createElement('div');
    tree.className = 'tree';
    tree.style.bottom = '20px';
    tree.style.left = `${150 + i * 100}px`;
    canvas.appendChild(tree);
  }
}