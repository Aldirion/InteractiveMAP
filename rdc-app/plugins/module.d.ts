declare module 'virtual:svg-loader' {
  export const svgLoad: { [regionCode: string]: string };
}

declare module '*.svg' {
  const content: Vue.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
