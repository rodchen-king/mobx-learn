import { observable, action, computed, autorun} from 'mobx';

class UserStore {

  @observable currentUser = '123';
  @observable boolKey = false;
  @observable numberKey = 123;
  @observable stringKey = "string";
  @observable arrayKey = [1, 2, 3];
  @observable mapKey = new Map();
  @observable objectKey = { name: 'rodchen' }

  @computed get getStringAndNumber () {
    return this.numberKey + this.stringKey
  }

  // @autorun(() => {
  //   console.log(this.numberKey + this.stringKey)
  // })


  @action updateUser(newUser) {
    this.objectKey.name = 'rood'; 
    this.stringKey = 'reaction change value '
    this.boolKey = true;
    this.updatingUser = false;
    // return agent.Auth.save(newUser)
    //   .then(action(({ user }) => { this.currentUser = user; }))
    //   .finally(action(() => { this.updatingUser = false; }))
  }

  @action forgetUser() {
    this.currentUser = undefined;
  }

}

export default new UserStore();
