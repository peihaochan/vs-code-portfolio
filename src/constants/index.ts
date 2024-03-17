import { ReactComponent as FileIcon } from "../images/icons/files.svg";
import { ReactComponent as GithubIcon } from "../images/icons/github.svg";
import { ReactComponent as MailIcon } from "../images/icons/mail.svg";
import { ReactComponent as HTMLIcon } from "../images/icons/html.svg";
import { ReactComponent as TSIcon } from "../images/icons/typescript.svg";
import { ReactComponent as PersonIcon } from "../images/icons/person.svg";
import { ReactComponent as SetingIcon } from "../images/icons/settings.svg";

export interface ComponentItem {
  component: React.ComponentType<any>;
  id: string;
  hoverInfo: string;
  icon: React.ComponentType<any>;
  extension: string;
}

export interface SocialItem {
  key: string;
  text: string;
  link: string;
}

export const SOCIALS = {
  WEBSITE: "Website",
  LINKEDIN: "LinkedIn",
  GITHUB: "GitHub",
  EMAIL: "Email",
};

export const socialArr: SocialItem[] = [
  {
    key: SOCIALS.WEBSITE,
    text: "www.peichan.dev",
    link: "https://www.peichan.dev",
  },
  {
    key: SOCIALS.LINKEDIN,
    text: "pei-hao-chan",
    link: "https://www.linkedin.com/in/pei-hao-chan/",
  },
  {
    key: SOCIALS.GITHUB,
    text: "peihaochan",
    link: "https://github.com/peihaochan",
  },
  {
    key: SOCIALS.EMAIL,
    text: "peichandev@gmail.comv",
    link: "peichandev@gmail.com",
  },
];

export const COMPONENT_OBJECT = {
  FILE: "file",
  GITHUB: "github",
  MAIL: "mail",
  PERSON: "person",
  SETTING: "setting",
};

export const topComponent: ComponentItem[] = [
  {
    component: FileIcon,
    id: COMPONENT_OBJECT.FILE,
    hoverInfo: "Go Back to Home Page",
    icon: HTMLIcon,
    extension: ".html",
  },
  {
    component: GithubIcon,
    id: COMPONENT_OBJECT.GITHUB,
    hoverInfo: "Check out my skillset",
    icon: HTMLIcon,
    extension: ".html",
  },
  {
    component: MailIcon,
    id: COMPONENT_OBJECT.MAIL,
    hoverInfo: "Show my Socials",
    icon: TSIcon,
    extension: ".ts",
  },
];

export const bottomComponent: ComponentItem[] = [
  {
    component: PersonIcon,
    id: COMPONENT_OBJECT.PERSON,
    hoverInfo: "A little about myself",
    icon: HTMLIcon,
    extension: ".html",
  },
  {
    component: SetingIcon,
    id: COMPONENT_OBJECT.SETTING,
    hoverInfo: "Check out my skillset",
    icon: HTMLIcon,
    extension: ".html",
  },
];
