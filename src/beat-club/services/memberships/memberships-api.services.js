import http from "../../../core/services/http-common";

export class MembershipsApiServices {
  getMemberships() {
    return http.get("/memberships");
  }
}
