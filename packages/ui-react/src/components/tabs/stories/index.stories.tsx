import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TabsComposition } from '..';

import { SetupExtended } from './setup.extended';

const META: Meta<typeof TabsComposition> = {
    title: 'Components/Tabs',
    component: TabsComposition,
    tags: ['autodocs'],
    parameters: {
        documentation: {
            setup: {
                default: {
                    title: 'Использование композиции'
                },
                extended: {
                    title: 'Использование декомпозиции',
                    content: <SetupExtended />
                }
            }
        }
    },
    args: {
        items: [{
            id: 1,
            elTab: 'Таб #1',
            elPanel: 'Панель #1'
        }, {
            id: 2,
            elTab: 'Таб #2',
            elPanel: 'Панель #2'
        }, {
            id: 3,
            elTab: 'Таб #3',
            elPanel: 'Панель #3'
        }]
    }
};

export default META;

export const Pane: StoryObj<typeof META> = {
    args: {
        presetStyle: 'pane'
    }
};

export const Page: StoryObj<typeof META> = {
    args: {
        presetStyle: 'page'
    }
};

export const Section: StoryObj<typeof META> = {
    args: {
        presetStyle: 'section'
    }
};
