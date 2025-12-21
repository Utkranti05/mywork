let PROM1 =new Promise ((resolve , reject)=>{
    setTimeout(() => {
        console.log("heyy utk")
        resolve("aahaa")
    },2000);
})
PROM1.then((a)=>{
    console.log(a)
})