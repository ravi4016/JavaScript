
function sieveOfEratosthenes(limit) {
  const primes = [];
  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let p = 2; p * p <= limit; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= limit; i += p)
        isPrime[i] = false;
    }
  }
  for (let p = 2; p <= limit; p++) {
    if (isPrime[p]) {
      primes.push(p);
    }
  }
  return primes;
}
console.log(sieveOfEratosthenes(20))
