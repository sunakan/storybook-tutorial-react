import {render} from '@testing-library/react';
import {composeStories} from "@storybook/testing-react";
// ストーリーの再利用で、テストがサッとかける
// ストーリーをきっちりとするとテストも一緒にできる！！
import * as TaskListStories from './TaskList.stories'

const { WithPinnedTasks } = composeStories(TaskListStories);

it('renders pinned tasks at the start of the list', () => {
    const { container } = render(<WithPinnedTasks />);
    expect(
        // list-itemの１番目の中身
        container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
    ).not.toBe(null);
});