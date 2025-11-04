import type { Meta, StoryObj } from '@storybook/react';
import { Box, Heading, HStack, Stack, Text, VStack } from 'bako-ui';

interface ColorItem {
  name: string;
  value: string;
  hex?: string;
  description?: string;
}

interface ColorSection {
  title: string;
  colors: ColorItem[];
}

type ColorPalette = Record<string, ColorSection>;

// Dados das cores do design system
const colorPalette: ColorPalette = {
  primary: {
    title: 'Primary Colors',
    colors: [
      {
        name: 'primary.main',
        value: '#FFC010',
        description: 'Main primary color',
      },
      {
        name: 'primary.contrast',
        value: '{colors.gray.600}',
        hex: '#201F1D',
        description: 'Primary contrast',
      },
    ],
  },
  secondary: {
    title: 'Secondary Colors',
    colors: [
      {
        name: 'secondary.main',
        value: '{colors.gray.600}',
        hex: '#201F1D',
        description: 'Main secondary color',
      },
      {
        name: 'secondary.contrast',
        value: '{colors.gray.300}',
        hex: '#868079',
        description: 'Secondary contrast',
      },
    ],
  },
  text: {
    title: 'Text Colors',
    colors: [
      {
        name: 'textPrimary',
        value: '{colors.gray.100}',
        hex: '#CFCCC9',
        description: 'Primary text',
      },
      {
        name: 'textSecondary',
        value: '{colors.gray.300}',
        hex: '#868079',
        description: 'Secondary text',
      },
      { name: 'background', value: '#0D0D0C', description: 'Background color' },
    ],
  },
  gray: {
    title: 'Gray Scale',
    colors: [
      { name: 'gray.50', value: '#F5F5F5', description: 'Lightest gray' },
      { name: 'gray.100', value: '#CFCCC9', description: '' },
      { name: 'gray.200', value: '#AAA6A1', description: '' },
      { name: 'gray.300', value: '#868079', description: '' },
      { name: 'gray.400', value: '#5E5955', description: '' },
      { name: 'gray.500', value: '#353230', description: '' },
      { name: 'gray.550', value: '#2B2927', description: '' },
      { name: 'gray.600', value: '#201F1D', description: '' },
      { name: 'gray.700', value: '#151413', description: 'Darkest gray' },
    ],
  },
  yellow: {
    title: 'Yellow/Orange',
    colors: [
      { name: 'yellow.50', value: '#EED07C', description: 'Lightest yellow' },
      { name: 'yellow.100', value: '#FFC010', description: 'Main yellow' },
      { name: 'yellow.150', value: '#E3AF13', description: '' },
      { name: 'yellow.200', value: '#B68F40', description: '' },
      { name: 'yellow.300', value: '#F16517', description: 'Orange' },
      { name: 'yellow.400', value: '#B24F18', description: '' },
      { name: 'yellow.500', value: '#54372D', description: 'Dark orange' },
    ],
  },
  red: {
    title: 'Red',
    colors: [
      { name: 'red.50', value: '#EF9B8F', description: 'Light red' },
      { name: 'red.100', value: '#F05D48', description: '' },
      { name: 'red.200', value: '#F2290D', description: 'Dark red' },
    ],
  },
  green: {
    title: 'Green',
    colors: [
      { name: 'green.50', value: '#8CEEB3', description: 'Light green' },
      { name: 'green.100', value: '#00F48B', description: 'Main green' },
      { name: 'green.200', value: '#00E55C', description: '' },
      { name: 'green.300', value: '#00943B', description: 'Dark green' },
    ],
  },
  blue: {
    title: 'Blue',
    colors: [
      { name: 'blue.50', value: '#90CDFA', description: 'Light blue' },
      { name: 'blue.100', value: '#008EF4', description: 'Main blue' },
      { name: 'blue.200', value: '#005DA0', description: 'Dark blue' },
    ],
  },
};

interface ColorSwatchProps {
  name: string;
  value: string;
  hex?: string;
  description?: string;
}

const ColorSwatch = ({ name, value, hex, description }: ColorSwatchProps) => {
  const displayValue = hex || value;
  const isLight =
    displayValue.startsWith('#') &&
    Number.parseInt(displayValue.slice(1, 3), 16) > 128;

  return (
    <VStack gap={2} alignItems="stretch" flex="1" minW="200px">
      <Box
        bg={name}
        h="100px"
        borderRadius="md"
        border="1px solid"
        borderColor="gray.600"
        position="relative"
        overflow="hidden"
        _hover={{
          transform: 'scale(1.02)',
          transition: 'transform 0.2s',
        }}
      >
        <Box
          position="absolute"
          bottom="2"
          left="2"
          right="2"
          bg={isLight ? 'blackAlpha.700' : 'whiteAlpha.700'}
          color={isLight ? 'white' : 'black'}
          px="2"
          py="1"
          borderRadius="sm"
          fontSize="xs"
          fontFamily="mono"
        >
          {displayValue}
        </Box>
      </Box>
      <VStack gap={0} alignItems="flex-start">
        <Text fontSize="sm" fontWeight="medium" fontFamily="mono">
          {name}
        </Text>
        {description && (
          <Text fontSize="xs" color="gray.300">
            {description}
          </Text>
        )}
      </VStack>
    </VStack>
  );
};

const meta: Meta = {
  title: 'Bako UI/Foundations/Colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj;

export const AllColors: Story = {
  render: () => (
    <Stack gap={8}>
      <Box>
        <Heading size="2xl" mb={2}>
          Color Palette
        </Heading>
        <Text color="gray.300" fontSize="lg">
          Complete color system used across the Bako UI design system
        </Text>
      </Box>

      {Object.entries(colorPalette).map(([key, section]) => (
        <Box key={key}>
          <Heading size="lg" mb={4}>
            {section.title}
          </Heading>
          <HStack gap={4} flexWrap="wrap" alignItems="stretch">
            {section.colors.map((color) => (
              <ColorSwatch
                key={color.name}
                name={color.name}
                value={color.value}
                hex={color.hex}
                description={color.description}
              />
            ))}
          </HStack>
        </Box>
      ))}
    </Stack>
  ),
};

export const PrimaryColors: Story = {
  render: () => (
    <Stack gap={6}>
      <Box>
        <Heading size="xl" mb={2}>
          {colorPalette.primary.title}
        </Heading>
        <Text color="gray.300">Main brand colors</Text>
      </Box>
      <HStack gap={4} flexWrap="wrap">
        {colorPalette.primary.colors.map((color) => (
          <ColorSwatch
            key={color.name}
            name={color.name}
            value={color.value}
            hex={color.hex}
            description={color.description}
          />
        ))}
      </HStack>
    </Stack>
  ),
};

export const GrayScale: Story = {
  render: () => (
    <Stack gap={6}>
      <Box>
        <Heading size="xl" mb={2}>
          {colorPalette.gray.title}
        </Heading>
        <Text color="gray.300">
          Neutral colors for text, backgrounds and borders
        </Text>
      </Box>
      <HStack gap={4} flexWrap="wrap">
        {colorPalette.gray.colors.map((color) => (
          <ColorSwatch
            key={color.name}
            name={color.name}
            value={color.value}
            description={color.description}
          />
        ))}
      </HStack>
    </Stack>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <Stack gap={8}>
      <Box>
        <Heading size="xl" mb={2}>
          Semantic Colors
        </Heading>
        <Text color="gray.300">Colors with specific meanings</Text>
      </Box>

      {/* Yellow/Orange */}
      <Box>
        <Heading size="lg" mb={4}>
          {colorPalette.yellow.title}
        </Heading>
        <HStack gap={4} flexWrap="wrap">
          {colorPalette.yellow.colors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              value={color.value}
              description={color.description}
            />
          ))}
        </HStack>
      </Box>

      {/* Red */}
      <Box>
        <Heading size="lg" mb={4}>
          {colorPalette.red.title}
        </Heading>
        <Text color="gray.300" fontSize="sm" mb={4}>
          Used for errors, warnings, and destructive actions
        </Text>
        <HStack gap={4} flexWrap="wrap">
          {colorPalette.red.colors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              value={color.value}
              description={color.description}
            />
          ))}
        </HStack>
      </Box>

      {/* Green */}
      <Box>
        <Heading size="lg" mb={4}>
          {colorPalette.green.title}
        </Heading>
        <Text color="gray.300" fontSize="sm" mb={4}>
          Used for success states and positive actions
        </Text>
        <HStack gap={4} flexWrap="wrap">
          {colorPalette.green.colors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              value={color.value}
              description={color.description}
            />
          ))}
        </HStack>
      </Box>

      {/* Blue */}
      <Box>
        <Heading size="lg" mb={4}>
          {colorPalette.blue.title}
        </Heading>
        <Text color="gray.300" fontSize="sm" mb={4}>
          Used for informational states and links
        </Text>
        <HStack gap={4} flexWrap="wrap">
          {colorPalette.blue.colors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              value={color.value}
              description={color.description}
            />
          ))}
        </HStack>
      </Box>
    </Stack>
  ),
};

export const TextColors: Story = {
  render: () => (
    <Stack gap={6}>
      <Box>
        <Heading size="xl" mb={2}>
          {colorPalette.text.title}
        </Heading>
        <Text color="gray.300">Text and background colors</Text>
      </Box>
      <HStack gap={4} flexWrap="wrap">
        {colorPalette.text.colors.map((color) => (
          <ColorSwatch
            key={color.name}
            name={color.name}
            value={color.value}
            hex={color.hex}
            description={color.description}
          />
        ))}
      </HStack>

      {/* Examples */}
      <Box mt={4}>
        <Heading size="md" mb={4}>
          Usage Examples
        </Heading>
        <Stack gap={4}>
          <Box
            bg="background"
            p={6}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.600"
          >
            <Text color="textPrimary" fontSize="lg" mb={2}>
              Primary Text Color
            </Text>
            <Text color="textSecondary" fontSize="sm">
              Secondary text color for less important information
            </Text>
          </Box>
        </Stack>
      </Box>
    </Stack>
  ),
};

export const ColorContrast: Story = {
  render: () => (
    <Stack gap={6}>
      <Box>
        <Heading size="xl" mb={2}>
          Color Contrast Examples
        </Heading>
        <Text color="gray.300">
          Examples of color combinations and their contrast
        </Text>
      </Box>

      <Stack gap={4}>
        <HStack gap={4} flexWrap="wrap">
          <Box bg="primary.main" p={6} borderRadius="md" minW="250px">
            <Text color="primary.contrast" fontWeight="bold" mb={2}>
              Primary on Primary
            </Text>
            <Text color="primary.contrast" fontSize="sm">
              Button text on primary background
            </Text>
          </Box>

          <Box bg="secondary.main" p={6} borderRadius="md" minW="250px">
            <Text color="secondary.contrast" fontWeight="bold" mb={2}>
              Secondary on Secondary
            </Text>
            <Text color="secondary.contrast" fontSize="sm">
              Text on secondary background
            </Text>
          </Box>
        </HStack>

        <HStack gap={4} flexWrap="wrap">
          <Box bg="green.100" p={6} borderRadius="md" minW="250px">
            <Text color="gray.700" fontWeight="bold" mb={2}>
              Success State
            </Text>
            <Text color="gray.700" fontSize="sm">
              Dark text on success background
            </Text>
          </Box>

          <Box bg="red.100" p={6} borderRadius="md" minW="250px">
            <Text color="white" fontWeight="bold" mb={2}>
              Error State
            </Text>
            <Text color="white" fontSize="sm">
              White text on error background
            </Text>
          </Box>

          <Box bg="blue.100" p={6} borderRadius="md" minW="250px">
            <Text color="white" fontWeight="bold" mb={2}>
              Info State
            </Text>
            <Text color="white" fontSize="sm">
              White text on info background
            </Text>
          </Box>
        </HStack>
      </Stack>
    </Stack>
  ),
};
