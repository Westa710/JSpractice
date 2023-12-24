"use strict";

function isLessThan140(text) {
  return text.length <= 140;
}

function alertTweetable(text) {
  if (text.length <= 5) {
    alert("you can tweet!");
  } else {
    alert("muri");
  }
}

console.log(isLessThan140("fooo"));

alertTweetable("fooo000");
