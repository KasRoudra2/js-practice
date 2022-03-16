const api = (url, method="GET", data) => {
    return new Promise((resolve, reject) => {
        if(!url) reject("No url specified!")
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        if(data){
            xhr.send(data);
        }
        else {
            xhr.send();
        }
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 400) resolve(xhr.response);
            reject({ status: xhr.status, message: "Server Error" });
        };
        xhr.onerror = () => {
            reject("Network Error");
        }
    });
};

const URL = "https://jsonplaceholder.typicode.com/todos/1";

/* Async Await*/
const asyncFunc = async () => { // arrow function
    const result = await api(URL);
    console.log(result);
}
asyncFunc();
async function asyncFunc2 () { // normal function
    const result = await api(URL);
    console.log(result);
}
asyncFunc2();

(async() => { IIFE
    const result = await api(URL);
    console.log(result);
})()



/* Promise */
const newPromise = new Promise((resolve,reject)=>{ // Normal Promise
    resolve(api(URL));
});

newPromise
.then((res)=>console.log(res));

const funcPromise = () => { // Functioned Promise
    const promise = new Promise((resolve,reject)=>{
        const result = api(URL);
        resolve(result);
    })
    return promise;
};
funcPromise()
.then((res)=>console.log(res));

