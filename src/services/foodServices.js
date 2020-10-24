import http from "./httpServices";

const apiEndoint = "http://localhost:3002/api/product";

export function getFood() {
  return http.get(apiEndoint);
}

export function saveFood(customer) {
  return http.post(apiEndoint, customer);
}

export function editFood(customer) {
  return http.post(apiEndoint, customer);
}
export function deleteFood(customer) {
  return http.post(apiEndoint, customer);
}
