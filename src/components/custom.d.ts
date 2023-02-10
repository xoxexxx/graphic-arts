declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>> | any;
    export default content;
  }

  declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }