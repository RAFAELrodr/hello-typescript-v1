export class ConsoleLogger{

    mainThread: string='';

    constructor(mainThread?:string){
        this.mainThread = mainThread;
    }

    log(message:string): void{
        console.log(`${this.mainThread !== undefined?'['+this.mainThread +']':''}${message}`);
    }

   /*  log(message: Object): void{
        console.log(message);
    } */
}