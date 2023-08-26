declare module "cloudinary-react" {
  import { Component } from "react";

  interface ImageProps {
    publicId: string;
    width?: string | number;
    height?: string | number;
    crop?: string;
    gravity?: string;
    fetchFormat?: string;
    alt?: string;
    className?: string;
    secure?: boolean;
    responsive?: boolean | "auto";
  }

  export class Image extends Component<ImageProps> {}

  export interface CloudinaryContextProps {
    cloudName: string;
  }

  export class CloudinaryContext extends Component<CloudinaryContextProps> {}
}
