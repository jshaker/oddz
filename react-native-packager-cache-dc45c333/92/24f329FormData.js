










'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



































FormData=function(){


function FormData(){_classCallCheck(this,FormData);
this._parts=[];
}_createClass(FormData,[{key:'append',value:function append(

key,value){





this._parts.push([key,value]);
}},{key:'getParts',value:function getParts()

{
return this._parts.map(function(_ref){var _ref2=_slicedToArray(_ref,2),name=_ref2[0],value=_ref2[1];
var contentDisposition='form-data; name="'+name+'"';

var headers={'content-disposition':contentDisposition};





if(typeof value==='object'){
if(typeof value.name==='string'){
headers['content-disposition']+='; filename="'+value.name+'"';
}
if(typeof value.type==='string'){
headers['content-type']=value.type;
}
return _extends({},value,{headers:headers,fieldName:name});
}

return{string:String(value),headers:headers,fieldName:name};
});
}}]);return FormData;}();


module.exports=FormData;