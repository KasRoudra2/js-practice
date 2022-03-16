const api = (url, method, data) => {
    return new Promise((resolve, reject) => {
        if(!url) reject("No url specified!")
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "*/*");
        //xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 400) resolve(xhr.response);
            reject({ status: xhr.status, message: "Server Error" });
        };
        xhr.onerror = (err) => {
            console.log(err)
            reject("Network Error");
        }
        
    })
};


/*api("https://jsonplaceholder.typicode.com/todos", "GET")
.then((res)=>console.log(res))
.catch((res)=>console.log(res));*/

api("http://127.0.0.1:8000", "PUT", {
    id: 1,
    body: {
        title: "What is Let scoped?",
        options: ["Global", "Local", "Block", "Function"],
        answer: "Block"
    }
})
.then((res)=>console.log(res))
.catch((res)=>console.log(res));

/*
api("http://127.0.0.1:8000", "POST", { 
                title: "What is Closure?",
                options: ["Function", "Scope", "Object", "Context"],
                answer: "Scope"
            })
.then((res)=>console.log(res))
.catch((res)=>console.log(res));*/
