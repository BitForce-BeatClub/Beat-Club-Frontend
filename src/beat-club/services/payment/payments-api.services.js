import http from "../../../core/services/http-common";

export class PaymentsApiServices {
    //GET
    getPayments() {
        return http.get("/payments");
    }
    //POST
    createPayments(data) {
        return http.post("/payments", data);
    }
    //GET BY ID
    getPaymentsById(id) {
        return http.get(`/payments/${id}`);
    }
    //UPDATE
    updatePayment(id, data) {
        return http.put(`payments/${id}`, data);
    }
}
