import{S as e}from"./index-DRaULbu3.js";const t="logDepthVertex",o=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=o);
//# sourceMappingURL=logDepthVertex--ZE9vogz.js.map
