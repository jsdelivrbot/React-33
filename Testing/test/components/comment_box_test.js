import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component.hasClass('comment-box'));
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.val('new comment'));
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.val(''));
    });
    //expect($('.year')).to.have.value('2012');
  });
});
