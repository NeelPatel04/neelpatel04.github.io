const beforeImages = {
      "BMW M5": "images/oldBmw.jpg",
      "Ford Mustang": "images/oldFord.jpg",
      "Porche 911": "images/oldPorche.jpg",
      "Hummer": "images/oldHumer.jpg"
    };
    const afterImages = {
      "BMW M5": "images/newBmw.jpg",
      "Ford Mustang": "images/newFord.jpg",
      "Porche 911": "images/newPorche.jpg",
      "Hummer": "images/newHummer.jpg"
    };


window.onload = function() {
  const gallery = document.getElementById('gallery');
  for (let car in beforeImages) {

    let wrapper = document.createElement('div');
    wrapper.className = 'car-wrapper';
    wrapper.setAttribute('data-name', car);
    
    let img = document.createElement('img');
    img.src = beforeImages[car];
    img.alt = car + ' Before';
    img.className = 'car-img';
    img.dataset.name = car;
    
    wrapper.appendChild(img);
    gallery.appendChild(wrapper);
  }
};


document.addEventListener('click', function(e) {
  if (e.target.className === 'car-img') {
    const carName = e.target.dataset.name;
    document.getElementById('popup-title').textContent = 'New ' + carName;
    document.getElementById('popup-img').src = afterImages[carName];
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('popup').classList.add('show');
  }
});

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('popup').classList.add('hidden');
  document.getElementById('popup').classList.remove('show');
});