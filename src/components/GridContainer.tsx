import React from 'react';
import styles from './GridContainer.module.scss';

/**
 * Gap attributes is only for Flex-box (IE11 support).
 */
enum GapDict {
    'gap-1',
    'gap-2',
    'gap-3',
    'gap-4',
    'gap-5',
    'gap-6',
    'gap-7',
    'gap-8',
    'gap-9',
    'gap-10',
    'gap-11',
    'gap-top',
    'gap-bottom',
}
type GapAttributes = keyof typeof GapDict;

enum XSDict {
    'xs-1',
    'xs-2',
    'xs-3',
    'xs-4',
    'xs-5',
    'xs-6',
    'xs-7',
    'xs-8',
    'xs-9',
    'xs-10',
    'xs-11',
    'xs-12',
    'xs-hide',
    'xs-show',
}
type XSAttributes = keyof typeof XSDict;

enum SDict {
    's-1',
    's-2',
    's-3',
    's-4',
    's-5',
    's-6',
    's-7',
    's-8',
    's-9',
    's-10',
    's-11',
    's-12',
    's-hide',
    's-show',
}
type SAttributes = keyof typeof SDict;

enum MDict {
    'm-1',
    'm-2',
    'm-3',
    'm-4',
    'm-5',
    'm-6',
    'm-7',
    'm-8',
    'm-9',
    'm-10',
    'm-11',
    'm-12',
    'm-hide',
    'm-show',
}
type MAttributes = keyof typeof MDict;

enum LDict {
    'l-1',
    'l-2',
    'l-3',
    'l-4',
    'l-5',
    'l-6',
    'l-7',
    'l-8',
    'l-9',
    'l-10',
    'l-11',
    'l-12',
    'l-hide',
    'l-show',
}
type LAttributes = keyof typeof LDict;

enum XLDict {
    'xl-1',
    'xl-2',
    'xl-3',
    'xl-4',
    'xl-5',
    'xl-6',
    'xl-7',
    'xl-8',
    'xl-9',
    'xl-10',
    'xl-11',
    'xl-12',
    'xl-hide',
    'xl-show',
}
type XLAttributes = keyof typeof XLDict;

enum XXLDict {
    'xxl-1',
    'xxl-2',
    'xxl-3',
    'xxl-4',
    'xxl-5',
    'xxl-6',
    'xxl-7',
    'xxl-8',
    'xxl-9',
    'xxl-10',
    'xxl-11',
    'xxl-12',
    'xxl-hide',
    'xxl-show',
}
type XXLAttributes = keyof typeof XXLDict;

enum HideDict {
    'hide-lt-xs',
    'hide-lt-s',
    'hide-lt-m',
    'hide-lt-l',
    'hide-lt-xl',
    'hide-lt-xxl',
}
type HideAttributes = keyof typeof HideDict;

interface Props {
    attributes: (
        | 'grid'
        | GapAttributes
        | XSAttributes
        | SAttributes
        | MAttributes
        | LAttributes
        | XLAttributes
        | XXLAttributes
        | HideAttributes
    )[];
    debug?: boolean;
    [x: string]: any;
}

function GridContainer(props: Props) {
    return (
        <div
            className={`${props?.className ?? ''}${
                props?.attributes?.length
                    ? ` ${props?.attributes?.join?.(' ')}`
                    : ''
            }${props.debug ? ` ${styles.debug}` : ''}`}
            style={props.style}
        >
            {props?.debug && (
                <span className={styles.content}>
                    {props?.className ?? ''}
                    {props?.attributes?.length
                        ? ` ${props?.attributes.join(' ')}`
                        : ''}
                </span>
            )}
            {props.children}
        </div>
    );
}

function getCssClassNames(): string[] {
    return [
        styles.content,
        ...Object.keys(GapDict),
        ...Object.keys(XSDict),
        ...Object.keys(SDict),
        ...Object.keys(MDict),
        ...Object.keys(LDict),
        ...Object.keys(XLDict),
        ...Object.keys(XXLDict),
        ...Object.keys(HideDict),
    ];
}

export { GridContainer, getCssClassNames };
