import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import {
  FixedCostListResponse,
  FixedCostResponse,
} from './shared/type/FixedCostResponse';
import { FixedCostRequest } from './shared/type/FixedCostRequest';
import { ResponseBase } from 'src/core/type/ResponseBase';

@Injectable({
  providedIn: 'root',
})
export class FixedCostService {
  private path = 'http://localhost:80/api/fixed_costs';
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
  private readonly http = inject(HttpClient);

  //固定費一覧取得API
  fetchFixedCostList = (familyId: number): Observable<FixedCostResponse[]> => {
    const queryParam = new HttpParams().set('familyId', familyId);
    return this.http
      .get<ResponseBase<FixedCostListResponse>>(this.path, {
        headers: this.httpHeader,
        params: queryParam,
      })
      .pipe(map((resp) => resp.data.fixed_costs));
  };

  //固定費作成API
  createFixedCost = (request: FixedCostRequest): Observable<any> => {
    return this.http.post(this.path, request, { headers: this.httpHeader });
  };
}
