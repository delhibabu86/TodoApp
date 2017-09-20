/**
 * Created by Arnab Karmakar on 9/5/17.
 */
import { CHANGE_TEXT, CHANGE_THEME, CHANGE_SHOW_TYPE, changeText, changeThemeAction, changeShowType } from '../other';
import { expect } from 'chai';

describe('Test other.js', () => {
  it ("changeText", () => {
    const text = 'test';
    const expected = {
      type: CHANGE_TEXT,
      text: text,
    };
    expect(changeText(text)).to.be.deep.equal(expected);
  });

  it ("changeThemeAction", () => {
    const expected = {
      type: CHANGE_THEME,
    };
    expect(changeThemeAction()).to.be.deep.equal(expected);
  });

  it ("changeShowType", () => {
    const expected = {
      type: CHANGE_SHOW_TYPE,
      isSelected: false,
    };
    expect(changeShowType(false)).to.be.deep.equal(expected);
  });
});
