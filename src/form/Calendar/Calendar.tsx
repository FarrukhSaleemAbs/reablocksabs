import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Button } from '../../elements/Button';
import {
  add,
  addYears,
  endOfDecade,
  getMonth,
  getYear,
  isSameDay,
  max as maxDate,
  min as minDate,
  setMonth,
  setYear,
  startOfDecade,
  sub,
  subYears
} from 'date-fns';
import { DateFormat } from '../../data/DateFormat';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { SmallHeading } from '../../typography';

import css from './Calendar.module.css';
import classNames from 'classnames';

export type CalendarViewType = 'days' | 'months' | 'years';

export interface CalendarProps {
  /**
   * The selected date(s) for the calendar.
   */
  value?: Date | [Date, Date];

  /**
   * The minimum selectable date for the calendar.
   */
  min?: Date;

  /**
   * The maximum selectable date for the calendar.
   * Can also be set to 'now' to use the current date.
   */
  max?: Date | 'now';

  /**
   * Whether the calendar is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the calendar is a range picker.
   */
  isRange?: boolean;

  /**
   * Whether the calendar show two months.
   */
  isMultiMonths?: boolean;

  /**
   * The text or icon to use for next.
   */
  nextArrow?: React.ReactNode | string;

  /**
   * The text or icon to use for previous.
   */
  previousArrow?: React.ReactNode | string;

  /**
   * The date format to use for the calendar. Defaults 'MMMM yyyy'.
   */
  dateFormat?: string;

  /**
   * To style calender selected range.
   */
  selectedRangeColor?: string;

  /**
   * To style calender selected range border.
   */
  selectedRangerBorderColor?: string;

  /**
   * Whether to animate the calendar.
   */
  animated?: boolean;

  /**
   * A callback function that is called when the selected date(s) change.
   */
  onChange?: (value: Date | [Date, Date]) => void;

  /**
   * A callback function that is called when the calendar view changes.
   */
  onViewChange?: (view: CalendarViewType) => void;
}

export const Calendar: FC<CalendarProps> = ({
  min,
  max,
  value,
  disabled,
  isRange,
  previousArrow,
  nextArrow,
  dateFormat,
  animated,
  onChange,
  onViewChange,
  isMultiMonths = false,
  selectedRangeColor,
  selectedRangerBorderColor
}) => {
  const date = useMemo(
    () => (Array.isArray(value) ? value?.[0] : value) ?? new Date(),
    [value]
  );
  const rangeStart = useMemo(
    () => value?.[0] ?? date ?? new Date(),
    [date, value]
  );
  const rangeEnd = useMemo(
    () => value?.[1] ?? date ?? new Date(),
    [date, value]
  );

  const [viewValue, setViewValue] = useState<Date>(date || new Date());
  const [monthValue, setMonthValue] = useState<number>(getMonth(date));
  const [yearValue, setYearValue] = useState<number>(getYear(date));
  const [decadeStart, setDecadeStart] = useState<Date>(startOfDecade(date));
  const [decadeEnd, setDecadeEnd] = useState<Date>(endOfDecade(date));
  const [view, setView] = useState<CalendarViewType>('days');
  const [scrollDirection, setScrollDirection] = useState<
    'forward' | 'back' | null
  >(null);

  const previousClickHandler = useCallback(() => {
    setScrollDirection('back');
    if (view === 'days') {
      setViewValue(sub(viewValue, { months: 1 }));
    } else if (view === 'months') {
      setYearValue(yearValue - 1);
    } else {
      setDecadeStart(subYears(decadeStart, 10));
      setDecadeEnd(subYears(decadeEnd, 10));
    }
  }, [decadeEnd, decadeStart, view, viewValue, yearValue]);

  const nextClickHandler = useCallback(() => {
    setScrollDirection('forward');
    if (view === 'days') {
      setViewValue(add(viewValue, { months: 1 }));
    } else if (view === 'months') {
      setYearValue(yearValue + 1);
    } else {
      setDecadeStart(addYears(decadeStart, 10));
      setDecadeEnd(addYears(decadeEnd, 10));
    }
  }, [decadeEnd, decadeStart, view, viewValue, yearValue]);

  const headerClickHandler = useCallback(() => {
    const newView = view === 'days' ? 'months' : 'years';
    setScrollDirection(null);
    setView(newView);
    onViewChange?.(newView);
  }, [onViewChange, view]);

  const dateChangeHandler = useCallback(
    (date: Date) => {
      if (!isRange) {
        onChange?.(date);
        setMonthValue(getMonth(date));
        setYearValue(getYear(date));
      } else {
        if (isSameDay(rangeStart, rangeEnd)) {
          onChange?.([minDate([rangeStart, date]), maxDate([rangeEnd, date])]);
        } else {
          onChange?.([date, date]);
        }
      }
    },
    [isRange, onChange, rangeEnd, rangeStart]
  );

  const monthsChangeHandler = useCallback(
    month => {
      setViewValue(setMonth(setYear(min || new Date(), yearValue), month));
      setMonthValue(month);
      setView('days');
      onViewChange?.('days');
    },
    [min, yearValue, onViewChange]
  );

  const yearChangeHandler = useCallback(
    year => {
      setViewValue(setYear(min || new Date(), year));
      setYearValue(year);
      setView('months');
      onViewChange?.('months');
    },
    [min, onViewChange]
  );

  const xAnimation = useMemo(() => {
    switch (scrollDirection) {
      case 'forward':
        return '100%';
      case 'back':
        return '-100%';
      default:
        return 0;
    }
  }, [scrollDirection]);

  return (
    <div className={css.container}>
      <header
        className={classNames(css.header, { [css.multi]: isMultiMonths })}
      >
        <Button
          variant="text"
          disabled={disabled}
          className={css.leftArrow}
          disablePadding
          onClick={previousClickHandler}
        >
          {previousArrow}
        </Button>
        <Button
          disablePadding
          fullWidth
          disabled={disabled}
          variant="text"
          onClick={headerClickHandler}
        >
          <SmallHeading disableMargins>
            {view === 'days' &&
              (isMultiMonths ? (
                <div className={css.calenderMonths}>
                  <DateFormat
                    date={sub(viewValue, { months: 1 })}
                    format={dateFormat}
                    allowToggle={false}
                  />
                  <DateFormat
                    date={viewValue}
                    format={dateFormat}
                    allowToggle={false}
                  />
                </div>
              ) : (
                <DateFormat
                  date={viewValue}
                  format={dateFormat}
                  allowToggle={false}
                />
              ))}

            {view === 'months' && <>{yearValue}</>}
            {view === 'years' && (
              <>
                {decadeStart.getFullYear()}-{decadeEnd.getFullYear()}
              </>
            )}
          </SmallHeading>
        </Button>
        <Button
          variant="text"
          disablePadding
          disabled={disabled}
          onClick={nextClickHandler}
        >
          {nextArrow}
        </Button>
      </header>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={view}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 1 }}
          transition={{
            x: { type: animated ? 'keyframes' : false },
            opacity: { duration: 0.2, type: animated ? 'tween' : false },
            scale: { type: animated ? 'tween' : false }
          }}
        >
          {view === 'days' &&
            (isMultiMonths ? (
              <div className={css.daysContainer}>
                <CalendarDays
                  value={sub(viewValue, { months: 1 })}
                  min={min}
                  max={max}
                  disabled={disabled}
                  isRange={isRange}
                  current={isRange ? [rangeStart, rangeEnd] : date}
                  xAnimation={xAnimation}
                  animated={animated}
                  onChange={dateChangeHandler}
                  isMultiMonths={isMultiMonths}
                  selectedRangeColor={selectedRangeColor}
                  selectedRangerBorderColor={selectedRangerBorderColor}
                />
                <CalendarDays
                  value={viewValue}
                  min={min}
                  max={max}
                  disabled={disabled}
                  isRange={isRange}
                  current={isRange ? [rangeStart, rangeEnd] : date}
                  xAnimation={xAnimation}
                  animated={animated}
                  onChange={dateChangeHandler}
                  isMultiMonths={isMultiMonths}
                  selectedRangeColor={selectedRangeColor}
                  selectedRangerBorderColor={selectedRangerBorderColor}
                />
              </div>
            ) : (
              <CalendarDays
                value={viewValue}
                min={min}
                max={max}
                disabled={disabled}
                isRange={isRange}
                current={isRange ? [rangeStart, rangeEnd] : date}
                xAnimation={xAnimation}
                animated={animated}
                onChange={dateChangeHandler}
                isMultiMonths={isMultiMonths}
                selectedRangeColor={selectedRangeColor}
                selectedRangerBorderColor={selectedRangerBorderColor}
              />
            ))}

          {view === 'months' && (
            <CalendarMonths
              value={monthValue}
              animated={animated}
              onChange={monthsChangeHandler}
            />
          )}
          {view === 'years' && (
            <CalendarYears
              decadeStart={decadeStart}
              decadeEnd={decadeEnd}
              animated={animated}
              value={yearValue}
              xAnimation={xAnimation}
              onChange={yearChangeHandler}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

Calendar.defaultProps = {
  previousArrow: '←',
  nextArrow: '→',
  animated: true,
  dateFormat: 'MMMM yyyy',
  range: [new Date(), new Date()]
};
