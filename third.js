function numbers(a,b){
if (a * b < 0) {
  return a + b;
} else if (a >= 0 && b >= 0)  {
  return a - b;
} else {
  return a * b;
}
}