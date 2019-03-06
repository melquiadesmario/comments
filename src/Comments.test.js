import React from 'react'
import { shallow } from 'enzyme'

import Comments from './Comments'
import Comment from './Comment'

describe('<Comments />', () => {
    it('should render Comments', () => {
        const comments = {
            a: { id: 'a', comment: 'Comment 1' },
            b: { id: 'b', comment: 'Comment 2' },
            c: { id: 'c', comment: 'Comment 3' }
        }
        const wrapper = shallow(<Comments comments={ comments } />)
        expect(wrapper.find(Comment).length).toBe(3)

        expect(wrapper.find(Comment).get(0).props.c).toBe(comments.a)
        expect(wrapper.find(Comment).get(1).props.c).toBe(comments.b)
        expect(wrapper.find(Comment).get(2).props.c).toBe(comments.c)

        expect(wrapper.find(Comment).get(0).key).toBe('a')
        expect(wrapper.find(Comment).get(1).key).toBe('b')
        expect(wrapper.find(Comment).get(2).key).toBe('c')
    })

    it('should work with no Comments', () => {
        const comments = {}
        const wrapper = shallow(<Comments comments={ comments } />)
        expect(wrapper.find(Comment).length).toBe(0)
    })
})
