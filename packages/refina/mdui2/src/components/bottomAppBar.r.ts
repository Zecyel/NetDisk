import { ComponentContext, Content, D, OutputComponent } from "refina";
import MdUI2 from "../plugin";

@MdUI2.outputComponent("mdBottomAppBar")
export class MdBottomAppBar extends OutputComponent {
  main(_: ComponentContext, inner: D<Content>): void {
    _._mdui_bottom_app_bar({}, inner);
  }
}

declare module "refina" {
  interface OutputComponents {
    mdBottomAppBar: MdBottomAppBar;
  }
}
