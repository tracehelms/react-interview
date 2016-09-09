// TODO
const initialState = [
  {
      "author": "Pete Hunt",
      "text": "Hey there!"
  },
  {
      "author": "Paul O’Shannessy",
      "text": "React is *great*!"
  }
];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'add_comment':
      // TODO
    default:
      return state;
  }
}
