import '../authSpotify.js'
import './mainScripts.js'
import { spotifyAuth } from '../authSpotify.js'
import { spotifyAPI } from '../spotifyData.js'

class mainApp{
    constructor(){
        this.token = null
        this.user
        this.spotifyApi
        this.loginToken = false
        this.loginSpotify = false
        this.spotifyAuth = new spotifyAuth()
        this.checkLogin(this.token)
    }

    checkLogin(appToken){
        try {
            chrome.storage.local.get(['token']).then(tokenResult => {
                console.log(tokenResult);
                if(tokenResult.token != undefined || tokenResult.token != '' || tokenResult.token != null || tokenResult != undefined){
                    appToken = tokenResult.token
                    this.setDataApi(appToken, 'loginSpotify')
                } else if(tokenResult.token == undefined || tokenResult.token == '' || tokenResult.token == null){
                    document.querySelectorAll('#login-sect .btn').forEach(btn => {
                        btn.addEventListener('click', ()=> {
                            if(btn == document.querySelector('#login-sect .login-spotify')){
                                const windowAuth = window.open(`https://accounts.spotify.com/authorize?client_id=${spotifyAuth.clientId}&response_type=code&redirect_uri=${spotifyAuth.redirectUri}&show_dialog=true&scope=${spotifyAuth.scopes}`)
                            }
                            if(btn == document.querySelector('#login-sect .login-token')){
                                appToken = prompt('Enter API from your account')
                                while(appToken == ''){
                                    appToken = prompt('Enter API from your account')
                                    if(appToken != null || appToken != '' || appToken != undefined){
                                        this.setDataApi(appToken, 'loginToken')
                                    }
                                }
                            }
                            this.setDataApi(appToken)
                        })
                    });
                }
            })
        } catch (error) {
            console.log(error);
<<<<<<< HEAD
            select('#login-sect .login-spotify').disabled = true
=======
            appToken = prompt('Enter API from your account')
            while(appToken == ''){
                appToken = prompt('Enter API from your account')
                if(appToken != null || appToken != '' || appToken != undefined){
                    this.setDataApi(appToken, 'loginToken')
                }
            }
>>>>>>> parent of 2ddbe31 ()
        }
    }

    setDataApi(token, action){
        if(this[action]){
            this[action] = true
            console.log(this[action])
        }
        this.spotifyApi = new spotifyAPI(token)
        chrome.storage.local.set({ token: token }).then(() => {
            console.log("Token is set");
            console.log(token);
        });
        document.querySelector("#login-sect").style.display = "none"

        this.getDataApi(this.spotifyApi)
    }

    getDataApi(api){
        api.getRequest('getPlaybackState').then(user => {
            this.user = user
            console.log(this.user)
        })
    }
}

window.mainApp = new mainApp()