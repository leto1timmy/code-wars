function maximumWealth(accounts: number[][]): number {
    return Math.max(...accounts.map((acc) => acc.reduce((prev, curr) => prev + curr), 0))
};