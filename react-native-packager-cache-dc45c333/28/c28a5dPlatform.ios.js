











'use strict';

var Platform={
OS:'ios',
get Version(){
return require('NativeModules').IOSConstants.osVersion;
},
select:function select(obj){return obj.ios;}};


module.exports=Platform;