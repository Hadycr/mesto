export default class Section {
  constructor({renderer}, selector) {
    this._renderer = renderer;
    this._container = selector;
  }

  renderCard(data) {
    data.reverse().forEach((item) => {
      this._renderer(item);
    })
  }

  addItem(element) {
    this._container.prepend(element);
  }
}