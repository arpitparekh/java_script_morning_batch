/*
    *****
    *****
    *****
    *****

*/

for (let k = 1; k <= 5; k++) {
  // k = 1
  // k == 1 , 2

  for (let i = 1; i <= 5; i++) {
    process.stdout.write(`* `); // print output in one line
  }
  console.log();
}

/*  // left align triangle

*
**
***
****
*****

*/

console.log();

for (let k = 1; k <= 5; k++) {
  // k = 1,2,3,4,5
  // k = 1
  // k == 1 , 2

  for (let i = 1; i <= k; i++) {
    process.stdout.write(`* `); // print output in one line
  }
  console.log();
}

/*   // right align triangle

    *
   **
  ***
 ****
*****

*/

console.log();

for (let k = 1; k <= 5; k++) {
  // k == 1,2,3,4,5
  // k = 1,2,3,4,5
  // k = 1
  // k == 1 , 2

  for (let i = 1; i <= 5 - k; i++) {
    // 4,3,2,1,0
    process.stdout.write(`  `);
  }

  for (let i = 1; i <= k; i++) {
    // 1,2,3,4,5
    process.stdout.write(`* `); // print output in one line
  }
  console.log();
}

/*    // inverted left align triangle

* * * * * 
* * * * 
* * * 
* * 
*

*/

console.log();

for (let k = 5; k >= 1; k--) {
  // k = 1,2,3,4,5
  // k = 1
  // k == 1 , 2

  for (let i = k; i >= 1; i--) {
    process.stdout.write(`* `); // print output in one line
  }
  console.log();
}

/*  inverted right align trinagle

* * * * * 
  * * * * 
    * * * 
      * * 
        *

*/

console.log();

for (let k = 5; k >= 1; k--) {
  // k  = 5,4,3,2,1
  // k = 1,2,3,4,5
  // k = 1
  // k == 1 , 2

  for (let i = 5 - k; i >= 1; i--) {
    // 0,1,2,3,4
    process.stdout.write(`  `); // print output in one line
  }

  for (let i = k; i >= 1; i--) {
    process.stdout.write(`* `); // print output in one line
  }
  console.log();
}

/*


*
**
* *
*  *
*****


*/

console.log();

for (let k = 1; k <= 5; k++) {
  // k = 1,2,3,4,5
  // k = 1
  // k == 1 , 2

  for (let i = 1; i <= k; i++) {
    if (i == 1 || k == 5 || i == k) {
      process.stdout.write(`* `);
    } else {
      process.stdout.write(`  `);
    }
  }

  console.log();
}

/*
 * * * * *
 *       *
 *       *
 *       *
 * * * * *
 */

console.log();

for (let k = 1; k <= 5; k++) {
  // k = 1
  // k == 1 , 2

  for (let i = 1; i <= 5; i++) {
    if (i == 1 || k == 5 || i == 5 || k == 1) {
      process.stdout.write(`* `); // print output in one line
    } else {
      process.stdout.write(`  `); // print output in one line
    }
  }
  console.log();
}
