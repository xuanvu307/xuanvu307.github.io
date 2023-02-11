// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

function getStringMaxLength(arrays) {
    let maxLengthOfString = arrays[0].length;
    for (let i = 1; i < arrays.length; i++) {
        if (arrays[i].length > maxLengthOfString) {
            maxLengthOfString = arrays[i].length;
        }
    }
    return arrays.filter((e) => e.length == maxLengthOfString);
}

console.log(getStringMaxLength(['ab12a', 'aaewrew', 'areredd', 'c', 'vcsd']));

// Bài 2. Cho mảng users như sau:
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 26,
        isStatus: true
    },
    {
        name: "Phạm Văn Dũng",
        age: 30,
        isStatus: true
    },
    {
        name: "Phạm Văn Dũng",
        age: 35,
        isStatus: false
    },
]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function userThanAge25(users){
    return users.filter((u) => u.age > 25 && u.isStatus == true);
}

console.log(userThanAge25(users))
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

function sortByAge(users) {
    return users.sort((a,b) => a.age - b.age)
}

console.log(sortByAge(users))

// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function getCountElement(arrays) {
    let obj = {};
    console.log(obj)
    for (let i = 0; i < arrays.length; i++) {
        if (obj.hasOwnProperty(arrays[i])) {
            obj[arrays[i]]++;
        } else {
            obj[arrays[i]] = 1;
        }
    }
    return obj;
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
