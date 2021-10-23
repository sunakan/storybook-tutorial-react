import React from 'react';

import Task from './Task';

export default {
    component: Task,
    title: 'うぇーい',
};

// 3つのストーリー
// 1. デフォルト状態
// 2. Pinned状態
// 3. アーカイブ状態

const Template = args => <Task {...args} />;
export const Default = Template.bind({});
Default.args = {
    task: {
        id: '123',
        title: 'ほげ',
        state: 'TASK_INBOX',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};