/// <reference types="vite/client" />
import MdUI2, { CheckboxState } from "@refina/mdui2";
import "@refina/mdui2/styles.css";
import { Content, app, bySelf, d, view } from "refina";

const componentView = view((_, name: string, inner: Content) => {
  _._div({}, _ => {
    _.$css`margin-bottom:8px`;
    _._h3({}, name);
    _.embed(inner);
  });
});

let darkMode = false;
let count = 0;
let status = d(false);
let status2 = d<CheckboxState>(undefined);
const options = ["Option 1", "Option 2", "Option 3"] as const;
let selected = d<(typeof options)[number]>(options[0]);
let sliderValue1 = d(40);
let sliderValue2 = d(60);
let input = d("Hello");

app.use(MdUI2)(_ => {
  _.useMdTheme(darkMode ? "dark" : "light");

  _.$css`z-index:1999`;
  _.mdTopAppBar(_ => {
    // _.$css`font-size: 2em; margin-right: 24px`;
    // _._span({}, "MDUI2 Test");
    _.mdTopAppBarTitle(_ => {
      _.t("MDUI2 Test")
      _._a({
        onclick: () => {
          console.log("123")
        }
      }, "123")
    })
    _._div({}, _ => {
      _._span({}, "Status: ");
      _.$css`font-family:Consolas`;
      _._div(
        {},
        `${darkMode} ${count} ${status.value} ${selected.value} ${sliderValue1.value} ${sliderValue2.value}`,
      );
    });
    // _.$css`flex-grow:1`;
    _._div();
    _.mdIconButton(darkMode ? "dark_mode" : "light_mode") &&
      (darkMode = !darkMode) && ((()=>{console.log("123")})())
  });

  _.mdLayoutMain(_ => {
    _.embed(componentView, "Avatar", _ => {
      _.mdAvatar("https://via.placeholder.com/80x80?text=A");
      _.mdIconAvatar("person");
    });
    _.embed(componentView, "Badge", _ => {
      _.mdBadge();
      _.t` `;
      _.mdBadge("99+");
    });
    _.embed(componentView, "Button", _ => {
      _.mdButton("Button") && count++;
      _.mdButton("Button", true) && count++;
      _.mdTonalButton("Tonal") && count++;
      _.mdOutlinedButton("Outlined") && count++;
      _.mdTextButton("Text") && count++;
    });
    _.embed(componentView, "Button Icon", _ => {
      _.mdIconButton("add") && count++;
      _.mdIconButton("add", true) && count++;
      _.mdFilledIconButton("add") && count++;
      _.mdOutlinedIconButton("add") && count++;
      _.mdTonalIconButton("add") && count++;
    });
    _.embed(componentView, "Checkbox", _ => {
      _.mdCheckbox(status, "Checkbox");
      _.mdCheckbox(status, "Checkbox", true);
      _.mdCheckbox(status2, "Checkbox");
    });
    _.embed(componentView, "Chip", _ => {
      _.mdChip("Student");
      _.mdChip("Student", true);
      _.$prop("icon", "person") &&
        _.$prop("endIcon", "arrow_forward") &&
        _.mdChip("Student", true);
      _.mdSelectableChip(status, "Student");
      _.mdDeletableChip("Student") && alert("Deleted!");
      _.$prop("deleteIcon", "backspace") &&
        _.mdDeletableChip("Student", true) &&
        alert("Deleted!");
    });
    _.embed(componentView, "Circlular Progress", _ => {
      _.mdCircularProgress();
      _.mdCircularProgress(0.8);
    });
    _.embed(componentView, "Dialog", _ => {
      _.mdDialog(
        (_, open) => _.mdButton("Open Dialog") && open(),
        "Title",
        "Content",
        (_, close) => {
          _.mdButton("YES") && close();
          _.mdButton("NO") && close();
        },
      );
    });
    _.embed(componentView, "Divider", _ => {
      _.mdDivider();
      _.$css`height: 40px; margin-left: 30px`;
      _._div({}, _ => _.mdVerticalDivider());
    });
    _.embed(componentView, "Fab", _ => {
      _.mdFab("add") && count++;
      _.mdFab("add", true) && count++;
      _.mdFab("add", false, "Plus 1") && count++;
    });
    _.embed(componentView, "Icon", _ => {
      _.mdIcon("search");
      _.mdIcon("delete");
    });
    _.embed(componentView, "Linear Progress", _ => {
      _.mdLinearProgress();
      _.mdLinearProgress(sliderValue1.value / 100);
    });
    _.embed(componentView, "List", _ =>
      _.mdList(["Item 1", "Item 2", "Item 3"], bySelf, item => {
        _.t(item);
      }),
    );
    _.embed(componentView, "Prose", _ => {
      _.$css`border:2px black solid;border-radius:5px;padding:10px;`;
      _._div({}, _ =>
        _.mdProse(_ => {
          _._h1({}, "Title");
          _._p({}, "Content");
          _._p({}, "Content");
          _._p({}, "Content");
          _._p({}, "Content");
        }),
      );
    });
    _.embed(componentView, "Radio Group", _ => {
      _.mdRadioGroup(selected, options);
      _._br();
      _.mdRadioGroup(selected, options, [false, true], {
        "Option 3": _ => _.mdAvatar("https://via.placeholder.com/80x80?text=3"),
      });
      _._br();
      _.mdRadioGroup(selected, options, true);
    });
    _.embed(componentView, "Range Slider", _ => {
      _.mdRangeSlider(sliderValue1, sliderValue2);
      _.mdRangeSlider(sliderValue1, sliderValue2, false, 10);
      _.mdRangeSlider(sliderValue1, sliderValue2, true);
    });
    _.embed(componentView, "Segmented Button", _ => {
      _.mdSegmentedButton(["+1", "+2", "+3"]) && (count += _.$ev + 1);
      _._br();
      _.mdSegmentedButton(["+1", "+2", "+3"], true) && (count += _.$ev + 1);
      _._br();
      _.mdSegmentedButton(["+1", "+2", "+3"], [true]) && (count += _.$ev + 1);
      _._br();
      _.$props({
        icons: ["add", "add", "add"],
        endIcons: ["star_border", , "star"],
      }) &&
        _.mdSegmentedButton([1, 2, 3]) &&
        (count += _.$ev + 1);
    });
    _.embed(componentView, "Select", _ => {
      _.mdSelect(selected, options);
      _.mdSelect(selected, options, [false, true], {
        "Option 3": _ => _.mdAvatar("https://via.placeholder.com/80x80?text=3"),
      });
      _.mdSelect(selected, options, true);
      _.mdOutlinedSelect(selected, options);
    });
    _.embed(componentView, "Slider", _ => {
      _.mdSlider(sliderValue2);
      _.mdSlider(sliderValue2, false, 10);
      _.mdSlider(sliderValue2, true);
    });
    _.embed(componentView, "Switch", _ => {
      _.mdSwitch(status);
      _.mdSwitch(status, true);
    });
    _.embed(componentView, "Table", _ => {
      const data = [
        { name: "Alice", age: 20 },
        { name: "Bob", age: 21 },
        { name: "Carol", age: 22 },
      ];
      _.mdTable(
        data,
        [_ => _.mdIcon("person"), "Age", "Action"],
        "name",
        item => {
          _.mdTableCell(item.name);
          _.mdTableCell(item.age);
          _.mdTableCell(_ => _.mdButton("Open") && alert(item.name));
        },
      );
    });
    _.embed(componentView, "Tabs", _ => {
      _.mdTabs(
        "Tab 1",
        _ => _._p({}, "Content 1"),
        "Tab 2",
        _ => _._p({}, "Content 2"),
        "Tab 3",
        _ => _._p({}, "Content 3"),
      );
    });
    _.embed(componentView, "Text Field", _ => {
      _.mdTextField(input);
      _.mdTextField(input, "Message");
      _.mdTextField(input, "Message", true);
      _.mdOutlinedTextField(input, "Message");
      _.mdPasswordInput(input, "Password");
      _.mdOutlinedPasswordInput(input, "Password");
      _.mdTextarea(input, "Message (3 rows)");
      _.$props({ rows: [2, 5] }) && _.mdTextarea(input, "Message (2-5 rows)");
    });
    _.embed(componentView, "Tooltip", _ => {
      _.mdTooltip("Message", _ => _.mdButton("Hover me!")) &&
        console.log(_.$ev);
    });
    _.embed(componentView, "Layouts", _ => {
      const exampleWindowStyle =
        "z-index:0;height:400px;border:1px black solid;margin:20px;padding:10px;border-radius:5px;";
      _.$css(exampleWindowStyle);
      _.mdLayout(_ => {
        _.mdTopAppBar(_ => {
          _.mdIconButton("menu");
          _.mdTopAppBarTitle("Title");
        });
        const currentPage = _.mdNavBar([
          ["Home", "home"],
          ["About", "info"],
        ]);
        _.mdLayoutMain(_ => {
          _.forRange(50, index => _._p({}, `${currentPage} content ${index}`));
        });
      });
      _.$css(exampleWindowStyle);
      _.mdLayout(_ => {
        _.mdBottomAppBar("BOTTOM APP BAR");
        const currentPage = _.mdNavRail(
          [
            ["Home", "home"],
            ["About", "info"],
          ],
          {},
          _ => _.mdFab("edit"),
        );
        _.mdLayoutMain(_ => {
          _.forRange(50, index => _._p({}, `${currentPage} content ${index}`));
        });
      });
      _.$css(exampleWindowStyle);
      _.mdLayout(_ => {
        _.mdLayoutMain(_ => {
          _._h1({}, "Layout Main");
          _.$prop("contained", true);
          _.mdNavDrawer(
            (_, open) => _.mdButton("open drawer") && open(),
            (_, close) => _.mdButton("close drawer") && close(),
            true,
          );
        });
      });
    });
  });
});
