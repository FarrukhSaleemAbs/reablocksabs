import {
  FC,
  useState,
  PropsWithChildren,
  useEffect,
  KeyboardEvent,
  Children,
  useRef
} from 'react';
import { CommandPaletteInput } from './CommandPaletteInput';
import { DATA_ATTRIBUTE_INDEX, useFlattenedTree } from './useFlattenedTree';
import { List, ListItem } from '../../layout/List';
import { Card } from '../../layout/Card';
import { MotionGroup } from '../../layout/Motion';
import css from './CommandPalette.module.css';

export interface CommandPaletteProps extends PropsWithChildren {
  /**
   * Search input value.
   */
  search?: string;

  /**
   * Placeholder text.
   */
  placeholder?: string;

  /**
   * Selected Index.
   */
  selected?: number;

  /**
   * Autofocus or not.
   */
  autoFocus?: boolean;

  /**
   * Empty message to show when there are no items.
   */
  emptyMessage?: string;

  /**
   * When the search input value changes.
   */
  onSearchChange?: (value: string) => void;

  /**
   * When a user picks something from the list.
   */
  onSelectedIndexChange?: (value: number) => void;
}

export const CommandPalette: FC<CommandPaletteProps> = ({
  search,
  placeholder,
  children,
  autoFocus,
  emptyMessage,
  onSelectedIndexChange,
  onSearchChange
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [filterText, setFilterText] = useState<string>(search);
  const { flattenedTree, itemsRef } = useFlattenedTree(
    children,
    selectedIndex,
    onSelectedIndexChange
  );
  const hasChildren = Children.count(children) > 0;
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (event.key === 'ArrowDown') {
      setSelectedIndex(prev => Math.min(prev + 1, itemsRef.current.length - 1));
    } else if (event.key === 'Enter' && itemsRef.current[selectedIndex]) {
      onSelectedIndexChange?.(selectedIndex);
      setSelectedIndex(-1);
    }
  };

  useEffect(() => {
    if (selectedIndex > -1) {
      elementRef.current
        .querySelector(`[${DATA_ATTRIBUTE_INDEX}="${selectedIndex}"]`)
        ?.scrollIntoView();
    }
  }, [selectedIndex, flattenedTree]);

  return (
    <Card className={css.card} disablePadding ref={elementRef}>
      <CommandPaletteInput
        value={filterText}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={val => {
          setFilterText(val);
          onSearchChange?.(val);
        }}
        onKeyPress={handleKeyDown}
        onBlur={() => setSelectedIndex(-1)}
      />
      {hasChildren && (
        <Card className={css.innerCard} disablePadding>
          <MotionGroup>
            <List>{flattenedTree}</List>
          </MotionGroup>
        </Card>
      )}
      {!hasChildren && emptyMessage && (
        <List>
          <ListItem>{emptyMessage}</ListItem>
        </List>
      )}
    </Card>
  );
};

CommandPalette.defaultProps = {
  autoFocus: true
};