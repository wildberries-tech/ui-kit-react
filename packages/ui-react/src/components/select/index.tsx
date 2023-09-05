import React, { FocusEventHandler, KeyboardEventHandler, ReactNode, useCallback, useMemo } from 'react';
import SelectSource, { components, IndicatorsContainerProps, OptionProps, SingleValueProps } from 'react-select';
import type { FilterOptionOption } from 'react-select/dist/declarations/src/filters';
import type { ActionMeta, OnChangeValue } from 'react-select/dist/declarations/src/types';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';
import { IconCheckMark } from '../icons/check-mark';
import { IconArrowsChevronBottom } from '../icons/arrows/chevron-bottom';

import style from './index.module.pcss';

interface IOption {
    label: string,
    value: string,
    elBefore?: ReactNode | ((option: OptionProps<IOption> | SingleValueProps<IOption>) => ReactNode),
    elAfter?: ReactNode | ((option: OptionProps<IOption> | SingleValueProps<IOption>) => ReactNode),
    disabled?: boolean
}

export interface IProps {
    /**
     * Определяет CSS-классы, которые будут применены к корневому элементу или CSS модулю
     **/
    className?: string | TStyle,
    /**
     * Значение инпута по умолчанию
     **/
    defaultInputValue?: string,
    /**
     * Включает возможность выбора нескольких опций
     **/
    isMulti?: boolean,
    /**
     * Скрывать выбранные опции
     **/
    hideSelectedOptions?: boolean,
    /**
     * Открывает меню выбора
     **/
    menuIsOpen?: boolean,
    /**
     * Открывать меню при первом рендере компонента
     **/
    defaultMenuIsOpen?: boolean,
    /**
     * Режим чтения справа налево
     **/
    isRtl?: boolean,
    /**
     * Коллеция выбранных значений
     **/
    value?: Array<IOption>,
    /**
     * Выбранные опции по умолчанию
     **/
    defaultValue?: Array<IOption>,
    /**
     * Коллекция опций
     **/
    options: Array<IOption>,
    /**
     * Отображается пока не выбран не один элемент
     **/
    placeholder?: ReactNode,
    /**
     * Срабатывает при потере фокуса на элемента
     **/
    onBlur?: FocusEventHandler<HTMLInputElement>,
    /**
     * Срабатывает при фокусе элемента
     **/
    onFocus?: FocusEventHandler<HTMLInputElement>,
    /**
     * Срабатывает при нажатии кнопки
     **/
    onKeyDown?: KeyboardEventHandler<HTMLDivElement>,
    /**
     * Срабатывает когда пользователь прокрутил меню до начала
     **/
    onMenuScrollToTop?: (event: WheelEvent | TouchEvent) => void,
    /**
     * Срабатывает когда пользователь прокрутил меню до конца
     **/
    onMenuScrollToBottom?: (event: WheelEvent | TouchEvent) => void,
    /**
     * Срабатывает при изменении значения
     **/
    onChange?: (newValue: OnChangeValue<IOption, boolean>, actionMeta: ActionMeta<IOption>) => void,
    /**
     * Открывать меню при фокусе на элемент
     **/
    openMenuOnFocus?: boolean,
    /**
     * Открывать меню при клике
     **/
    openMenuOnClick?: boolean,
    /**
     * Количество элементов при нажатии клавиш вверх/вниз
     **/
    pageSize?: number,
    /**
     * Параметр `required` указывает, что данное поле является обязательным для заполнения перед отправкой формы
     */
    required?: boolean,
    /**
     * Устанавливает порядок перехода по кнопке с помощью клавиши `Tab`.
     **/
    tabIndex?: number,
    /**
     * Название инпута
     **/
    name?: string,
    /**
     * Прокрутка меню при открытии
     **/
    menuShouldScrollIntoView?: boolean,
    /**
     * Блокировка прокрутки при открытом меню
     **/
    menuShouldBlockScroll?: boolean,
    /**
     * Включает возможность поиска по опциям
     **/
    isSearchable?: boolean,
    /**
     * Включает возможность очистки выбранного значения
     **/
    isClearable?: boolean,
    /**
     * Устанавливает фокус на элемент при первом рендере компонента
     **/
    autoFocus?: boolean,
    /**
     * Удалять выбранную в данный момент опцию, когда пользователь нажимает клавишу Backspace при выборе isClearable или isMulti.
     **/
    backspaceRemovesValue?: boolean,
    /**
     * Удалять фокус ввода, когда пользователь выбирает опцию (удобно для отключения клавиатуры на сенсорных устройствах).
     **/
    blurInputOnSelect?: boolean,
    /**
     * Когда пользователь достигает верхней/нижней части меню, запретите прокрутку родительского элемента прокрутки.
     **/
    captureMenuScroll?: boolean,
    /**
     * Закрывать меню выбора, когда пользователь выбирает опцию
     **/
    closeMenuOnSelect?: boolean,
    /**
     * Если `true`, закроет меню выбора, когда пользователь прокручивает `document/body`.
     *
     * Если `function` принимает стандартное событие `ScrollEvent`, вы возвращаете логическое значение: `true` - Меню закрывается, `false` - Меню остается открытым.
     *
     * Это полезно, когда у вас есть прокручиваемое модальное окно и вы хотите перенести меню, но хотите избежать артефактов.
     **/
    closeMenuOnScroll?: boolean | ((event: Event) => boolean),
    controlShouldRenderValue?: boolean,
    /**
     * Очистить все значения и закрыть меню при нажатии `esc`
     **/
    escapeClearsValue?: boolean,
    /**
     * Фильтрация опций
     **/
    filterOption?: (option: FilterOptionOption<IOption>) => boolean,
    /**
     * Отключает поле ввода
     **/
    isDisabled?: boolean,
    /**
     * Приводит компонент в состояние ошибки
     **/
    isError?: boolean,
    /**
     * Лейбл поля
     **/
    label?: ReactNode
}

/**
 * Компонент позволяет создавать поля ввода с выпадающим списком
 **/
export const Select = ({ isSearchable = false, ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    const elOptionSelected = useCallback((option: OptionProps<IOption>) => {
        if(option.isSelected) {
            return (
                <IconCheckMark
                    svg={{
                        className: cn('select__icon-check-mark', {
                            'select__icon-check-mark_disabled': option.isDisabled
                        })
                    }}
                />
            );
        }
    }, []);

    const elOptionBefore = useCallback((option: OptionProps<IOption> | SingleValueProps<IOption>) => {
        if(option.data.elBefore) {
            if(typeof option.data.elBefore === 'function') {
                return option.data.elBefore(option);
            }

            return option.data.elBefore;
        }
    }, []);

    const elOptionAfter = useCallback((option: OptionProps<IOption> | SingleValueProps<IOption>) => {
        if(option.data.elAfter) {
            if(typeof option.data.elAfter === 'function') {
                return option.data.elAfter(option);
            }

            return option.data.elAfter;
        }
    }, []);

    const componentOption = useCallback((option: OptionProps<IOption>) => (
        <components.Option {...option}>
            {elOptionSelected(option)}
            {elOptionBefore(option)}
            {option.children}
            {elOptionAfter(option)}
        </components.Option>
    ), []);

    const componentSingleValue = useCallback((option: SingleValueProps<IOption>) => (
        <components.SingleValue {...option}>
            {elOptionBefore(option)}
            {option.children}
            {elOptionAfter(option)}
        </components.SingleValue>
    ), []);

    const componentIndicatorsContainer = useCallback((option: IndicatorsContainerProps<IOption>) => (
        <components.IndicatorsContainer {...option}>
            <IconArrowsChevronBottom
                svg={{
                    className: cn('select__icon-arrow-bottom', {
                        'select__icon-arrow-bottom_disabled': option.isDisabled,
                        'select__icon-arrow-bottom_open'    : option.selectProps.menuIsOpen
                    })
                }}
            />
        </components.IndicatorsContainer>
    ), []);

    const elLabel = useMemo(() => {
        if(props.label) {
            return (
                <span
                    className={cn('select__label')}
                    children={props.label}
                />
            );
        }
    }, [props.label]);

    return (
        <label className={cn('select')}>
            {elLabel}
            <SelectSource
                placeholder={props.placeholder ?? ''}
                options={props.options}
                isMulti={props.isMulti}
                hideSelectedOptions={props.hideSelectedOptions}
                menuIsOpen={props.menuIsOpen}
                defaultMenuIsOpen={props.defaultMenuIsOpen}
                defaultValue={props.defaultValue}
                filterOption={props.filterOption}
                isSearchable={isSearchable}
                name={props.name}
                isClearable={props.isClearable}
                escapeClearsValue={props.escapeClearsValue}
                value={props.value}
                autoFocus={props.autoFocus}
                isRtl={props.isRtl}
                backspaceRemovesValue={props.backspaceRemovesValue}
                blurInputOnSelect={props.blurInputOnSelect}
                captureMenuScroll={props.captureMenuScroll}
                closeMenuOnSelect={props.closeMenuOnSelect}
                closeMenuOnScroll={props.closeMenuOnScroll}
                controlShouldRenderValue={props.controlShouldRenderValue}
                isDisabled={props.isDisabled}
                defaultInputValue={props.defaultInputValue}
                menuShouldBlockScroll={props.menuShouldBlockScroll}
                menuShouldScrollIntoView={props.menuShouldScrollIntoView}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onKeyDown={props.onKeyDown}
                onMenuScrollToTop={props.onMenuScrollToTop}
                onMenuScrollToBottom={props.onMenuScrollToBottom}
                onChange={props.onChange}
                openMenuOnFocus={props.openMenuOnFocus}
                openMenuOnClick={props.openMenuOnClick}
                pageSize={props.pageSize}
                tabIndex={props.tabIndex}
                classNames={{
                    menu          : () => cn('select__menu'),
                    menuList      : () => cn('select__menu-list'),
                    singleValue   : () => cn('select__single-value'),
                    control       : (option) => cn('select__control', {
                        'select__control_disabled': option.isDisabled,
                        'select__control_error'   : props.isError
                    }),
                    valueContainer: () => cn('select__value-container'),
                    placeholder   : () => cn('select__placeholder'),
                    option        : (option) => cn('select__option', {
                        'select__option_focused' : option.isFocused,
                        'select__option_disabled': option.isDisabled,
                        'select__option_selected': option.isSelected
                    })
                }}
                components={{
                    Option             : componentOption,
                    SingleValue        : componentSingleValue,
                    IndicatorSeparator : null,
                    IndicatorsContainer: componentIndicatorsContainer
                }}
                getOptionLabel={(option) => option.label}
                isOptionDisabled={(option) => !!option.disabled}
            />
        </label>
    );
};
