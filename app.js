const app = new Vue({
    el: '#app',
data: {
        products: [
            { id: 1, name: 'T-shirt', price: 19.99, image: 'path/to/tshirt.jpg', description: 'Comfortable cotton T-shirt', quantity: 1 },
            { id: 2, name: 'Jeans', price: 39.99, image: 'path/to/jeans.jpg', description: 'Stylish blue jeans', quantity: 1 },
            // Add more products here
        ],
        cart: []
    },
    computed: {
        featuredProducts() {
            return this.products.slice(0, 3); // Display the first 3 products as featured
        },
        totalPrice() {
            return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        }
    },
    methods: {
        addToCart(product) {
            const found = this.cart.find(item => item.id === product.id);
            if (found) {
                found.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
            alert('Added to cart!');
        },
    
        removeFromCart(item) {
            this.cart = this.cart

        }
    }
})