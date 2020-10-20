import { types } from "mobx-state-tree"

const objectModel = types.model({
  name: types.string
})

const Todo = types.model({
  currentUser: types.string,
  done: types.boolean,
  numberKey: types.number,
  stringKey: types.string,
  arrayKey: types.array,
  mapkey: types.map,
  objectKey: objectModel
})
.views(self=> ({
  get getStringAndNumber() {
    return self.numberKey + self.stringKey
  }
}))
.actions(self => {
  function updateUser() {
    self.objectKey.name = 'rood'; 
    self.stringKey = 'reaction change value '
    self.boolKey = true;
  }

  return {updateUser}
})