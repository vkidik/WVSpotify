import '../spotifyData.js'
import {spotifyAPI} from '../spotifyData.js'

class mainApp{
    constructor(){
        this.token = ''
        this.user
        this.spotifyApi 

        this.checkLogin(this.token)
    }

    checkLogin(appToken){
        chrome.storage.local.get(['token']).then(tokenResult => {
            if(tokenResult.token != '' || tokenResult == undefined){
                appToken = tokenResult.token
                this.getDataAPI(this.token)
            } else{
                selectAll('#login-sect buttin').forEach(btn => {
                    btn.addEventListener('click', ()=> {
                        if(btn == select('#login-sect .login-spotify')){
                            
                        }
                        if(btn == select('#login-sect .login-token')){
                            console.log("token-auth");
                            appToken = prompt('Enter API from your account')
                            this.getDataAPI(appToken)
                        }
                        this.getDataAPI(appToken)
                    })
                });
            }
        })
    }

    getDataAPI(token){
        this.spotifyApi = new spotifyAPI(token)
    }
}

window.mainApp = new mainApp()