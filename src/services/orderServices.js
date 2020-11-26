import http from "./httpServices";

const apiEndoint = "http://localhost:3002/api/order";

export function getOrder() {
  return http.get(apiEndoint);
}

export function saveOrder(order) {
  return http.post(apiEndoint, order);
}
