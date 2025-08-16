// You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]
const pokes = getPokes();
console.log("Pokes", pokes);

// Problem 1: Filter by type
// - Populate `answer1` with Pokemon names that contain the type string
const type = "grass";
const answer1 = []; // TODO

pokes.map(e => {
    e.types.map(r => {
        if (r === type) {
            answer1.push(e.name);
        }
    });
});

// Problem 2: Filter by types (AND / OR)
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ["bug", "poison"];
const answer2Or = []; // TODO
const answer2And = []; // TODO

const typesMap = new Map();

types.map(e => {
    typesMap.set(e, e);
});

pokes.map((e) => {
    for (let i=0;i<e.types.length;i++) {
        if (typesMap.has(e.types[i])) {
            answer2Or.push(e.name);
            break; //So we don't get duplicates
        }
    }
});

pokes.map((e) => {
    let counter = 0;
    for (let i=0;i<e.types.length;i++) {
        if (typesMap.has(e.types[i])) {
            counter++;
        }
        if (counter === types.length) {
            answer2And.push(e.name);
            break;
        }
    }
});

// See your results in your DevTools console
console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------

function getPokes() {
  const elScript = document.querySelector("#pokes");
  const json = elScript.text;
  const data = JSON.parse(json);
  return data;
}
