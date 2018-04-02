export function LoginError(message){
      this.name  = 'LoginError'
      this.message = message
}
LoginError.prototype  = new Error();
