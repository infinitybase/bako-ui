import {
  Combobox,
  Field,
  HStack,
  Portal,
  Span,
  Spinner,
  useCombobox,
  useFilter,
  useListCollection,
} from '@chakra-ui/react';
import {
  type FieldPath,
  type FieldValues,
  useController,
} from 'react-hook-form';
import type { RhfComboboxProps } from './rhf-combobox.types';

export function RhfCombobox<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  defaultValue,
  label,
  error,
  options,
  disabled = false,
  helperText,
  multiple = false,
  isLoadingOptions = false,
  noOptionsText = 'No items found',
  slotProps,
}: RhfComboboxProps<TFieldValues, TName>) {
  const {
    field: { value, onChange, ref, ...rest },
  } = useController({ defaultValue, control, name });
  const { contains } = useFilter({ sensitivity: 'base' });
  const { collection, filter } = useListCollection({
    initialItems: options,
    filter: contains,
  });

  const combobox = useCombobox({
    collection,
    onInputValueChange(e) {
      filter(e.inputValue);
    },
    onValueChange(selected) {
      if (selected) {
        onChange(selected.value);
      }
    },
    value: [...(value || [])],
    disabled,
    invalid: !!error,
    multiple,
    ...slotProps?.root,
  });

  return (
    <Field.Root invalid={!!error}>
      <Field.Label color="bg.emphasized" {...slotProps?.label}>
        {label}
      </Field.Label>
      <Combobox.RootProvider value={combobox} width="320px">
        <Combobox.Control>
          <Combobox.Input
            color="fg.inverted"
            ref={ref}
            {...rest}
            placeholder=""
          />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
        {error && <Field.ErrorText>{error.message}</Field.ErrorText>}
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>{noOptionsText}</Combobox.Empty>
              {isLoadingOptions && (
                <HStack p="2">
                  <Spinner size="xs" borderWidth="1px" />
                  <Span>Loading...</Span>
                </HStack>
              )}
              {!isLoadingOptions &&
                collection.items.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.RootProvider>
    </Field.Root>
  );
}
