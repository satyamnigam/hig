/* eslint-disable no-console */
import React from "react";
import "hig-vanilla/lib/hig.css";

import { Button, Container, GlobalNav, breakpoints } from "../hig-react";
import "./index.css";

import logo from "./images/bim-logo.png";
import { projects, accounts } from "./fixtures/topNavFixtures";
import { modules, submodules, links } from "./fixtures/sideNavFixtures";

import AvatarSection from "./sections/AvatarSection";
import ButtonSection from "./sections/ButtonSection";
import CheckboxSection from "./sections/CheckboxSection";
import DropdownSection from "./sections/DropdownSection";
import FlyoutSection from "./sections/FlyoutSection";
import GridSection from "./sections/GridSection";
import IconButtonSection from "./sections/IconButtonSection";
import IconSection from "./sections/IconSection";
import ModalSection from "./sections/ModalSection";
import PasswordFieldSection from "./sections/PasswordFieldSection";
import ProgressBarSection from "./sections/ProgressBarSection";
import ProgressRingSection from "./sections/ProgressRingSection";
import RadioButtonSection from "./sections/RadioButtonSection";
import RangeSection from "./sections/RangeSection";
import RichTextSection from "./sections/RichTextSection";
import SelectableTableSection from "./sections/SelectableTableSection";
import TableSection from "./sections/TableSection";
import TabsSection from "./sections/TabsSection";
import TextAreaSection from "./sections/TextAreaSection";
import TextFieldSection from "./sections/TextFieldSection";
import TextLinkSection from "./sections/TextLinkSection";
import TooltipSection from "./sections/TooltipSection";
import TypographySection from "./sections/TypographySection";

const searchOptions = [
  {
    label: "foo",
    value: "foo value"
  },
  {
    label: "foo1",
    value: "foo1 value"
  },
  {
    label: "bar",
    value: "bar value"
  }
];

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModuleId: "1-2-5",
      isHelpOpen: false,
      isSideNavOpen: true,
      filteredSearchOptions: [],
      searchInputValue: ""
    };
  }

  navigate = id => {
    console.log("Go to", id);
    this.setState({ activeModuleId: id });
    if (window.innerWidth <= breakpoints.tablet) {
      this.setState({ isSideNavOpen: false });
    }
  };

  projectClicked = id => {
    console.log("project clicked", id);
  };

  accountClicked = id => {
    console.log("account clicked", id);
  };

  toggleSideNav = () => {
    this.setState({ isSideNavOpen: !this.state.isSideNavOpen });
  };

  handleModuleClick = id => {
    console.log(`module click ${id}`);
  };

  handleSubmoduleClick = id => {
    console.log(`submodule click ${id}`);
  };

  openHelp = () => {
    this.setState({ isHelpOpen: true });
  };

  closeHelp = () => {
    this.setState({ isHelpOpen: false });
  };

  onSearchInput = input => {
    this.setState({ searchInputValue: input.value });
    this.filterSearchInput(input.value);
  };

  filterSearchInput = value => {
    const filteredSearchOptions =
      value.length > 0
        ? searchOptions.filter(option =>
            option.label.toLowerCase().startsWith(value.toLowerCase())
          )
        : [];

    this.setState({ filteredSearchOptions });
  };

  render() {
    const helpProps = {
      onClick: this.openHelp,
      onClickOutside: this.closeHelp,
      groups: [
        {
          options: [
            {
              name: "group 1, option 1",
              onClick() {
                console.log("g1 o1 clicked");
              }
            },
            {
              name: "group 1, option 2",
              onClick() {
                console.log("g1 o2 clicked");
              }
            }
          ]
        },
        {
          options: [
            {
              name: "group 2, option 1",
              onClick() {
                console.log("g2 o1 clicked");
              }
            },
            {
              name: "group 2, option 2",
              onClick() {
                console.log("g2 o2 clicked");
              }
            }
          ]
        }
      ],
      open: this.state.isHelpOpen,
      title: "Help!"
    };

    const topNavProps = {
      accounts,
      projects,
      accountTitle: "Accounts",
      projectTitle: "Projects",
      onAccountClick: this.accountClicked,
      onProjectClick: this.projectClicked,
      onSearchInput: this.onSearchInput,
      filteredSearchOptions: this.state.filteredSearchOptions,
      searchInputValue: this.state.searchInputValue,
      help: helpProps,
      logo,
      onLogoClick() {
        console.log("Logo clicked");
      }
    };

    const sideNavProps = {
      superHeaderLabel: "HIG",
      headerLabel: "Playground",
      headerLink: "http://apple.com",
      links,  
      onLogoClick: event => {
        event.preventDefault();
        console.log("Logo clicked");
      },
      searchable: true,
      slot: (
        <div>
          <Button
            title="Designer Toolkit"
            link="https://github.com/Autodesk/hig"
          />
          <p />
          <Button
            title="Git Repository"
            type="secondary"
            link="https://github.com/Autodesk/hig"
            target="_blank"
          />
        </div>
      ),
      onModuleClick: this.handleModuleClick,
      onSubmoduleClick: this.handleSubmoduleClick
    };

    return (
      <GlobalNav
        modules={modules}
        onModuleChange={this.navigate}
        sideNav={sideNavProps}
        submodules={submodules}
        topNav={topNavProps}
        activeModuleId={this.state.activeModuleId}
        showSubNav
        isSideNavOpen={this.state.isSideNavOpen}
        onHamburgerClick={this.toggleSideNav}
      >
        <Container>
          <ProgressBarSection />
          <ProgressRingSection />
          <TabsSection />
          <ButtonSection />
          <IconButtonSection />
          <CheckboxSection />
          <PasswordFieldSection />
          <RadioButtonSection />
          <RangeSection />
          <TextFieldSection />
          <TextAreaSection />
          <ModalSection />
          <DropdownSection />
          <TypographySection />
          <TableSection />
          <TextLinkSection />
          <FlyoutSection />
          <TooltipSection />
          <RichTextSection />
          <AvatarSection />
          <GridSection />
          <IconSection />
          <SelectableTableSection />
        </Container>
      </GlobalNav>
    );
  }
}

export default Playground;
