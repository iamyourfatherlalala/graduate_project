import { observable, action, computed } from 'mobx';
import { inject, observer } from 'mobx-react';

class LoginStore {
    @observable loginSuccess = false;
    @observable name = '';
    @observable password = '';

    //@action 

   // @computed 
}

const LoginStore = new LoginStore();
export default LoginStore;