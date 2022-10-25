function fizzBuzz(n: number): string[] {
    let answ: string[] = []

    for (let i = 1; i <= n; i++) {
        let div3 = i % 3 == 0;
        let div5 = i % 5 == 0;

        if (div3 && div5) {
            answ.push("FizzBuzz")
        } else if (div3) {
            answ.push("Fizz")
        } else if (div5) {
            answ.push("Buzz")
        } else {
            answ.push(String(i))
        }
    }
    return answ
};

function sum(num1: number, num2: number): number {
    return num1 + num2
};