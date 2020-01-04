import { Membre } from './Membre';
import { Hackaton } from './Hackaton';

export class equipe{
    id_equipe:Number;
    nom:String;
    membres:Membre[];
    event:Hackaton[];
    public getmem(){
        return this.membres
    }
    public setmem(m:Membre[]){
        this.membres=m;
    }

 

}