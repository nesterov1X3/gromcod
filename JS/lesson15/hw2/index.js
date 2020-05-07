 export function createLogger(){
    let logger = [];
    function warn(a = 'User try to restricted page'){
       logger.push(a)
       type = 'warn'
    }

    function error(b = 'error'){
      logger.push(type = b)
      
     }

     function log(c = 'User logged in'){
        memory.push(c)
        type = 'log'
     }
     return {
         warn,
         error,
         log,
     }
}
