const SPEEDLIMIT = 60;
const KMPERPOINT = 10;

function checkSpeedLimit(curSpeed) {
  if (curSpeed <= SPEEDLIMIT) {
    return ('Safe Driving our famliy waiting for you!');
  } else {
    let penaltyPoint = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);
    if (penaltyPoint < 15) {
      return ('go slowly crossed by penalty point: ' + penaltyPoint);
    } else {
      return ('License Suspended!');
    }
  }
}

let checkPoin1 = checkSpeedLimit(20);
console.log(checkPoin1);

let checkPoin2 = checkSpeedLimit(80);
console.log(checkPoin2);

let checkPoin3 = checkSpeedLimit(85);
console.log(checkPoin3);

let checkPoin4 = checkSpeedLimit(90);
console.log(checkPoin4);

let checkPoin5 = checkSpeedLimit(100);
console.log(checkPoin5);