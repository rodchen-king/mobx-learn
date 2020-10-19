import { observable, action } from 'mobx';

class UserStore {

  @observable currentUser = '123';
  @observable loadingUser;
  @observable updatingUser;
  @observable updatingUserErrors;


  @action updateUser(newUser) {
    this.currentUser = newUser; 
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
