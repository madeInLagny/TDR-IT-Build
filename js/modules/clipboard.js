CNVS.Clipboard=function(){var n=SEMICOLON.Core;return{init:function(t){if(n.getSelector(t,!1,!1).length<1)return!0;n.loadJS({file:"plugins.clipboard.js",id:"canvas-clipboard-js",jsFolder:!0}),n.isFuncTrue(function(){return"undefined"!=typeof ClipboardJS}).then(function(e){var o,u;return!!e&&(n.initFunction({class:"has-plugin-clipboard",event:"pluginClipboardReady"}),(t=n.getSelector(t,!1)).length<1||(o=[],u=0,void t.forEach(function(e){var t=e.querySelector("button"),n=t.innerHTML,i=t.getAttribute("data-copied")||"Copied",r=t.getAttribute("data-copied-timeout")||5e3;o[u]=new ClipboardJS(t,{target:function(e){return e.closest(".clipboard-copy").querySelector("code")}}),o[u].on("success",function(e){t.innerHTML=i,t.disabled=!0,setTimeout(function(){t.innerHTML=n,t.disabled=!1},Number(r))}),u++})))})}}}();