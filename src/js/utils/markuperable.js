import { normalizeTagName } from '../utils/dom-utils';
import { detect, commonItemLength, forEach, filter } from '../utils/array-utils';

export default class Markerupable {

  clearMarkups() {
    this.markups = [];
  }

  addMarkup(markup) {
    this.markups.push(markup);
  }

  removeMarkup(markupOrMarkupCallback) {
    let callback;
    if (typeof markupOrMarkupCallback === 'function') {
      callback = markupOrMarkupCallback;
    } else {
      let markup = markupOrMarkupCallback;
      callback = (_markup) => _markup === markup;
    }

    forEach(
      filter(this.markups, callback),
      m => this._removeMarkup(m)
    );
  }

  _removeMarkup(markup) {
    const index = this.markups.indexOf(markup);
    if (index !== -1) {
      this.markups.splice(index, 1);
    }
  }

  hasMarkup(tagNameOrMarkup) {
    return !!this.getMarkup(tagNameOrMarkup);
  }

  getMarkup(tagNameOrMarkup) {
    if (typeof tagNameOrMarkup === 'string') {
      let tagName = normalizeTagName(tagNameOrMarkup);
      return detect(this.markups, markup => markup.tagName === tagName);
    } else {
      let targetMarkup = tagNameOrMarkup;
      return detect(this.markups, markup => markup === targetMarkup);
    }
  }

  get openedMarkups() {
    let prevMarkups = this.prev ? this.prev.markups : [];
    return this.markups.filter(item => {
      let inPrev = prevMarkups.indexOf(item) !== -1;
      return !inPrev;
    });
  }

  get closedMarkups() {
    let retVal;
    if (!this.next) {
      retVal =  this.markups.slice();
    } else {
      let nextMarkups = this.next.markups;
      retVal = this.markups.filter(item => {
        let inNext = nextMarkups.indexOf(item) !== -1;
        return !inNext;
      });
    }

    return retVal;
  }
}
