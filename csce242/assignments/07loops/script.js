document.getElementById('drawButton').addEventListener('click', drawScene);

function drawScene() {
  const canvas = document.getElementById('canvas');
  canvas.innerHTML = '';
  const now = new Date();
  const hour = now.getHours();
  const isNight = hour >= 18 || hour < 6;
  
  document.body.style.backgroundColor = isNight ? '#000' : '#87CEEB';
  
  const celestial = document.createElement('div');
  celestial.className = isNight ? 'moon' : 'sun';
  canvas.appendChild(celestial);

  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.top = '50px'; 
    cloud.style.left = `${100 + i * 100}px`;
    canvas.appendChild(cloud);
  }
  
  for (let i = 0; i < 6; i++) {
    const tree = document.createElement('div');
    tree.className = 'tree';
    tree.style.bottom = '20px';
    tree.style.left = `${150 + i * 100}px`;
    canvas.appendChild(tree);
  }
}