 export function createLogger(){
    let logger = [];
    function warn(a = ''){
       logger.push(a)
       type = 'warn'
    }

    function error(b = ''){
      logger.push(b)
      type = 'error'
     }

     function log(c = 'User logged out'){
        memory.push(c)
        type = 'log'
     }
     return {
         warn,
         error,
         log,
     }
}
