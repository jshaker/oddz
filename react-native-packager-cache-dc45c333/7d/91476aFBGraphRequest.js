





















'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

























FBGraphRequest=function(){


















function FBGraphRequest(
graphPath,
config,
callback)
{_classCallCheck(this,FBGraphRequest);
this.graphPath=graphPath;
this.config=config?config:{};
this.callback=callback?callback:function(){};
}_createClass(FBGraphRequest,[{key:'addStringParameter',value:function addStringParameter(




paramString,key){
if(this.config!=null&&this.config.parameters!=null){
this.config.parameters[key]={string:paramString};
}
}}]);return FBGraphRequest;}();


module.exports=FBGraphRequest;