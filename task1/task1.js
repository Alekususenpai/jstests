/* Да се направи функција која за даден број на чекори `n` и низа од вредности, ќе ги поместува елементите кои се наоѓаат во неа следејќи ги следните правила:

  - Доколку `n` е ПОЗИТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон десно, за онолку места колку што изнесува `n`.
 
  - Доколку `n` е НЕГАТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон лево, за онолку места колку што изнесува `n`.
 
  Пример:
   - n = 2, низата ['1', '2', '3'] треба да се претвори во ['2', '3', '1']
   - n = -3, низата ['1', '2', '3', '4', '5'] треба да се претвори во ['4', '5', '1', '2', '3']
 */

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function combinator(n, arr) {
  if (n !== 0) {
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
      }
      console.log(`Array elements moved to the right for ${n} places. Here is your new array:`, arr);
    } else if (n < 0) {
      let absNum = Math.abs(n);
      for (let i = 0; i < absNum; i++) {
        arr.push(arr.shift());
      }
      console.log(`Array elements moved to the left for ${absNum} places. Here is your new array:`, arr);
    }
  } else {
    console.log("You've entered 0. Please enter a valid number!")
  }
}

combinator(-4, nums)

