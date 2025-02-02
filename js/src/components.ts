import { Collapsible } from "./collapsible";
import { ColorPicker } from "./color-picker";
import { ShinyDataGridOutput } from "./datagrid";
import { DesignPreview } from "./design-preview";
import { Footer } from "./footer";
import { GeneralOutput } from "./general-output";
import { Grid } from "./grid";
import { GridItem } from "./grid-item";
import { ShinyIcon } from "./icon";
import { OutputPlot } from "./output_plot";
import { PositLogo } from "./posit-logo";
import { ShinyAvatar } from "./shiny-avatar";
import { ShinyCard } from "./shiny-card";
import { ShinyDashboard } from "./shiny-dashboard";
import { Section } from "./shiny-section";
import { Sidebar } from "./sidebar";
import { SimpleNumberInput } from "./simple-number-input";
import { SimpleNumberOutput } from "./simple-number-output";
import { Tab } from "./tab";
import { ThemeChooser } from "./theme-chooser";

// Prevent esbuild from tree-shaking these components away.
Collapsible;
ColorPicker;
ShinyDataGridOutput;
DesignPreview;
Footer;
GeneralOutput;
Sidebar;
SimpleNumberInput;
SimpleNumberOutput;
Tab;
ShinyDashboard;
ThemeChooser;
Grid;
GridItem;
PositLogo;
ShinyCard;
Section;
ShinyIcon;
ShinyAvatar;
OutputPlot;
