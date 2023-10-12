export class spotifyAuth{
    constructor(){
        this.clientId = '68a55a2886e749bca601a5bf0b0711ac';
        this.clientSecret = 'd6271f0563094b6fb45a4db782706dfb';
        this.websiteUrl = 'chrome-extension://lonnioflpjblmpcfcjfenmlciicgibnl/app/popup.html'
        this.redirectUri = this.websiteUrl
        this.idExtension = 'lonnioflpjblmpcfcjfenmlciicgibnl'
        this.scopes = 'user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private'
    }
} 