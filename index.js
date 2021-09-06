// #Junior
// task:
const Feed = {
    "1588291200-a": {
        "id": "J8iXjOxI0fWJWckJK8cGjZzm7Rd2",
        "message": "old"
    },
    "1593580504-d": {
        "id": "J8iXjOxI0fWJWckJK8cGjZzm7Rd2",
        "message": "hello"
    },
};

function addKey(objFeed) {
    const feed = JSON.parse(JSON.stringify(objFeed));

    for (let item in feed) {
        const itemArr = item.split('-');
        feed[item].time = itemArr[0];
    }

    return JSON.parse(JSON.stringify(feed));
}

console.log(addKey(Feed));

// Task: reform the Json file locally:
// re - enter the key inside the value feilds without the suffix
// result:
// Feed = {
//     "1588291200-a": {
//         "id": "J8iXjOxI0fWJWckJK8cGjZzm7Rd2",
//         "message": "old"
//       "time": 1588291200
//     },
//     ...
// }
// Note: this feed contain 50 messages, it's important to keep the logic efficient.
