import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
// import { Component } from '../../../../../.cache/typescript/2.6/node_modules/@types/react';

// To group together similar tests
describe('App Comp', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // To test a single attribute of a target
  it('shows the correct text', () => {
    // Create an instance of App
    // const component = renderComponent(App);

    // To make an 'assertion' about a target
    // expect(component).to.contain('React Simple Starter');

  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a coment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});
