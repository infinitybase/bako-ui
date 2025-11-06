import { accordionSlotRecipe } from './accordion';
import { cardSlotRecipe } from './card';
import { checkboxSlotRecipe } from './checkbox';
import { comboboxSlotRecipe } from './combobox';
import { fieldSlotRecipe } from './field';
import { menuSlotRecipe } from './menu';
import { popoverSlotRecipe } from './popover';
import { progessSlotRecipes } from './progress';
import { selectSlotRecipe } from './select';
import { tabsSlotRecipe } from './tabs';
import { toastSlotRecipe } from './toast';
import { tooltipSlotRecipe } from './tooltip';

export const slotRecipes = {
  card: cardSlotRecipe,
  menu: menuSlotRecipe,
  tabs: tabsSlotRecipe,
  progress: progessSlotRecipes,
  toast: toastSlotRecipe,
  accordion: accordionSlotRecipe,
  field: fieldSlotRecipe,
  select: selectSlotRecipe,
  combobox: comboboxSlotRecipe,
  checkbox: checkboxSlotRecipe,
  tooltip: tooltipSlotRecipe,
  popover: popoverSlotRecipe,
};
