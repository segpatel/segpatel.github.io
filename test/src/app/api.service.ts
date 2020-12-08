// import { Injectable } from '@angular/core';
// import { Headers, RequestOptions, Http } from '@angular/http';
// import { map } from "rxjs/operators";
// import { Constants } from './shared-service/Constants';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

// @Injectable()
// export class ApiService {
//     // URL = "https://www.treegala.com/backend/api";
//     URL = "https://www.treegala.com/backend/v2/api";
//     url = "";
//     URL_SERVER = "https://maps.googleapis.com/maps/api/geocode/json?latlng=21.1702,72.8311&key=" + Constants.GOOGLE_API_KEY;

//     postMethod = "POST";
//     getMethod = "GET";
//     error = "";

//     LOGINTOKEN: number;
//     forgetpassword: boolean = false;
//     PAGESTATUS: number;
//     accessTokenCalled: boolean = false;
//     backbutton: boolean = false;

//     social_loginAPI = "/user/social_login";
//     notify_requestAPI = "/user/notify_request";
//     generateaccesstokenAPI = "/user/generate_access_token";
//     check_reset_password_url_postAPI = "/user/check_reset_password_url";
//     registerAPI = "/user/register";
//     loginAPI = "/user/login";
//     socialloginAPI = "/user/social_login";
//     forgotpasswordAPI = "/user/forgot_password";
//     saveuserprofileAPI = "/user/save_user_profile";
//     getgenreslistAPI = "/user/get_genres_list";
//     getlistingAPI = "/user/get_listing";
//     genresAPI = "/user/get_genres_list" + "?";
//     eventdetailsAPI = "/user/get_listing_data" + "?";
//     commentlistingAPI = "/user/comment_listing" + "?";
//     managecommentAPI = "/user/manage_comment";
//     listingclaimAPI = "/user/listing_claim";
//     likedislikecommentAPI = "/user/like_dislike_comment";
//     replycommentlistAPI = "/user/reply_comment_list" + "?";
//     managereplycommentAPI = "/user/manage_reply_comment";
//     likedislikereplycomment = "/user/like_dislike_reply_comment";
//     managerating = "/user/manage_rating";
//     aboutusAPI = "/user/about_us" + "?";
//     appsuggestion = "/user/app_suggestion";
//     termsconditionAPI = "/user/terms_condition" + "?";
//     mycommentAPI = "/user/my_comment" + "?";
//     listingfavouriteAPI = "/user/listing_favourite";
//     mytoppicksAPI = "/user/my_top_picks" + "?";
//     mylistingAPI = "/user/my_listing" + "?";
//     addnewpasswordAPI = "/user/add_new_password";
//     gettagslistAPI = "/provider/get_tags_list" + "?";
//     gettimezonelistAPI = "/provider/get_timezone_list" + "?";
//     managelistingAPI = "/provider/manage_listing";
//     constructor(public Http: Http, public afAuth: AngularFireAuth) { }


//     doTwitterLogin() {
//         return new Promise<any>((resolve, reject) => {
//             let provider = new firebase.auth.TwitterAuthProvider();
//             this.afAuth.auth
//                 .signInWithPopup(provider)
//                 .then(res => {
//                     resolve(res);
//                 }, err => {
//                     console.log(err);
//                     reject(err);
//                 })
//         })
//     }

//     makeAPICall(methodName, url, params, callback: (response) => void) {
//         this.url = this.URL + url;
//         //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'enctype': 'multipart/form-data' });
//         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic dHJlZWdhbGE6UVhHNFpyamJAeCQpZnQrTQ==' });
//         let options = new RequestOptions({ headers: headers });
//         /* API call using Post Method.*/
//         if (methodName == this.postMethod) {
//             return this.Http.post(this.url, params, options).pipe(map(res => res.json())).subscribe(
//                 response => {
//                     callback(response);
//                 },
//                 error => {
//                     this.error = error;
//                 }
//             )
//         }
//         /* API call using Get Method.*/
//         if (methodName == this.getMethod) {
//             // return this.http.get(this.endpoint_url).map(res => res.json());
//             return this.Http.get(this.url + params, options).pipe(map(res => res.json())).subscribe(
//                 response => {
//                     callback(response);
//                 },
//                 error => {
//                     this.error = error;
//                 }
//             )
//         }
//         /* end get method  */
//     }

//     currentlatlogAPICall(url, callback: (response) => void) {
//         return this.Http.get(url).pipe(map(res => res.json())).subscribe(
//             response => {
//                 callback(response);
//             },
//             error => {
//                 this.error = error;
//             }
//         )

//         /* end get method  */
//     }

//     FileUploadAPICall(methodName, url, params, callback: (response) => void) {

//         this.url = this.URL + url;
//         //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'enctype': 'multipart/form-data' });
//         let headers = new Headers({ 'Authorization': 'Basic dHJlZWdhbGE6UVhHNFpyamJAeCQpZnQrTQ==' });
//         let options = new RequestOptions({ headers: headers });


//         /* API call using Post Method.*/
//         if (methodName == this.postMethod) {
//             return this.Http.post(this.url, params, options).pipe(map(res => res.json())).subscribe(
//                 response => {
//                     callback(response);
//                 },
//                 error => {
//                     this.error = error;
//                 }
//             )
//         }
//     }



//     isNullUndefinedOrBlank(fd) {
//         if (fd == "" || fd == null || fd == "undefined") {
//             return false;
//         }
//         else {
//             return true;
//         }
//     }
//     getLocalStorage(param_keys) {
//         return localStorage.getItem(param_keys);
//     }
// }