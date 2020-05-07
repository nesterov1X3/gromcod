//  export function createLogger(){
//     let logger = [];
//     function warn(a = 'User try to restricted page'){
//        logger.push(a)
//        type = 'warn'
//     }

//     function error(b = 'error'){
//       logger.push(type = b)
      
//      }

//      function log(c = 'User logged in'){
//         memory.push(c)
//         type = 'log'
//      }
//      return {
//          warn,
//          error,
//          log,
//      }
// }
export const createLogger = () => {
   let memory = [];
   let warn = (text) => memory.unshift({ message: text, dateTime: new Date(), type: "warn" });


   let error = (text) => memory.unshift({ message: text, dateTime: new Date(), type: "error" });


   let log = (text) => memory.unshift({ message: text, dateTime: new Date(), type: "log" });

   let getRecords = (text) => {
     if (text == "warn") return memory.filter((obj) => obj.type == "warn");
     if (text == "error") return memory.filter((obj) => obj.type == "error");
     if (text == "log") return memory.filter((obj) => obj.type == "log");
     return memory;
   };
   let logger = {
     warn,
     error,
     log,
     memory,
     getRecords,
   };
   return logger;
 };



