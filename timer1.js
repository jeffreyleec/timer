const myArgs = process.argv.slice(2);
//process.stdout.write('\x07');
//console.log(myArgs)

const timer = function (input) {

  let newInput = []
  for (let item of input) {
    let temp = Number(item)

    if (temp > 0) {
      newInput.push(temp)
    } 
  }

  for (let item of newInput) {
    setTimeout(() => {
      process.stdout.write('\x07');

    }, item * 1000);
  }

}


timer(myArgs)