export function dbconnection(){
    return {
        connect:()=>{
console.log('DB connected')
        },
        disconnect:()=>{
            console.log('DB disconnected')
        }
    }
}