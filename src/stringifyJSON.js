// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var t = typeof obj;
  
  
  if (t === "string"){
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)){
    return "[" +
    _.map(obj, function(item){
      if(typeof item !=="function"){
      return stringifyJSON(item);
    }}).join(",")
    + "]";
  }
  
  if (obj && t === "object"){
    return "{" +
    _.map(obj, function(value, key){
      if(value!== undefined && typeof value !== "function"){
      return stringifyJSON(key) + ":" + stringifyJSON(value);
    }).join(",")
      + "}";
  }
  return '"' + String(obj) + '"';
  
  
  // your code goes here
};
