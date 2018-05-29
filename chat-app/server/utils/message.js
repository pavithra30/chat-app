var generateMessage=(from,text)=>{
console.log("Its git demo");

  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};


var generateLocationMessage=(from,latitude,longitude)=>{
  return{
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};
module.exports={generateMessage,generateLocationMessage};
   
