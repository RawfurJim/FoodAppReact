import http from "./httpServices";

const apiEndoint = "http://localhost:3002/api/customer";

export function getCustomer() {
  return http.get(apiEndoint);
}

export function saveCustomer(customer) {
  return http.post(apiEndoint, customer);
}
