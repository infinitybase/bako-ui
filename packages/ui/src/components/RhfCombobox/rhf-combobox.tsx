import {
  Combobox,
  type ComboboxInputValueChangeDetails,
  type ComboboxOpenChangeDetails,
  type ComboboxValueChangeDetails,
  Field,
  Flex,
  HStack,
  Image,
  Portal,
  Span,
  Spinner,
  useFilter,
  useListCollection,
} from '@chakra-ui/react';
import type React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import {
  type FieldPath,
  type FieldValues,
  useController,
} from 'react-hook-form';
import { floatingStyles } from '../../helpers/floating-styles';
import type {
  RhfComboboxOptions,
  RhfComboboxProps,
} from './rhf-combobox.types';

function ComboboxHiddenInput(props: React.ComponentProps<'input'>) {
  return <input type="hidden" {...props} />;
}

/**
 * @description A combobox component integrated with react-hook-form and Chakra UI.
 *
 * @example
 * const { control } = useForm();
 *
 * <RhfCombobox
 *   name="fruit"
 *   control={control}
 *   label="Select a fruit"
 *   options={[
 *     { label: 'Apple', value: 'apple' },
 *     { label: 'Banana', value: 'banana' },
 *     { label: 'Cherry', value: 'cherry' },
 *   ]}
 *   onlyLowercase
 * />
 */
export function RhfCombobox<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  defaultValue,
  label,
  placeholder,
  error,
  options,
  disabled = false,
  helperText,
  isLoadingOptions = false,
  noOptionsText = 'No items found',
  openOnFocus = true,
  slotProps,
  variant,
  clearTriggerIcon,
  showTrigger = false,
  allowCustomValue = true,
  onlyLowercase = false,
  onInputValueChange,
}: RhfComboboxProps<TFieldValues, TName>) {
  const {
    field: { value, onChange, ref, ...rest },
  } = useController({ defaultValue, control, name });
  const { contains } = useFilter({ sensitivity: 'base' });
  const { collection, filter } = useListCollection({
    initialItems: options,
    filter: contains,
  });

  const normalizeValue = useCallback(
    (val: string) => {
      if (!val) return val;
      return onlyLowercase ? val.toLowerCase() : val;
    },
    [onlyLowercase]
  );

  const [inputValue, setInputValue] = useState(normalizeValue(value || ''));
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) return;

    const normalizedValue = normalizeValue(value);
    if (normalizedValue !== inputValue) {
      setInputValue(normalizedValue || '');
    }
  }, [value, inputValue, isTyping, normalizeValue]);

  const handleValueChange = useCallback(
    (details: ComboboxValueChangeDetails<RhfComboboxOptions>) => {
      const newValue = details.value[0] || '';
      const normalizedValue = normalizeValue(newValue);
      setIsTyping(false);
      onChange(normalizedValue);
      setInputValue(normalizedValue);
      onInputValueChange?.(normalizedValue);
    },
    [onChange, onInputValueChange, normalizeValue]
  );

  const handleInputValueChange = useCallback(
    (details: ComboboxInputValueChangeDetails) => {
      setIsTyping(true);

      const normalizedInputValue = normalizeValue(details.inputValue);
      setInputValue(normalizedInputValue);

      flushSync(() => {
        filter(normalizedInputValue);
      });

      onInputValueChange?.(normalizedInputValue);
      if (allowCustomValue) {
        onChange(normalizedInputValue);
      }

      setTimeout(() => setIsTyping(false), 100);
    },
    [filter, allowCustomValue, onChange, onInputValueChange, normalizeValue]
  );

  const handleOpenChange = useCallback(
    (details: ComboboxOpenChangeDetails) => {
      if (allowCustomValue && details.open && inputValue.trim() !== '') {
        const hasMatchingOptions = collection.items.length > 0;
        if (!hasMatchingOptions) {
          return;
        }
      }
      slotProps?.root?.onOpenChange?.(details);
    },
    [slotProps?.root, allowCustomValue, inputValue, collection.items.length]
  );

  const hasValue = useMemo(() => {
    if (!value) {
      return false;
    }
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    const stringValue = typeof value === 'string' ? value : String(value);
    return !!stringValue || stringValue.length > 0;
  }, [value]);

  const inputProps = label
    ? {
        pt: 2,
        px: 3,
        placeholder: '',
      }
    : {};

  const showOptions = isLoadingOptions || collection.items.length > 0;

  return (
    <Field.Root invalid={!!error}>
      {label && (
        <Field.Label
          color="bg.emphasized"
          htmlFor={rest.name}
          {...slotProps?.label}
          css={floatingStyles({
            hasValue,
            withStartIcon: false,
          })}
        >
          {label}
        </Field.Label>
      )}
      <Combobox.Root
        collection={collection}
        width="full"
        variant={variant}
        inputValue={inputValue}
        value={value ? [normalizeValue(value)] : []}
        borderRadius="lg"
        onValueChange={handleValueChange}
        onOpenChange={handleOpenChange}
        onInputValueChange={handleInputValueChange}
        disabled={disabled}
        openOnClick={openOnFocus && showOptions}
        multiple={false}
        invalid={!!error}
        allowCustomValue={allowCustomValue}
        selectionBehavior="preserve"
        defaultValue={[normalizeValue(defaultValue || '')]}
        placeholder={placeholder}
        {...slotProps?.root}
      >
        <Combobox.Control>
          <Combobox.Input
            color="fg"
            ref={ref}
            {...inputProps}
            {...slotProps?.input}
          />
          <Combobox.IndicatorGroup>
            {clearTriggerIcon ? (
              <Combobox.ClearTrigger hidden={!hasValue} color="unset" asChild>
                {clearTriggerIcon}
              </Combobox.ClearTrigger>
            ) : (
              <Combobox.ClearTrigger hidden={!hasValue} color="unset" />
            )}
            {showTrigger && <Combobox.Trigger />}
          </Combobox.IndicatorGroup>
        </Combobox.Control>

        <ComboboxHiddenInput
          name={rest.name}
          value={normalizeValue(value ?? '')}
        />

        {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
        {error?.message && <Field.ErrorText>{error.message}</Field.ErrorText>}
        <Portal>
          <Combobox.Positioner>
            {(showOptions || !allowCustomValue) && (
              <Combobox.Content>
                {isLoadingOptions && (
                  <HStack p="2">
                    <Spinner size="xs" borderWidth="1px" />
                    <Span>Loading...</Span>
                  </HStack>
                )}

                {!isLoadingOptions &&
                  collection.items.length > 0 &&
                  collection.items.map((item) => (
                    <Combobox.Item item={item} key={item.value}>
                      {!item.imageUrl && item.label}
                      {item.imageUrl && (
                        <Flex gap={2} align="center">
                          <Image
                            src={item.imageUrl}
                            boxSize="5"
                            alt={`${item.label} image`}
                          />
                          <Span>{item.label}</Span>
                        </Flex>
                      )}
                      <Combobox.ItemIndicator />
                    </Combobox.Item>
                  ))}

                {!allowCustomValue &&
                  !isLoadingOptions &&
                  collection.items.length === 0 && (
                    <Combobox.Empty>{noOptionsText}</Combobox.Empty>
                  )}
              </Combobox.Content>
            )}
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </Field.Root>
  );
}
