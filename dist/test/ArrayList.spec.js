"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const ArrayList_1 = require("../src/ArrayList");
describe('unit test using `mocha ☕️` & `chai 🍵` 👻 ..', () => {
    const myList = new ArrayList_1.default();
    const data = ['nodejs', 'js-lover', 'tunisia', 'red', 'CA', 'js-lover'];
    const dataForSortCase = [100, 0, 50, -50, 0, -100];
    beforeEach(() => {
        myList.removeAll();
        myList.addAll(data);
    });
    it('add method ✅ ..', () => {
        myList.removeAll();
        myList.add('imed jaberi');
        chai_1.expect(myList.getAll().length).to.equal(1);
    });
    it('add all method ✅ ..', () => {
        chai_1.expect(myList.getAll().length).to.equal(data.length);
    });
    it('remove method ✅ ..', () => {
        myList.remove(4);
        chai_1.expect(myList.getAll().length).to.equal((data.length - 1));
    });
    it('remove all method ✅ ..', () => {
        myList.removeAll();
        chai_1.expect(myList.getAll().length).to.equal(0);
    });
    it('size method ✅ ..', () => {
        chai_1.expect(myList.size()).to.equal(data.length);
    });
    it('get method ✅ ..', () => {
        chai_1.expect(myList.get(1)).to.equal(data[1]);
    });
    it('get method - failed ❌ ..', () => {
        chai_1.expect(myList.get(data.length)).to.equal(-1);
    });
    it('get all method ✅ ..', () => {
        chai_1.expect(myList.getAll().length).to.equal(data.length);
    });
    it('set method ✅ ..', () => {
        myList.set(0, 'react-js');
        chai_1.expect(myList.get(0)).to.equal('react-js');
    });
    it('isEmpty method ✅ ..', () => {
        chai_1.expect(myList.isEmpty()).to.be.false;
    });
    it('contains method ✅ ..', () => {
        chai_1.expect(myList.contains('tunisia')).to.be.true;
    });
    it('indexOf method ✅ ..', () => {
        chai_1.expect(myList.indexOf('tunisia')).to.equal(data.indexOf('tunisia'));
    });
    it('lastIndexOf method ✅ ..', () => {
        chai_1.expect(myList.lastIndexOf('js-lover')).to.equal(data.lastIndexOf('js-lover'));
    });
    it('nbrIndex method ✅ ..', () => {
        chai_1.expect(myList.nbrIndex('js-lover')).to.equal(data.filter((item) => item === 'js-lover').length);
    });
    it('sort method ✅ ..', () => {
        // asc 
        myList.removeAll();
        myList.addAll(dataForSortCase);
        myList.sort();
        // desc
        let myList2 = new ArrayList_1.default();
        myList2.addAll(dataForSortCase);
        myList2.sort('desc');
        // asc with params
        let myList3 = new ArrayList_1.default();
        myList3.addAll(dataForSortCase);
        myList3.sort('asc');
        (chai_1.expect(myList.getAll()).to.not.equal(myList2.getAll())
            &&
                chai_1.expect(myList.getAll()).to.deep.equal(myList3.getAll()));
    });
    it('sort method - failed case ❌ ..', () => {
        // asc 
        myList.removeAll();
        myList.addAll(dataForSortCase);
        chai_1.expect(myList.sort('bla bla')).to.equal(-1);
    });
});
