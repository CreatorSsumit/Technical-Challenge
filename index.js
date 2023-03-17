const listofcandidate = ['sumit','ambuj','tanya','nandini','prabhat']
const listoffile = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','r','u','v','w','x','y','z']

const randomcount = 2
var newlist = {}
var copyoflist =  [...listoffile]


 for(var i = 0;i<=listofcandidate.length-1;i++){
       let arr=[];
        for(var j =0;j<= randomcount-1;j++){ 
          let randomNumber = Math.floor(Math.random()*copyoflist.length)
              arr = [...arr,copyoflist[randomNumber]]
              copyoflist =  copyoflist.filter((e,i)=>i!== randomNumber)
          newlist[listofcandidate[i]]=arr
         }     
 }


console.log(newlist)

