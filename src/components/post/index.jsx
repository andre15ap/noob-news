import PropTypes from 'prop-types';

import { Post, Img, Tag, Title, Content, Date } from './styles';

export const PostComponent = ({ img, tag, title, post, date }) => {
  return (
    <Post>
      <Img src={img} alt={title} />
      <div>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Content>{post}</Content>
      </div>
    </Post>
  );
};

PostComponent.propTypes = {
  img: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  post: PropTypes.string,
  date: PropTypes.string,
};
