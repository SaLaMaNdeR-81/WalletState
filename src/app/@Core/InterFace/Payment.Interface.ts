export interface Payment {
    UID : string ;
    Title:string ;
    Description:string ;
    StatusId:string ;
    Creation:string ;
    Price:number ;
    Profit:boolean ;

}

export interface Status{
    UID:string;
    Name:string;
    Color:String;
}