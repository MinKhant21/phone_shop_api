interface signUpBody {

     name:string,email:string,password:string
}

export const signUpInteractor = async  ({signUpPersistence}:any,{name,email,password}:signUpBody) => {
     try {
          let user = await signUpPersistence({ name, email, password });

          return {user}
     } catch (error) {
          console.log(error)
     }
}


