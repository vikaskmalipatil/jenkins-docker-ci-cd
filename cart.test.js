const { createOrder } = require("./order.js");

describe("Create Order", () => {

    test("create order with items", () => {
        const items = [
            { name: "Laptop", price: 50000, quantity: 1 }
        ];

        const result = createOrder(items);

        expect(result.success).toBe(true);
        expect(result.order.total).toBe(50000);
    });

    test("create order with coupon", () => {
        const items = [
            { name: "Laptop", price: 50000, quantity: 1 }
        ];

        const result = createOrder(items, "SAVE10");

        expect(result.success).toBe(true);
        expect(result.order.total).toBe(45000);
    });

    test("empty cart", () => {
        const result = createOrder([]);

        expect(result.success).toBe(false);
        expect(result.message).toBe("Cart is empty");
    });

    test("order without coupon", () => {
        const items = [
            { name: "Mouse", price: 500, quantity: 2 }
        ];

        const result = createOrder(items);

        expect(result.order.total).toBe(1000);
        expect(result.order.coupon).toBe(null);
    });

});