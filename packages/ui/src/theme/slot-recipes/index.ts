import { accordionSlotRecipe } from './accordion';
import { fieldSlotRecipe } from './field';
import { menuSlotRecipe } from './menu';
import { progessSlotRecipes } from './progress';
import { tabsSlotRecipe } from './tabs';
import { toastSlotRecipe } from './toast';

export const slotRecipes = {
  menu: menuSlotRecipe,
  tabs: tabsSlotRecipe,
  progress: progessSlotRecipes,
  toast: toastSlotRecipe,
  accordion: accordionSlotRecipe,
  field: fieldSlotRecipe,
};
