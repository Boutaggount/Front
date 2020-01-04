import { equipe } from './equipe';
import { Hackaton } from './Hackaton';

export class Membre{
    id_mem:Number; 
    prenom:String;
    nom:String;
    adresse:String;
    email:String;
    num:String;
    login:string;
    pwd:String;
    qust:String;
    rep:String;
    sexe:String;
    eq:equipe;
    Hackatons:Hackaton[];
}