import { convertIcsCalendar, type IcsCalendar, type IcsEvent } from "ts-ics";
import { salles } from "./salles";

function checkafter(liste:IcsEvent[],i:number){
    let b = i+1
    while ( liste[b] !== undefined && liste[i].end === liste[b].start ) {
        i += 1
        b = i+1
    }
    return i
}

function dichotomie(liste:IcsEvent[],datetime:Date,a:number,b:number) : [boolean,number]{
    /*

        Renvoie [x,y] 
        
        x : booléen -> si la salle est prise true, sinon false
        y : number -> date a laquelle la salle ce statut change
      
    */
   
    if (b-a <= 1){
        var test0 = datetime < liste[a].start.date
        var test1 = liste[a].end!.date < datetime
        var test2 = datetime < liste[b].start.date
        var test3 = liste[b].end!.date < datetime // cas out of bound1
        

        if (test0){
            return [false,a]
        }
        else if (test1 && test2){
            return [false,b]
        }
        else if (test3) {
            return [true,-1]
        }
        else{
            return [true,a]
        }
         
    }
    var m = Math.floor((b+a)/2)
    if (datetime < liste[m].end!.date) {
        return dichotomie(liste,datetime,a,m)
    }
    else{
        return dichotomie(liste,datetime,m,b)
    }
}

export function salleLibres(cal:IcsCalendar,date:Date){
    /*
        Retourne si la salle est libre (true) ou non (false) sur 

        date est par défaut Date.now()

        Args : 
            - salle : string
            - date : int (UNIX time) en secondes
        Return :
            - return.state : booléen : état de la salle ( libre : true , occupé : false )
            - return.until : int : date de fin de l'état (UNIX time)
    */

    let events = cal.events!

    var req = dichotomie(events, date,0,events.length-1 )
    var state = req[0]    
    var i = req[1]
    if (i == -1) {
        return {"error":"Calendrier pas à jour"}
    }

    if (state){
        i = checkafter(events,i) // vérification des évenements collés 
        return {"state":"Occupé","until":events[i].end!.date}
    }
    else{
        return {"state":"Libre","until":events[i].start.date}
    }

}

export async function sallesEvents(rootUrl : string, resources : string[], project: string, start: Date, end: Date) : Promise<IcsEvent[]> {
    /*
        Retourne les horaires des cours/events d'une plage donnée dans une liste de salles données (ressources)
        
        Args:
            - salle : string
            - date : int (UNIX time) en secondes
        return : 
            - liste des events d'une journée
    */

    let url = rootUrl + "/jsp/custom/modules/plannings/anonymous_cal.jsp?resources={resources}&projectId={projectId}&firstDate={date-start}&lastDate={date-end}"

    url = url.replace("{resources}", resources.join(","))
    url = url.replace("{projectId}", project)
    url = url.replace("{date-start}", start.toISOString().split("T")[0])
    url = url.replace("{date-end}", end.toISOString().split("T")[0])
    let req = await fetch(url)
    let resp = await req.text()

    let events = convertIcsCalendar(undefined,resp).events || []
    events.sort((a,b) => a.start.date.getTime() - b.start.date.getTime())
    return events;
}

export let data = salles
export type Event = IcsEvent