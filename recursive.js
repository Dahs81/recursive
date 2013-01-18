var myObj = {
	name: 'level 1',
	layer: {
		name: 'level 2',
		layer: {
			name: 'level 3',
			layer: {
				name: 'level 4',
				layer: {
					name: 'level 5'
				}
			}
		}
	}	
};

/*
 * This function recursively grabs the name of the 
 * object and pushes it to the array.  It starts at
 * the top-most level and recurses down each layer
 */
input1 = [];
function parse1(object) {
	var name = object.name;
	input1.push(name);
	console.log(name);
    // document.write('</br>' + input1);
	if (object.layer) {
		parse1(object.layer);
	}
	return input1;
}

/*
 * This function first recurses down to the deepest
 * layer and pushes that name on to the array.  As
 * it recurses back up, it pushes the next name on 
 * to the array.
 */
input2 = [];
function parse2(object) {
	if (object.layer) {
		parse2(object.layer);
	}
	var name = object.name;
    
	input2.push(name);
	console.log(name);
    // document.write('</br>' + input2);

	return input2;
}

var test1 = parse1(myObj);
console.log('Test 1: ' + test1);
// document.write('</br>' + JSON.stringify(test1));

var test2 = parse2(myObj);
console.log('Test 2: ' + test2);
// document.write('</br>' + JSON.stringify(test2));


