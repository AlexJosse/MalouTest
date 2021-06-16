import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  Key = "fdf429cca1201279179e94e631ceaf652780d35275fec51707aaeca1a23e0f0f";
  page = 1;
  per_page = 21;
  getImage() {
    return this.httpClient.get(
      `http://localhost:3000/api/collections`
    );
  }
}