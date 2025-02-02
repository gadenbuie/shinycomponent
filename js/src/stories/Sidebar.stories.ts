import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { ForgeInputSelect } from "../forge/input-select";
import { Grid } from "../grid";
import { ShinyIcon } from "../icon";
import { OutputPlot } from "../output_plot";
import { PositLogo } from "../posit-logo";
import { ShinyCard } from "../shiny-card";
import { ShinyDashboard } from "../shiny-dashboard";
import { Section } from "../shiny-section";
import { Sidebar } from "../sidebar";

OutputPlot;
Grid;
ShinyDashboard;
Sidebar;
ShinyCard;
ForgeInputSelect;
Section;
PositLogo;
ShinyIcon;
const meta: Meta = {
  component: "shiny-dashboard",
  tags: ["pages"],
  decorators: [
    (story) =>
      html`<div style="width: 100%; height:95vh; outline: 1px solid black; ">
        ${story()}
      </div>`,
  ],
};

export default meta;

type Story = StoryObj;

const bodyContent = html`<shiny-grid nCols="2">
  <shiny-card>
    <shiny-card-header> A plot </shiny-card-header>
    <output-plot> </output-plot>
  </shiny-card>
  <shiny-card>
    <h1>My cool app</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
      Nullam euismod, nisl eget aliquam ultricies, nunc sapien ultricies diam,
      sed aliquam nunc massa nec sapien. Nulla facilisi. Nullam euismod, nisl
      eget aliquam ultricies, nunc sapien ultricies diam, sed aliquam nunc massa
      nec sapien. Nulla facilisi. Nullam euismod, nisl eget aliquam ultricies,
      nunc sapien ultricies diam, sed aliquam nunc massa nec sapien.
    </p>
  </shiny-card>
</shiny-grid>`;

export const plainSidebar: Story = {
  render: () => html`
    <shiny-dashboard>
      <shiny-sidebar>
        <h3>My sidebar</h3>
      </shiny-sidebar>
      ${bodyContent}
    </shiny-dashboard>
  `,
};

export const iconSidebar: Story = {
  render: () => html`
    <shiny-dashboard>
      <shiny-sidebar>
        <shiny-section>
          <posit-logo slot="icon"></posit-logo>
          <h2>My App</h2>
        </shiny-section>
        <shiny-section icon="bi:info-circle">
          <small
            >Below are some inputs that control the app content. Use them and
            explore the birds of Ann Arbor!</small
          >
        </shiny-section>
        <shiny-section icon="bi:sliders2">
          <forge-input-select
            id="species"
            label="Species"
            .choices=${["a", "b", "c"]}
            .selected=${"a"}
          >
          </forge-input-select>
          <small
            >Below are some inputs that control the app content. Use them and
            explore the birds of Ann Arbor!</small
          >
        </shiny-section>
      </shiny-sidebar>
      ${bodyContent}
    </shiny-dashboard>
  `,
};
