// // import {observable,autorun} from 'mobx';

// // class LoginStore{
// //   @observable username = "jihn";
// // }

// // var user = new LoginStore

// // export default user

// // autorun(() =>{
// //   console.log(user.username)
// // })

// import {observable,decorate} from 'mobx';

// var user = observable({
//   username : "",

//   getUsername(){
//     return this.username;
//   },

//   setUsername(username){
//     this.username = username;
//   }
// });

// decorate(user,{
//   username:observable,
//   getUsername: observable,
//   setUsername: observable
// })

// export default user
