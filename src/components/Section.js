export default class Section {
  constructor({data, renderer}, selector) {
    this._initialCard = data;
    this._renderer = renderer;
    this._container = selector;
  }

  renderCard() {
    this._initialCard.forEach((item) => {
      this._renderer(item);
    })
  }

  addItem(element) {
    this._container.prepend(element);
  }
}