'use strict';

//ignore are the stuff which learned from the youtube's course

//7.5.3 Disambiguation
(function(x) {console.log(x)})("abc"); //correct way
//function(x) {console.log(x)}("abc"); //incorrect

const parseStudent = (name, id) => {
    return {
        name: name,
        id: id,
    }
};
console.log(parseStudent("test", 0));
