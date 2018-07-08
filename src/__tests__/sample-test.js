/* global describe it expect */
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import createStore from '../src';

// describe('Sample Test', () => {
//   const someVal = 1;
//   it('should pass', () => {
//     expect(someVal === 1).toBe(true);
// describe("Sample Test", () => {
//   it("should pass", () => {
//     expect(1 === 1).toBe(true);
// describe("Sample Test", () => {
//   it("should pass", () => {
//     expect(1 === 1).toBe(true);
//   });
// });

let defaultState = {
      example: {
        value: 0
      }
    },
    { Provider, connect } = createStore(defaultState);


describe("Checking Store creation", () => {
  it("Provider and connect are properly defined", () => {
    expect(Provider).toBeDefined();
    expect(connect).toBeDefined();
  });
});

describe("Checking Rendering", () => {
  let Component = shallow(<Provider><div/></Provider>);

  it('Provider is rendered', () => {
    expect((Component).length).toEqual(1);
  });

  it('Elements inside Provider is rendered', () => {
    expect((Component).find('div').length).toEqual(1);
  });
});
