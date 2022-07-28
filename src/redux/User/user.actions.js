import userTypes from "./user.types";
import { auth, db, storage } from "../../firebase/utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import axios from 'axios'

// AUTHENTICATION
export const recoveryUser =
  ({ email }) =>
    async (dispatch) => {
      try {
        // await sendPasswordResetEmail(auth, email)
        //   .then(() => {
        //     dispatch({
        //       type: userTypes.USER_RECOVERY_SUCCESS,
        //       payload: true,
        //     });
        //   })
        //   .catch(() => {
        //     const err = ["Email Not Found! Please Enter A Valid Email"];
        //     dispatch({
        //       type: userTypes.SET_ERRORS,
        //       payload: err,
        //     });
        //   });
      } catch (err) {
        // console.log(err);
      }
    };

export const signOutUser = () => async (dispatch) => {
  try {
    // signOut(auth).then(() => {
    //   console.log("User signed out!");
    //   dispatch({
    //     type: userTypes.OUT_CURRENT_USER,
    //   });
    //   console.log("User Signed out From Action ::");
    // });
  } catch (err) {
    // console.log("Error from Sign out action !!");
    // console.log(err);
  }
};

// export const tokenAccess =
//   ({ user }) =>
//   async (dispatch) => {
//     console.log("user from redux action => ", user);
//     console.log(" test from token access function");
//     dispatch({
//       type: userTypes.USER_HAVE_TOKEN,
//       payload: true,
//     });
//   };

export const signInUser =
  ({ email, password }) =>
    async (dispatch) => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        // await  axios('http://soundnsoulful.alliedtechnologies.co:8000/v1/api/accounts/login/', {
        //     method: "post",
        //     headers: {
        //       'Content-type': 'Application/json',
        //     },
        //     data: {
        //       email: email,
        //       password: password,
        //     },
        //   })
        //     .then(function (response) {

        //       console.log('-----------------------------------------------')
        //       console.log('response :', response.data?.data)
        //       console.log('-----------------------------------------------')
        //     })
        //     .catch(function (error) {
        //       console.log('=---------<><><>--------------------------=');
        //       console.log(error);
        //       console.log('=---------<><><>--------------------------=');
        //       dispatch({
        //         type: userTypes.SET_ERRORS,
        //         payload: error,
        //       });
        //     });

        await fetch(
          "http://soundnsoulful.alliedtechnologies.co:8000/v1/api/accounts/login/",
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            console.log('=================================', response.data);
            if (response.data.errors) {
              console.log("There is no user with this credentials");
              const error = response.data.errors[0].detail;
              dispatch({
                type: userTypes.SET_ERRORS,
                payload: error,
              });
            } else {
              console.log("Yess we are here");
              dispatch({
                type: userTypes.USER_SIGN_IN_SUCCESS,
                payload: true,
              });
            }
          })
          .catch((err) => {
            console.log('fetch error', err);
            const error = ["These credientials dosn't much !!"];
            dispatch({
              type: userTypes.SET_ERRORS,
              payload: error,
            });
          });

        console.log("From Sign In action");
        // await signInWithEmailAndPassword(auth, email, password)
        //   .then(() => {
        //     dispatch({
        //       type: userTypes.USER_SIGN_IN_SUCCESS,
        //       payload: true,
        //     });
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     const error = ["These credientials dosn't much !!"];
        //     dispatch({
        //       type: userTypes.SET_ERRORS,
        //       payload: error,
        //     });
        //   });
      } catch (err) {
        console.log("----------------------", err);
        console.log("Error from catch in login redux actions");
        dispatch({
          type: userTypes.SET_ERRORS,
          payload: error,
        });
      }
    };

export const signUpUser =
  ({ email, password, confirmPassword, name }) =>
    async (dispatch) => {
      let myObj = {
        email: email,
        password: password,
        password2: confirmPassword,
        name: name,
      };
      console.log("MyObj => ", myObj);
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
            password2: confirmPassword,
            name: name,
          }),
        };
        console.log('Hello GOAT')
        // axios({
        //   headers: { "Content-Type": "application/json" },
        //   method: 'post',
        //   url: 'http://soundnsoulful.alliedtechnologies.co:8000/v1/api/accounts/register/',
        //   data:{
        //     email: email,
        //     password: password,
        //     password2: confirmPassword,
        //     name: name,
        //   }
        // })
        //   .then(function (response) {

        //     console.log('-----------------------------------------------')
        //     console.log('response :', response)
        //     console.log('-----------------------------------------------')

        //     if (response?.data?.errors) {
        //       console.log("There is no user with this credentials");
        //       const error = response?.data?.data?.message;
        //       dispatch({
        //         type: userTypes.SET_ERRORS,
        //         payload: error,
        //       });
        //     } else {
        //       console.log("Yess we are here");
        //       dispatch({
        //         type: userTypes.USER_SIGN_UP_SUCCESS,
        //         payload: true,
        //       });
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log('=----------------------------------------=');
        //     console.log(error);
        //     console.log('=----------------------------------------=');
        //     dispatch({
        //       type: userTypes.SET_ERRORS,
        //       payload: error,
        //     });
        //   });

        await fetch(
          "http://soundnsoulful.alliedtechnologies.co:8000/v1/api/accounts/register/",
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response.data);
            if (response.data.errors) {
              console.log("There is no user with this credentials");
              const error = response.data.message;
              dispatch({
                type: userTypes.SET_ERRORS,
                payload: error,
              });
            } else {
              console.log("Yess we are here");
              dispatch({
                type: userTypes.USER_SIGN_UP_SUCCESS,
                payload: true,
              });
            }
          });
      } catch (err) {
        console.log("Error from catch in login redux actions");
        dispatch({
          type: userTypes.SET_ERRORS,
          payload: err,
        });
      }
    };
// PROPERTY
export const fetchUser = () => async (dispatch) => {
  try {
    // console.log("From fetchContact Action");
    // const { IDFound, currentID } = await isPropertyIdFound();
    // console.log("HERE FROM isPropertyIdFound()........................");
    // console.log({ IDFound, currentID });
    // if (IDFound) {
    //   const contactsListRef = firestore().doc(`property/${currentID}`);
    //   const contactsList = await contactsListRef.get();
    //   const contactsArray = contactsList.data();
    //   dispatch({
    //     type: userTypes.FETCH_PROPERTY,
    //     payload: contactsArray,
    //   });
    // } else {
    //   const error = "Something Went Wrong !!";
    //   dispatch({
    //     type: userTypes.SET_ERRORS,
    //     payload: error,
    //   });
    // }
  } catch (err) {
    // console.log("error from fetchPrperty catch !!");
    // console.log(err);
  }
};
// OTHERS
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: userTypes.SET_ERRORS,
    payload: error,
  });
};
export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});
export const ResetErrorsState = () => ({
  type: userTypes.RESET_ERRORSSTATE_FORMS,
});
export const ResetStates = () => ({
  type: userTypes.RESET_STATES,
});
