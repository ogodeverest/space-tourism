"use strict";(self.webpackChunkspace_tourism=self.webpackChunkspace_tourism||[]).push([[638],{9029:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(9439),i=t(1307),o=t(6871);function a(){var n=(0,i.O)(),e=(0,o.TH)().pathname.split("/"),t=(0,r.Z)(e,3),a=(t[0],t[1]),c=t[2];return n[a].find((function(n){return n.slug===c}))}},1638:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i=t(168),o=t(2791),a=t(1110),c=t(9439),s=t(1413),u=t(4925),l=t(3655),h=t(7760),p=t(4647),d=t(6929),m=t(6031),f=t(7836),g=t(4462),x=t(184),y=["url"],b=m.ZP.div(r||(r=(0,i.Z)(["\n  height: 27rem;\n  width: 27rem;\n  cursor: ",";\n"])),(function(n){return n.mouseDown?"grabbing":"grab"}));function Z(n){var e=n.url,t=(0,u.Z)(n,y),r=(0,o.useRef)(null),i=function(n){var e=(0,l.L)(n).scene,t=(new h.Box3).setFromObject(e),r=t.getSize(new h.Vector3).length(),i=t.getCenter(new h.Vector3);return{copiedScene:(0,o.useMemo)((function(){return e.clone()}),[e]),boxSize:r,boxCenter:i}}(e),a=i.copiedScene,c=i.boxSize,p=i.boxCenter,m=(0,d.w)().camera;(0,g.ix)(1.2*c,c,p,m);return(0,d.x)((function(){r.current.rotation.y+=.001})),(0,x.jsx)("group",(0,s.Z)((0,s.Z)({ref:r,dispose:null},t),{},{children:(0,x.jsx)("primitive",{object:a})}))}var v=(0,o.memo)(Z);var j,w,P,k,S,C=t(9029),z=t(8242),D=t(4836),L=(0,m.ZP)((function(n){var e=n.className,t=n.model,r=(0,o.useState)(!1),i=(0,c.Z)(r,2),a=i[0],s=i[1],u=f.Z.models+t;return(0,x.jsx)(b,{className:e,onMouseDown:function(){return s(!0)},onMouseUp:function(){return s(!1)},mouseDown:a,children:(0,x.jsxs)(p.Xz,{camera:{fov:15},children:[(0,x.jsx)(g.BI,{enableZoom:!1,enableDamping:!0,enablePan:!1}),(0,x.jsx)("directionalLight",{position:[-5,5,5],color:"white"}),(0,x.jsx)("hemisphereLight",{groundColor:16777215,intensity:.2}),"\\",(0,x.jsx)(o.Suspense,{fallback:null,children:(0,x.jsx)(v,{url:u})})]})})}))(j||(j=(0,i.Z)(["\n  grid-area: viewer;\n\n  ","\n\n  ","\n"])),(function(n){var e=n.theme;return(0,D.cy)(e.breakPoints.desktopUp,"\n      align-self: start;\n      ")}),(function(n){var e=n.theme;return(0,D.cy)(e.breakPoints.mobileDown,"\n      width:90%;\n      height:90%;\n     ")})),M=m.ZP.article(w||(w=(0,i.Z)(["\n  ","\n  padding-inline: 1rem;\n  grid-area: content;\n"])),(function(n){return n.theme.utils.general.flow()})),T=m.ZP.header(P||(P=(0,i.Z)(["\n  ","\n"])),(function(n){return n.theme.utils.general.flow("small")})),B=m.ZP.h2(k||(k=(0,i.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return"\n  color: hsl(".concat(e.colors.white," / 0.5);\n  ").concat(e.utils.typography.size[500],"\n  ").concat(e.utils.typography.uppercase,"\n  ").concat(e.utils.typography.family.sansCond,"\n  ").concat(e.utils.typography.letterSpacing[3],"\n  ").concat(e.utils.typography.color.accent,"\n ")})),I=m.ZP.p(S||(S=(0,i.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return"\n    ".concat(e.utils.typography.size[700],"\n    ").concat(e.utils.typography.uppercase,"\n    ").concat(e.utils.typography.family.serif,"\n  ")})),N=(0,a.E)(M),O={hidden:{x:-10,opacity:0,transition:{duration:.5}},visible:{x:0,opacity:1,transition:{duration:.5}}};function U(){var n=(0,C.Z)();return(0,x.jsxs)(z.T3,{title:n.name,children:[(0,x.jsxs)(N,{role:"tabpanel",tabIndex:0,initial:"hidden",animate:"visible",exit:"hidden",variants:O,children:[(0,x.jsxs)(T,{children:[(0,x.jsx)(B,{children:"The terminology..."}),(0,x.jsx)(I,{children:n.name})]}),(0,x.jsx)("p",{children:n.description})]},n.name),(0,x.jsx)(L,{model:n.model})]})}}}]);
//# sourceMappingURL=638.97b4c3a7.chunk.js.map