// Walter Johnson
// Week 4 Activity: Fixing Closure Loop

//Fix Example 5 from this page so it alerts the 'correct' values.
//In addition feel free to read the rest of the article if you are still confused about closures.
//It is the one I usually refer to when I get confused on the issue.

function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var resultItem = function() {
            var itemIndex = list[i];
            var item = 'item' + itemIndex;
            var resultFunc = function() {alert(item + ' ' + itemIndex)};
            return resultFunc;
        };
        //var item = 'item' + list[i];
        //result.push( function() {alert(item + ' ' + list[i])} );
        result.push(resultItem(i));
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();

//The line result.push( function() {alert(item + ' ' + list[i])} adds a reference to an anonymous function three times to the result array.
//If you are not so familiar with anonymous functions think of it like:
//pointer = function() {alert(item + ' ' + list[i])};
//result.push(pointer);
//Note that when you run the example, "item3 undefined" is alerted three times!
//This is because just like previous examples, there is only one closure for the local variables for buildList.
//When the anonymous functions are called on the line fnlist[j](); they all use the same single closure,
//and they use the current value for i and item within that one closure (where i has a value of 3 because the loop had completed, and item has a value of 'item3').