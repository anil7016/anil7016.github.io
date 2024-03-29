export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken){
        // for nodejs express backend   
        return { "x-access-token" : user.accessToken}
    }else{
        console.log('Running node js')
        return{}
    }
}