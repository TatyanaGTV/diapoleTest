import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) {}

  saveReport ( userId:string, solution: {}):Observable<{}>{
    return this.http.post<{}>(environment.api + 'diagnosis_conclusion', {userId, solution})
  }

  getReports (){
    return this.http.get<{}>(environment.api + 'diagnosis_conclusion')
  }
}
