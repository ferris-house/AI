import{S as r}from"./index-DRaULbu3.js";import"./helperFunctions-Dk1-zP7x.js";const e="layerPixelShader",o=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);
#if defined(CONVERT_TO_GAMMA)
baseColor.rgb=toGammaSpace(baseColor.rgb);
#elif defined(CONVERT_TO_LINEAR)
baseColor.rgb=toLinearSpace(baseColor.rgb);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
gl_FragColor=baseColor*color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShadersStore[e]||(r.ShadersStore[e]=o);const d={name:e,shader:o};export{d as layerPixelShader};
//# sourceMappingURL=layer.fragment-DHJPVsDF.js.map
