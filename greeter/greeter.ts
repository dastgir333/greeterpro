@sealed
    class Greeter {

        private _x: number;

        greeting: string;

        @format("Hello, %s")
        greeting: string;

        constructor(message: string) {
            this.greeting = message;
        }

        @enumerable(false)
        greet() {
            return "Hello, " + this.greeting;
        }

        @validate
        greetHello(@required name: string) {
            return "Hello " + name + ", " + this.greeting;
        }

        @configurable(false)
        get x() {
            return this._x;
        }
    }
                