import 'mocha';
import { expect } from 'chai';
import ArrayList from '../src/ArrayList';



describe('unit test using `mocha ☕️` & `chai 🍵` 👻 ..', () => {

  const myList = new ArrayList();
  const data = ['nodejs', 'js-lover', 'tunisia', 'red', 'CA', 'js-lover'];
  const dataForSortCase = [100, 0, 50, -50, 0, -100];


  beforeEach(() =>{
    myList.removeAll();
    myList.addAll(data);
  });


  it('add method ✅ ..', () => {
    myList.removeAll();
    myList.add('imed jaberi');
    expect(myList.getAll().length).to.equal(1);
  });

  it('add all method ✅ ..', () => {
    expect(myList.getAll().length).to.equal(data.length);
  });

  it('remove method ✅ ..', () => {
    myList.remove(4);
    expect(myList.getAll().length).to.equal((data.length - 1));
  });

  it('remove all method ✅ ..', () => {
    myList.removeAll();
    expect(myList.getAll().length).to.equal(0);
  });

  it('size method ✅ ..', () => {
    expect(myList.size()).to.equal(data.length);
  });

  it('get method ✅ ..', () => {
    expect(myList.get(1)).to.equal(data[1]);
  });

  it('get method - failed ❌ ..', () => {
    expect(myList.get(data.length)).to.equal(-1);
  });

  it('get all method ✅ ..', () => {
    expect(myList.getAll().length).to.equal(data.length);
  });

  it('set method ✅ ..', () => {
    myList.set(0, 'react-js');
    expect(myList.get(0)).to.equal('react-js');
  });

  it('isEmpty method ✅ ..', () => {
    expect(myList.isEmpty()).to.be.false;
  });
  
  it('contains method ✅ ..', () => {
    expect(myList.contains('tunisia')).to.be.true;
  });

  it('indexOf method ✅ ..', () => {
    expect(myList.indexOf('tunisia')).to.equal(data.indexOf('tunisia'));
  });

  it('lastIndexOf method ✅ ..', () => {
    expect(myList.lastIndexOf('js-lover')).to.equal(data.lastIndexOf('js-lover'));
  });

  it('nbrIndex method ✅ ..', () => {
    expect(myList.nbrIndex('js-lover')).to.equal(data.filter((item) => item === 'js-lover').length);
  });

  it('sort method ✅ ..', () => {
    // asc 
    myList.removeAll();
    myList.addAll(dataForSortCase);
    myList.sort();
    // desc
    let myList2 = new ArrayList();
    myList2.addAll(dataForSortCase);
    myList2.sort('desc');
    // asc with params
    let myList3 = new ArrayList();
    myList3.addAll(dataForSortCase);
    myList3.sort('asc');

    ( 
      expect(myList.getAll()).to.not.equal(myList2.getAll())
                              &&
      expect(myList.getAll()).to.deep.equal(myList3.getAll())
    );
    
  });

  it('sort method - failed case ❌ ..', () => {
    // asc 
    myList.removeAll();
    myList.addAll(dataForSortCase);
    expect(myList.sort('bla bla')).to.equal(-1);
  });

});