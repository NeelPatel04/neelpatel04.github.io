class Painting {
  constructor(title, artist, framed, pic) {
    this.title = title;
    this.artist = artist;
    this.framed = framed;
    this.pic = pic;
  }

  get item() {
    const section = document.createElement("section");
    section.classList.add("painting");

    // header
    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    section.append(h3);

    // container
    const container = document.createElement("div");
    section.append(container);

    // image
    const img = this.picture(this.pic);
    container.append(img);

    // hidden details
    const details = document.createElement("div");
    details.classList.add("transparent");
    details.append(this.paragraph("Artist", this.artist));
    details.append(this.paragraph("Framed", this.framed ? "Yes" : "No"));
    section.append(details);

    section.onclick = (e) => {
      e.preventDefault();
      this.showModal();
    };

    return section;
  }

  picture(filename) {
    const img = document.createElement("img");
    img.src = `images/${filename}`;
    return img;
  }

  paragraph(key, value) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${key}:</strong> ${value}`;
    return p;
  }

  showModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = () => document.body.removeChild(modal);

    const title = document.createElement("h3");
    title.textContent = this.title;

    const artist = document.createElement("p");
    artist.innerHTML = `by ${this.artist}`;

    const img = this.picture(this.pic);
    if (this.framed) {
      img.classList.add("framed");
    }
    img.classList.add("modal-img");

    modalContent.append(closeBtn, title, artist, img);
    modal.append(modalContent);
    document.body.append(modal);

    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    };
  }
}

// paintings data
const paintings = [];
paintings.push(new Painting("Dream love kitten", "t0ngo", true, "dreamkitten.jpg"));
paintings.push(new Painting("Holding The Moon", "CDD20", false, "moon.jpg"));
paintings.push(new Painting("Mountain WaterFall", "Samoil221", true, "waterfall.jpg"));
paintings.push(new Painting("Pedal Through Time", "CDD20", false, "bike.jpg"));
paintings.push(new Painting("Grow With Love", "CDD20", false, "grow.jpg"));

// render
const paintingListDiv = document.getElementById("painting-list");
paintings.forEach((painting) => {
  paintingListDiv.append(painting.item);
});