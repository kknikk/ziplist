/**
 * Created by knika on 2/6/2017.
 */

function zipList(list1, list2){
  let alt = [];
  for (let i = 0; i < list1.length; i++){
    alt.push(list1[i]);
    alt.push(list2[i]);
  }
  return alt;
}

const test2 = [1, 2, 3];
const test1 = ['a', 'b', 'c'];

console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2){
  const newList = _.zip(list1, list2);
  return _.flatten(newList);
}

console.log(zipListTheSimpleWay(test1, test2));
