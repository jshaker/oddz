




















'use strict';

var AppEventsLogger=require('react-native').NativeModules.FBAppEventsLogger;















module.exports={




setFlushBehavior:function setFlushBehavior(flushBehavior){
AppEventsLogger.setFlushBehavior(flushBehavior);
},










logEvent:function logEvent(eventName){
var valueToSum=0;for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}
if(typeof args[0]==='number'){
valueToSum=args.shift();
}
var parameters=null;
if(typeof args[0]==='object'){
parameters=args[0];
}
AppEventsLogger.logEvent(eventName,valueToSum,parameters);
},




logPurchase:function logPurchase(purchaseAmount,currencyCode,parameters){
AppEventsLogger.logPurchase(purchaseAmount,currencyCode,parameters);
},




flush:function flush(){
AppEventsLogger.flush();
}};