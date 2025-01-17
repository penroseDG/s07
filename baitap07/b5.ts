// Khai báo biến kiểu any
let bienAny: any = "Chào bạn";

// Khai báo biến kiểu unknown
let bienUnknown: unknown = "Xin chào";

// Sử dụng biến kiểu any
let doDaiAny: number = bienAny.length; // không có lỗi, vì biến kiểu any có thể là bất kỳ kiểu nào
console.log("Độ dài của biến kiểu any:", doDaiAny); // in ra: 9

Sử dụng biến kiểu unknown
let doDaiUnknown: number = bienUnknown.length; // lỗi: Property 'length' does not exist on type 'unknown'
console.log("Độ dài của biến kiểu unknown:", doDaiUnknown);
