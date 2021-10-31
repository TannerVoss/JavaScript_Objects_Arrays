            const numbers = [2, 22, 12, 17, 18, 39, 129];

            function arraySum(numbers) {
                let sum = 0;
                numbers.forEach((number, index) => {
                    sum += number;
                });
                return sum;
            }

            console.log(arraySum(numbers));

            const attendance = [
                "ben",
                "keith",
                "jeff",
                "joshua",
                "kevin",
                "tanner",
                "soma",
                "omar",
            ]

            attendance[0] = "seth"; //"ben" reassigned to "seth"
            attendance[7]; // "omar"
            attendance[0]; // "seth"