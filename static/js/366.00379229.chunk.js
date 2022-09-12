"use strict";(self.webpackChunkspace_tourism=self.webpackChunkspace_tourism||[]).push([[366],{366:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var i,r=n(168),a=n(2791),o=n(6031),s=n(4836),c=n(1110),l=n(1856),u=n(8242),d=n(4647),h=n(6929),p=n(3655),f=n(3433),v=n(9439),m=n(3144),g=n(5671),y=n(136),x=n(9388),b=n(7760),j=function(e){(0,y.Z)(n,e);var t=(0,x.Z)(n);function n(){return(0,g.Z)(this,n),t.call(this,{uniforms:{time:{value:0},fade:{value:1}},vertexShader:"\n      uniform float time;\n      attribute float size;\n      varying vec3 vColor;\n      void main() {\n        vColor = color;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);\n        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));\n        gl_Position = projectionMatrix * mvPosition;\n      }",fragmentShader:"\n      uniform sampler2D pointTexture;\n      uniform float fade;\n      varying vec3 vColor;\n      void main() {\n        float opacity = 1.0;\n        if (fade == 1.0) {\n          float d = distance(gl_PointCoord, vec2(0.5, 0.5));\n          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));\n        }\n        gl_FragColor = vec4(vColor, opacity);\n\n        #include <tonemapping_fragment>\n\t      #include <encodings_fragment>\n      }"})}return(0,m.Z)(n)}(b.ShaderMaterial),w=function(e){return(new b.Vector3).setFromSpherical(new b.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI))},Z=a.forwardRef((function(e,t){var n=e.radius,i=void 0===n?100:n,r=e.depth,o=void 0===r?50:r,s=e.count,c=void 0===s?5e3:s,l=e.saturation,u=void 0===l?0:l,d=e.factor,p=void 0===d?4:d,m=e.fade,g=void 0!==m&&m,y=e.speed,x=void 0===y?1:y,Z=a.useRef(),C=a.useMemo((function(){for(var e=[],t=[],n=Array.from({length:c},(function(){return(.5+.5*Math.random())*p})),r=new b.Color,a=i+o,s=o/c,l=0;l<c;l++)a-=s*Math.random(),e.push.apply(e,(0,f.Z)(w(a).toArray())),r.setHSL(l/c,u,.9),t.push(r.r,r.g,r.b);return[new Float32Array(e),new Float32Array(t),new Float32Array(n)]}),[c,o,p,i,u]),E=(0,v.Z)(C,3),P=E[0],S=E[1],k=E[2];(0,h.x)((function(e){return Z.current&&(Z.current.uniforms.time.value=e.clock.getElapsedTime()*x)}));var z=a.useState((function(){return new j})),M=(0,v.Z)(z,1)[0];return a.createElement("points",{ref:t},a.createElement("bufferGeometry",null,a.createElement("bufferAttribute",{attach:"attributes-position",args:[P,3]}),a.createElement("bufferAttribute",{attach:"attributes-color",args:[S,3]}),a.createElement("bufferAttribute",{attach:"attributes-size",args:[k,1]})),a.createElement("primitive",{ref:Z,object:M,attach:"material",blending:b.AdditiveBlending,"uniforms-fade-value":g,transparent:!0,vertexColors:!0}))})),C=n(4462),E=n(4635),P=n(7836),S=n(184),k=o.ZP.div(i||(i=(0,r.Z)(["\n  height: 100vh;\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n"]))),z=function(e){var t=e.isBigScreen,n=(0,a.useRef)(null),i=t?[2.5,-.3,0]:[0,-1.5,0],r=t?.003:.0025,o=(0,p.L)(P.Z.models+"Earth.glb");return(0,h.x)((function(){n.current.rotation.y+=5e-4})),(0,S.jsx)("primitive",{ref:n,object:o.scene,position:i,scale:r})};function M(){var e=(0,o.Fg)(),t=(0,E.Z)(e.breakPoints.desktopUp);return(0,S.jsx)(k,{children:(0,S.jsxs)(d.Xz,{camera:{fov:30},children:[(0,S.jsx)(C.BI,{}),(0,S.jsx)("directionalLight",{position:[-5,5,5],color:"white"}),(0,S.jsx)(Z,{radius:100,depth:50,count:6e3,factor:6,saturation:0,fade:!0,speed:1}),(0,S.jsx)(a.Suspense,{fallback:null,children:(0,S.jsx)(z,{isBigScreen:t})})]})})}var A,_,F,B=n(1307),L=(0,o.ZP)(u.T5).attrs({as:"main"})(A||(A=(0,r.Z)(["\n  z-index: 1;\n  height: 100%;\n  ","\n"])),(function(e){var t=e.theme;return(0,s.cy)(t.breakPoints.desktopUp,"\n    padding-bottom: max(6rem, 20vh);\n    align-items: end;\n\n    & > *:first-child {\n      grid-column: 2;\n    }\n\n    & > *:last-child {\n      grid-column: 3;\n    }\n  ")})),T=o.ZP.h1(_||(_=(0,r.Z)(["\n  ","\n"])),(function(e){var t=e.theme;return"\n   ".concat(t.utils.typography.color.accent,"\n   ").concat(t.utils.typography.size[500],"\n   ").concat(t.utils.typography.family.sansCond,"\n   ").concat(t.utils.typography.letterSpacing[1],"\n   ").concat(t.utils.typography.uppercase,"\n")})),D=o.ZP.span(F||(F=(0,r.Z)(["\n  ","\n"])),(function(e){var t=e.theme;return"\n    ".concat(t.utils.general.block,"\n    ").concat(t.utils.typography.size[900],"\n    ").concat(t.utils.typography.family.serif,"\n    ").concat(t.utils.typography.color.white,"\n    ").concat(t.utils.typography.uppercase,"\n  ")})),R={hidden:{opacity:0,transition:{when:"afterChildren",staggerChildren:.8,staggerDirection:-1}},visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.8,staggerDirection:1}}},H={hidden:{y:-10,opacity:0,transition:{duration:.5}},visible:{y:0,opacity:1,transition:{duration:.5}}},I=(0,c.E)(D),U=(0,c.E)(T),V=(0,c.E)(u.T3);function G(){var e=(0,B.O)().destinations;return(0,S.jsx)(l.M,{children:(0,S.jsxs)(V,{initial:"hidden",animate:"visible",exit:"hidden",variants:R,title:"Home",children:[(0,S.jsx)(u.zl,{hash:"#explore"}),(0,S.jsxs)(L,{children:[(0,S.jsxs)("div",{children:[(0,S.jsx)(U,{variants:H,children:"So, you want to travel to"}),(0,S.jsx)(I,{variants:H,children:"Space"}),(0,S.jsx)(c.E.p,{variants:H,children:"Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly out of this world experience!"})]}),(0,S.jsx)("div",{children:(0,S.jsx)(u.AE,{id:"explore",to:"/destinations/".concat(e[0].slug),children:"Explore"})})]}),(0,S.jsx)(M,{})]})})}}}]);
//# sourceMappingURL=366.00379229.chunk.js.map