// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project dd3643da7a2cf8c2 "Rat Rock Repair", do not edit manually */
"use client";
import {
  stdin_default
} from "./chunks/chunk-B3CLIAOZ.js";
import "./chunks/chunk-33A4IJ3T.js";

// virtual:faq-accordion
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/uOSJvkBiwYJpSVhWwagN/uUpz1tukFUGptFLz7SJe/W4ZDmKRUm.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ComponentViewportProvider, cx, getFonts, getPropertyControls, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var FAQRowFonts = getFonts(stdin_default);
var FAQRowControls = getPropertyControls(stdin_default);
var serializationHash = "framer-ARB09";
var variantClassNames = { PdL3V6GM2: "framer-v-1ii19i9" };
var transition1 = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableEnumMap = { "Closed Phone": "aPfEEZBD6", "Open Phone": "kg6kYD_X_", Closed: "Pw1jujhvm", Open: "jIVnKxjVD" };
var getProps = ({ height, id, variant1, width, ...props }) => {
  var _humanReadableEnumMap_variant1, _ref, _ref1;
  return { ...props, UhOI3eDhc: (_ref1 = (_ref = (_humanReadableEnumMap_variant1 = humanReadableEnumMap[variant1]) !== null && _humanReadableEnumMap_variant1 !== void 0 ? _humanReadableEnumMap_variant1 : variant1) !== null && _ref !== void 0 ? _ref : props.UhOI3eDhc) !== null && _ref1 !== void 0 ? _ref1 : "Pw1jujhvm" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, UhOI3eDhc, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "PdL3V6GM2", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1ii19i9", className, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "PdL3V6GM2", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, children: [/* @__PURE__ */ _jsx(ComponentViewportProvider, { height: 112, width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || "100vw", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 0, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1b9g6d4-container", layoutDependency, layoutId: "kbB2wSm70-container", children: /* @__PURE__ */ _jsx(stdin_default, { height: "100%", id: "kbB2wSm70", layoutId: "kbB2wSm70", style: { width: "100%" }, T8rQFvSBR: "We specialize in various styles of clothing photography, including lookbooks, e-commerce shots, editorial spreads, and lifestyle imagery. Our goal is to capture your brand's unique identity through tailored visual storytelling.", variant: UhOI3eDhc, W88zB8mIG: "What types of shoes do you resole?", width: "100%" }) }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-11g5rom", "data-framer-name": "Line", layoutDependency, layoutId: "cuIxxKIIT", style: { backgroundColor: "var(--token-e3adf8a5-d602-482e-a329-8ae6880cbe55, rgba(255, 255, 255, 0.5))" } }), /* @__PURE__ */ _jsx(ComponentViewportProvider, { height: 112, width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || "100vw", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 113, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-c2xbin-container", layoutDependency, layoutId: "hwNzusZFM-container", children: /* @__PURE__ */ _jsx(stdin_default, { height: "100%", id: "hwNzusZFM", layoutId: "hwNzusZFM", style: { width: "100%" }, T8rQFvSBR: "The timeline can vary depending on the complexity of the shoot and your specific needs. Generally, from consultation to delivery, you can expect the process to take about 2-4 weeks. We always strive to accommodate your deadlines.", variant: UhOI3eDhc, W88zB8mIG: "How long does the process take?", width: "100%" }) }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-9lyb7i", "data-framer-name": "Line", layoutDependency, layoutId: "kCwQsZyij", style: { backgroundColor: "var(--token-e3adf8a5-d602-482e-a329-8ae6880cbe55, rgba(255, 255, 255, 0.5))" } }), /* @__PURE__ */ _jsx(ComponentViewportProvider, { height: 112, width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || "100vw", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 226, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-z0xapu-container", layoutDependency, layoutId: "unxASyVQh-container", children: /* @__PURE__ */ _jsx(stdin_default, { height: "100%", id: "unxASyVQh", layoutId: "unxASyVQh", style: { width: "100%" }, T8rQFvSBR: "Yes! We can assist with styling if needed, collaborating with you to ensure that each outfit is presented in a way that aligns with your brand's vision and aesthetic.", variant: UhOI3eDhc, W88zB8mIG: "Do you provide rubber for the shoes?", width: "100%" }) }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-yxp614", "data-framer-name": "Line", layoutDependency, layoutId: "xOTaegCmt", style: { backgroundColor: "var(--token-e3adf8a5-d602-482e-a329-8ae6880cbe55, rgba(255, 255, 255, 0.5))" } }), /* @__PURE__ */ _jsx(ComponentViewportProvider, { height: 112, width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || "100vw", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 339, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-806b3f-container", layoutDependency, layoutId: "j2r9sKHWT-container", children: /* @__PURE__ */ _jsx(stdin_default, { height: "100%", id: "j2r9sKHWT", layoutId: "j2r9sKHWT", style: { width: "100%" }, T8rQFvSBR: "Our pricing is tailored to each project based on its scope, complexity, and specific requirements. We\u2019ll discuss your needs during the consultation and provide a customized quote that fits your budget.", variant: UhOI3eDhc, W88zB8mIG: "What is your pricing structure?", width: "100%" }) }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-3vd7nc", "data-framer-name": "Line", layoutDependency, layoutId: "ZIpca1TWp", style: { backgroundColor: "var(--token-e3adf8a5-d602-482e-a329-8ae6880cbe55, rgba(255, 255, 255, 0.5))" } }), /* @__PURE__ */ _jsx(ComponentViewportProvider, { height: 112, width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || "100vw", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 452, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1pde4ok-container", layoutDependency, layoutId: "JPQBCAC5L-container", children: /* @__PURE__ */ _jsx(stdin_default, { height: "100%", id: "JPQBCAC5L", layoutId: "JPQBCAC5L", style: { width: "100%" }, T8rQFvSBR: "To ensure a smooth and successful shoot, we recommend preparing a selection of outfits, props, and any specific ideas you have in mind. We'll discuss these details during the planning phase to align everything with your brand\u2019s vision and maximize the impact of the shoot.", variant: UhOI3eDhc, W88zB8mIG: "What should we prepare our shoes for the process?", width: "100%" }) }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-8zl24n", "data-framer-name": "Line", layoutDependency, layoutId: "Y0h85567N", style: { backgroundColor: "var(--token-e3adf8a5-d602-482e-a329-8ae6880cbe55, rgba(255, 255, 255, 0.5))" } })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ARB09.framer-f5netq, .framer-ARB09 .framer-f5netq { display: block; }", ".framer-ARB09.framer-1ii19i9 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1000px; }", ".framer-ARB09 .framer-1b9g6d4-container, .framer-ARB09 .framer-c2xbin-container, .framer-ARB09 .framer-z0xapu-container, .framer-ARB09 .framer-806b3f-container, .framer-ARB09 .framer-1pde4ok-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-ARB09 .framer-11g5rom, .framer-ARB09 .framer-9lyb7i, .framer-ARB09 .framer-yxp614, .framer-ARB09 .framer-3vd7nc, .framer-ARB09 .framer-8zl24n { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ARB09.framer-1ii19i9 { gap: 0px; } .framer-ARB09.framer-1ii19i9 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-ARB09.framer-1ii19i9 > :first-child { margin-top: 0px; } .framer-ARB09.framer-1ii19i9 > :last-child { margin-bottom: 0px; } }"];
var FramerW4ZDmKRUm = withCSS(Component, css, "framer-ARB09");
var stdin_default2 = FramerW4ZDmKRUm;
FramerW4ZDmKRUm.displayName = "FAQ Accordion";
FramerW4ZDmKRUm.defaultProps = { height: 325, width: 1e3 };
addPropertyControls(FramerW4ZDmKRUm, { UhOI3eDhc: (FAQRowControls === null || FAQRowControls === void 0 ? void 0 : FAQRowControls["variant"]) && { ...FAQRowControls["variant"], defaultValue: "Pw1jujhvm", description: void 0, hidden: void 0, title: "Variant" } });
addFonts(FramerW4ZDmKRUm, [{ explicitInter: true, fonts: [] }, ...FAQRowFonts], { supportsExplicitInterCodegen: true });

// virtual:faq-accordion
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
stdin_default2.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "JFZXH7wHO": { "path": "/404" }, "augiA20Il": { "path": "/" }, "cIqoufw3A": { "path": "/contact" }, "e2Gb2xYfO": { "path": "/about" }, "nu97q5qMo": { "path": "/works/:slug" }, "tK1oCa7HQ": { "path": "/works" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default2,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "dd3643da7a2cf8c2417b8db6b619436845838413ddb75a2bcf6e6a2878e87800",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "JFZXH7wHO": {
          "path": "/404"
        },
        "augiA20Il": {
          "path": "/"
        },
        "cIqoufw3A": {
          "path": "/contact"
        },
        "e2Gb2xYfO": {
          "path": "/about"
        },
        "nu97q5qMo": {
          "path": "/works/:slug"
        },
        "tK1oCa7HQ": {
          "path": "/works"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default2, { ...rest }),
      framerSiteId: "dd3643da7a2cf8c2417b8db6b619436845838413ddb75a2bcf6e6a2878e87800",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default2);
export {
  ComponentWithRoot as default
};
