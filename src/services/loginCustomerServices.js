import http from "./httpServices";

const apiEndpoint = "http://localhost:3002/api/logincustomer";

export function loginCustomer(customer) {
  return http.post(apiEndpoint, customer);
}
