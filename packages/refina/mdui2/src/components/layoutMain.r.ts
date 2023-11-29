import { ComponentContext, Content, D, OutputComponent } from "refina";
import MdUI2 from "../plugin";

@MdUI2.outputComponent("mdLayoutMain")
export class MdLayoutMain extends OutputComponent {
  main(_: ComponentContext, inner: D<Content>): void {
    _._mdui_layout_main({}, inner);
  }
}

declare module "refina" {
  interface OutputComponents {
    mdLayoutMain: MdLayoutMain;
  }
}
