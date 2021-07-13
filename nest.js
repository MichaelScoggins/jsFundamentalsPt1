// Nest a given flat array of objects linked to one another recursively
//#Source https://bit.ly/2neWfJ2
const nest = (items, id = null, link = "parent_id") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id) }));

// One top level comment
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
];
const nestedComments = nest(comments);
console.log(nestedComments); // [
//   {
//     id: 1,
//     parent_id: null,
//     children: [
//       {
//         id: 2,
//         parent_id: 1,
//         children: [
//           {
//             id: 4,
//             parent_id: 2,
//             children: [{ id: 5, parent_id: 4, children: [] }],
//           },
//         ],
//       },
//       { id: 3, parent_id: 1, children: [] },
//     ],
//   },
// ];
